import { FC } from "react";

import {
  Divider,
  GridItem,
  SimpleGrid,
  Text,
  useMediaQuery,
  useTheme,
} from "@chakra-ui/react";

import ItemDetailSkeleton from "../../../common/components/Skeletons/ItemDetailSkeleton";
import { useGetItemById } from "../../../common/hooks/queries/items/useGetItemById";
import { useGetLoanByItemId } from "../../../common/hooks/queries/loans/useGetLoanByItemId";
import { ItemState } from "../../../common/models/item/ItemState";
import ItemDetailHeader from "../../components/ItemDetailHeader";
import ItemDetailRow from "../../components/ItemDetailRow";

interface ItemDetailsContainerProps {
  itemIdParam: string;
}

const ItemDetailsContainer: FC<ItemDetailsContainerProps> = ({
  itemIdParam,
}) => {
  const theme = useTheme();

  const { data: item, isLoading: isLoadingItem } = useGetItemById(itemIdParam);
  const { data: loan, isLoading: isLoadingLoan } =
    useGetLoanByItemId(itemIdParam);

  const [isSmallerThanMD] = useMediaQuery("(max-width: 768px)");
  const [isSmallerThanLG] = useMediaQuery("(max-width: 992px)");
  const [isBiggerThanMD] = useMediaQuery("(min-width: 768px)");
  const [isBiggerThanLG] = useMediaQuery("(min-width: 992px)");

  if (isLoadingItem || isLoadingLoan || item === undefined)
    return <ItemDetailSkeleton />;

  return (
    <SimpleGrid
      sx={{
        padding: "1rem 1.5rem 1.5rem 1.5rem",
        gap: "0.5rem",
        borderBottom: "1px solid #313033",
      }}
    >
      <ItemDetailHeader item={item} />
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
          <ItemDetailRow label="Creation date" text={item?.creationDate} />
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
            {/* //TODO FIX ITEM DETAIL USER INFO */}
            {/* <ItemDetailRow */}
            {/*  label="Created by" */}
            {/*  text={item?.owner.fullName} */}
            {/* /> */}
            {/* <ItemDetailRow */}
            {/*  label="State" */}
            {/*  pill={ */}
            {/*    <Badge variant="info" label={item?.state.toString() || ""} /> */}
            {/*  } */}
            {/* /> */}
            <ItemDetailRow
              label="Lender"
              text={
                item?.state === ItemState.BORROWED
                  ? loan?.borrower.fullName
                  : "-"
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
