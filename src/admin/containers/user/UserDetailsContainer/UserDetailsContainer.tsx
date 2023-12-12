import { FC } from "react";

import { Box, Divider, GridItem, SimpleGrid, Skeleton, SkeletonText, useMediaQuery, useTheme } from "@chakra-ui/react";
import { useParams } from "@tanstack/react-router";

import { usersRoute } from "../../../../common/routes/common/users/usersRoute";
import { useGetUserById } from "../../../../common/hooks/queries/users/useGetUserById";
import UserDetailRow from "../../../components/UserDetailRow";
import UserAvatar from "../../../../common/components/CurrentUser/UserAvatar";

const UserDetailsContainer: FC = () => {
  const theme = useTheme();

  const userIdParam = useParams({ from: usersRoute }).userId;
  const { data: user, isLoading: isLoadingUser } = useGetUserById(userIdParam);

  const [isSmallerThanMD] = useMediaQuery("(max-width: 768px)");
  const [isSmallerThanLG] = useMediaQuery("(max-width: 992px)");
  const [isBiggerThanMD] = useMediaQuery("(min-width: 768px)");
  const [isBiggerThanLG] = useMediaQuery("(min-width: 992px)");

  // TODO style Skeleton as custom component
  if (isLoadingUser)
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

  // TODO style spacing
  return (
    <SimpleGrid
      sx={{
        padding: "1rem 1.5rem 1.5rem 1.5rem",
        borderBottom: "1px solid #313033",
        display: "flex",
        alignItems: isSmallerThanMD ? "" : "center",
        gap: "1.25rem"
      }}
    >
      <UserAvatar avatarWidth="4rem" avatarHeight="4rem" badgeTop="2.75rem" badgeLeft="2.75rem" isLoadingUser={isLoadingUser} currentUser={user} />
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing="19px"
        sx={{
          alignItems: "center"
        }}
      >
        <GridItem
          sx={{
            height: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
          }}
        >
          <UserDetailRow label="Full name" text={user?.fullName} />
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
            <UserDetailRow label="Email" text={user?.email} />
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
            <UserDetailRow label="Login" text={user?.login} />
          </GridItem>
        </GridItem>
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default UserDetailsContainer;