import { FC } from "react";

import {
  Box,
  Divider,
  GridItem,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
  useMediaQuery,
  useTheme,
} from "@chakra-ui/react";
import { useParams } from "@tanstack/react-router";

import Badge from "../../../common/components/Badge";
import { useGetItemById } from "../../../common/hooks/queries/items/useGetItemById";
import { useGetLoanByItemId } from "../../../common/hooks/queries/loans/useGetLoanByItemId";
import { ItemState } from "../../../common/models/item/ItemState";
import { itemsRoute } from "../../../common/routes/common/items/itemsRoute";
import ItemDetailHeader from "../../components/ItemDetailHeader";
import ItemDetailRow from "../../components/ItemDetailRow";

const ItemDetailsContainer: FC = () => {
  const theme = useTheme();

  const itemIdParam = useParams({ from: itemsRoute }).itemId;
  const { data: item, isLoading: isLoadingItem } = useGetItemById(itemIdParam);
  const { data: loan, isLoading: isLoadingLoan } =
    useGetLoanByItemId(itemIdParam);

  const [isSmallerThanMD] = useMediaQuery("(max-width: 768px)");
  const [isSmallerThanLG] = useMediaQuery("(max-width: 992px)");
  const [isBiggerThanMD] = useMediaQuery("(min-width: 768px)");
  const [isBiggerThanLG] = useMediaQuery("(min-width: 992px)");

  // TODO style Skeleton as custom component
  if (isLoadingItem || isLoadingLoan)
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "inline-flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SkeletonText
            noOfLines={1}
            spacing="4"
            skeletonHeight="5"
            mt="1.75rem"
            px="1.5rem"
            startColor="#222222"
            endColor="#444444"
            fontSize={theme.components.Heading.sizes.h2.fontSize}
            width="8rem"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "inline-flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Skeleton
              height="40px"
              width="9rem"
              mt="1.75rem"
              mr="0.625rem"
              startColor="#222222"
              endColor="#444444"
            />
            <Skeleton
              height="40px"
              width="7rem"
              mt="1.75rem"
              mr="1.25rem"
              startColor="#222222"
              endColor="#444444"
            />
          </Box>
        </Box>
        <SkeletonText
          noOfLines={5}
          spacing="4"
          skeletonHeight="3"
          mt="0.75rem"
          pb="1.85rem"
          px="1.5rem"
          startColor="#222222"
          endColor="#444444"
          fontSize={theme.components.Heading.sizes.h2.fontSize}
          width="65%"
        />
      </>
    );

  return (
    <SimpleGrid
      sx={{
        padding: "1rem 1.5rem 1.5rem 1.5rem",
        gap: "0.5rem",
        borderBottom: "1px solid #313033",
      }}
    >
      <ItemDetailHeader />
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing="19px"
      >
        <GridItem
          sx={{
            height: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
          }}
        >
          <ItemDetailRow label="Serial code" text={item?.serialCode} />
          <ItemDetailRow label="Type" text={item?.type} />
          <ItemDetailRow label="Quality state" text={item?.qualityState} />
          <ItemDetailRow label="Date of creation" text={item?.dateOfCreation} />
        </GridItem>
        <GridItem sx={{ display: "flex" }}>
          {isBiggerThanMD ? (
            <Divider
              orientation="vertical"
              sx={{
                border: "1px solid #7A7A80",
                height: "auto",
              }}
            />
          ) : (
            ""
          )}
          <GridItem
            sx={{
              height: "auto",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}
            pl={isSmallerThanMD ? "0px" : "21px"}
          >
            <ItemDetailRow
              label="Created by"
              text={item?.managerOwner.fullName}
            />
            <ItemDetailRow
              label="State"
              pill={
                <Badge variant="info" label={item?.state.toString() || ""} />
              }
            />
            <ItemDetailRow
              label="Lender"
              text={
                item?.state === ItemState.BORROWED ? loan?.lender.fullName : "-"
              }
            />
          </GridItem>
        </GridItem>
        <GridItem sx={{ display: "flex" }}>
          {isBiggerThanLG ? (
            <Divider
              orientation="vertical"
              sx={{
                border: "1px solid #7A7A80",
                height: "auto",
              }}
            />
          ) : (
            ""
          )}
          <GridItem
            sx={{
              height: "auto",
              display: "flex",
              width: "100%",
              flexDirection: "column",
              gap: "0.625rem",
            }}
            pl={isSmallerThanLG ? "0px" : "21px"}
          >
            <Text
              sx={{
                color: theme.palette.text.disabled,
                fontSize: theme.components.Text.sizes.body2.fontSize,
              }}
            >
              Comment
            </Text>
            <Text
              sx={{
                color: theme.palette.text.primary,
                fontSize: theme.components.Text.sizes.body1.fontSize,
                width: "100%",
              }}
            >
              {item?.comment}
            </Text>
          </GridItem>
        </GridItem>
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default ItemDetailsContainer;
