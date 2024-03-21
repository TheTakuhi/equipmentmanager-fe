import { FC } from "react";

import { Box, Heading, SkeletonText, useTheme } from "@chakra-ui/react";
import { useNavigate, useParams } from "@tanstack/react-router";

import { useGetUserById } from "../../../../common/hooks/queries/users/useGetUserById";
import { oneUserDetailRoute } from "../../../../common/routes/common/userDetail/user/oneUserDetailRoute";

const UserBreadCrumbHeader: FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const userIdParam = useParams({ from: oneUserDetailRoute }).userDetailId;
  const { data: user, isLoading } = useGetUserById(userIdParam);

  const handleRedirectBack = () => {
    navigate({
      to: "/equipment-manager/management/my-people",
    });
  };

  if (isLoading)
    return (
      <SkeletonText
        noOfLines={1}
        spacing="2"
        skeletonHeight="3"
        mt="1.5rem"
        px="1.5rem"
        startColor="#222222"
        endColor="#444444"
        width="20rem"
        fontSize={theme.components.Heading.sizes.h1.fontSize}
      />
    );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "inline-flex",
        paddingX: "1.5rem",
        paddingTop: "1rem",
      }}
    >
      <Heading
        size="h1"
        sx={{
          color: theme.palette.text.disabled,
          cursor: "pointer",
        }}
        onClick={handleRedirectBack}
      >
        My People &nbsp;&gt;&nbsp;
      </Heading>
      <Heading
        size="h1"
        sx={{
          color: theme.palette.text.primary,
        }}
      >
        {user?.fullName}
      </Heading>
    </Box>
  );
};

export default UserBreadCrumbHeader;
