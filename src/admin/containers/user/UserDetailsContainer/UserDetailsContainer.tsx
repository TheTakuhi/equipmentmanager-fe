import { FC } from "react";

import { Box, Button, Divider, HStack } from "@chakra-ui/react";
import { useParams } from "@tanstack/react-router";
import { Share2 } from "react-feather";

import UserAvatar from "../../../../common/components/CurrentUser/UserAvatar";
import UserDetailSkeleton from "../../../../common/components/Skeletons/UserDetailSkeleton";
import { OrgChartDialog } from "../../../../common/dialogs/OrgChartDialog";
import { useGetUserById } from "../../../../common/hooks/queries/users/useGetUserById";
import { useActionDialog } from "../../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { oneUserDetailRoute } from "../../../../common/routes/common/userDetail/user/oneUserDetailRoute";
import UserDetailRow from "../../../components/UserDetailRow";

const UserDetailsContainer: FC = () => {
  const { show } = useActionDialog();
  const userIdParam = useParams({ from: oneUserDetailRoute }).userDetailId;
  const { data: user, isLoading } = useGetUserById(userIdParam);

  const handleOrgChart = () => show(<OrgChartDialog userId={user?.id ?? ""} />);

  if (isLoading) return <UserDetailSkeleton />;

  return (
    <HStack gap="2rem" sx={{ padding: "1rem 1.5rem" }}>
      <UserAvatar
        avatarWidth="4rem"
        avatarHeight="4rem"
        badgeTop="2.75rem"
        badgeLeft="2.75rem"
        isLoadingUser={isLoading}
        currentUser={user}
      />
      <HStack gap="1rem">
        <UserDetailRow label="Full name" text={user?.fullName} />
        <Divider orientation="vertical" height="2rem" />
        <UserDetailRow label="Email" text={user?.email} />
        <Divider orientation="vertical" height="2rem" />
        <UserDetailRow label="Login" text={user?.login} />
      </HStack>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="secondary"
          onClick={handleOrgChart}
          leftIcon={<Share2 />}
          sx={{ fontSize: "0.875em" }}
        >
          Organization chart
        </Button>
      </Box>
    </HStack>
  );
};

export default UserDetailsContainer;
