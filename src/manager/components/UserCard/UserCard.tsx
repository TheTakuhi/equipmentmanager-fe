import { FC } from "react";

import { HStack, VStack, Text } from "@chakra-ui/react";

import Avatar from "../../../common/components/Avatar";
import { AvatarDataProps } from "../../../common/components/Avatar/Avatar";
import { User } from "../../../common/models/user/User";

type UserCardProps = {
  user: Partial<User>;
};

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <HStack
      gap="1.25rem"
      sx={{
        width: "350px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "rgba(255,255,255,.1)",
        padding: "0.5rem 1rem",
      }}
    >
      <Avatar userDetail={user as AvatarDataProps} />
      <VStack gap={0} alignItems="flex-start">
        <Text>
          <span
            style={{
              fontWeight: "600",
              fontSize: "1.125em",
              paddingRight: "0.25rem",
            }}
          >
            {user?.fullName}
          </span>{" "}
          <span style={{ color: "rgba(255,255,255,0.4)" }}>{user?.login}</span>
        </Text>
        <Text sx={{ fontSize: "0.75em", color: "rgba(255,255,255,0.4)" }}>
          {user?.email}
        </Text>
      </VStack>
    </HStack>
  );
};
