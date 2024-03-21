import { FC } from "react";

import { Divider, GridItem, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import { useParams } from "@tanstack/react-router";

import UserAvatar from "../../../../common/components/CurrentUser/UserAvatar";
import UserDetailSkeleton from "../../../../common/components/Skeletons/UserDetailSkeleton";
import { useGetUserById } from "../../../../common/hooks/queries/users/useGetUserById";
import { oneUserDetailRoute } from "../../../../common/routes/common/userDetail/user/oneUserDetailRoute";
import UserDetailRow from "../../../components/UserDetailRow";

// TODO FIX SPACING DESIGN
const UserDetailsContainer: FC = () => {
  const userIdParam = useParams({ from: oneUserDetailRoute }).userDetailId;
  const { data: user, isLoading } = useGetUserById(userIdParam);

  const [isSmallerThanMD] = useMediaQuery("(max-width: 768px)");
  const [isSmallerThanLG] = useMediaQuery("(max-width: 992px)");
  const [isBiggerThanMD] = useMediaQuery("(min-width: 768px)");
  const [isBiggerThanLG] = useMediaQuery("(min-width: 992px)");

  if (isLoading) return <UserDetailSkeleton />;

  return (
    <SimpleGrid
      sx={{
        padding: "1rem 1.5rem 1.5rem 1.5rem",
        borderBottom: "1px solid #313033",
        display: "flex",
        alignItems: isSmallerThanMD ? "" : "center",
        gap: "1.25rem",
      }}
    >
      <UserAvatar
        avatarWidth="4rem"
        avatarHeight="4rem"
        badgeTop="2.75rem"
        badgeLeft="2.75rem"
        isLoadingUser={isLoading}
        currentUser={user}
      />
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
        sx={{
          alignItems: "center",
        }}
      >
        <GridItem
          sx={{
            height: "auto",
            display: "flex",
            flexDirection: "column",
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
            }}
            px={isSmallerThanMD ? "0px" : "1.25rem"}
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
            }}
            pl={isSmallerThanLG ? "0px" : "1.25rem"}
          >
            <UserDetailRow label="Login" text={user?.login} />
          </GridItem>
        </GridItem>
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default UserDetailsContainer;
