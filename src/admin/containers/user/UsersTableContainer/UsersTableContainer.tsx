import { FC } from "react";

import { useSearch } from "@tanstack/react-router";

import TSTable from "../../../../common/components/TSTable/TSTable";
import { useGetUsers } from "../../../../common/hooks/queries/users/useGetUsers";
import { useAllUserRoles } from "../../../../common/hooks/utils/useAllUserRoles";
import { SearchParams } from "../../../../common/models/SearchParams";
import { User } from "../../../../common/models/user/User";
import { AllUSERSRoute } from "../../../../common/routes/common/users/allUsers/allUsersRoute";
import { createQueryParams } from "../../../../common/utils/queryParams";
import { useUsersTableColumns } from "../../../../manager/hooks/useUsersTableColumns";

interface UsersTableContainerProps {
  tableHeight: string;
}

const UsersTableContainer: FC<UsersTableContainerProps> = ({ tableHeight }) => {
  const columns = useUsersTableColumns();

  const search: SearchParams = useSearch({ from: AllUSERSRoute.id });

  const { data: usersData, isLoading: isLoadingUsers } = useGetUsers({
    ...createQueryParams(search),
  });

  const { userRoles } = useAllUserRoles();

  return (
    <TSTable<User>
      route={AllUSERSRoute.id}
      columns={columns}
      data={usersData?.content ?? []}
      isLoading={isLoadingUsers}
      pageable={usersData}
      filterData={userRoles}
      tableHeight={tableHeight}
    />
  );
};

export default UsersTableContainer;
