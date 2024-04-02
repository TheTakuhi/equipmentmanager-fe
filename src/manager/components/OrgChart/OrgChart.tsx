import { FC } from "react";

import { Divider, Skeleton, Text, VStack } from "@chakra-ui/react";

import { useGetUsersHierarchy } from "../../../common/hooks/queries/users/useGetUsersHierarchy";
import {
  UserHierarchy,
  UserHierarchyWithManager,
} from "../../../common/models/user/UserHierarchy";
import { UserCard } from "../UserCard";

type OrgChartProps = {
  userId: string;
};

export const OrgChart: FC<OrgChartProps> = ({ userId }) => {
  const { data, isLoading, isError } = useGetUsersHierarchy(userId);

  const getUsers = (
    hierarchyData: UserHierarchyWithManager,
  ): UserHierarchy[] => {
    const users: UserHierarchy[] = [];
    const { id, login, email, firstName, lastName, fullName, photo, manager } =
      hierarchyData;

    users.push({ id, login, email, firstName, lastName, fullName, photo });

    if (manager) {
      users.push(...getUsers(manager));
    }

    return users;
  };

  let hierarchy: UserHierarchy[] = [];
  if (data) hierarchy = getUsers(data).reverse();

  if (isLoading) return <Skeleton width="100%" height="150px" />;

  if (isError) return <Text>An error has occurred</Text>;

  return (
    <VStack gap={0} sx={{ paddingBottom: "1rem" }}>
      {hierarchy.map((u, i) => (
        <>
          <UserCard key={u.id} user={u} />
          {i < hierarchy.length - 1 ? (
            <Divider
              key={i}
              orientation="vertical"
              sx={{ height: "24px", padding: 0 }}
            />
          ) : null}
        </>
      ))}
    </VStack>
  );
};
