import { FC, useEffect } from "react";

import { useSearch } from "@tanstack/react-router";

import TSTable from "../../../../common/components/TSTable/TSTable";
import { useGetUsers } from "../../../../common/hooks/queries/users/useGetUsers";
import { useAllUserRoles } from "../../../../common/hooks/queries/utility/useAllUserRoles";
import { SearchParams } from "../../../../common/models/SearchParams";
import { User } from "../../../../common/models/user/User";
import { USERSRoute } from "../../../../common/routes/common/users/usersRoute";
import { useUsersTableColumns } from "../../../../manager/hooks/useUsersTableColumns";

interface UsersTableContainerProps {
  tableHeight: string;
}

const UsersTableContainer: FC<UsersTableContainerProps> = ({ tableHeight }) => {
  const columns = useUsersTableColumns();

  const search: SearchParams = useSearch({ from: `${USERSRoute.id}/` });

  const {
    data: usersData,
    isLoading: isLoadingUsers,
    refetch,
  } = useGetUsers(
    search.pagination !== undefined && search.table !== undefined
      ? {
          [`${search.search !== undefined ? search.search.param : ""}`]:
            search.search !== undefined ? search.search.value : "",
          [`${search.table.columnFilters[0]?.id}`]:
            search.table.columnFilters[0]?.value,
          pageable: {
            page: search.pagination.index,
            size: search.pagination.size,
            sort: search.table.sort,
          },
        }
      : {},
  );

  const { userRoles } = useAllUserRoles();

  useEffect(() => {
    refetch();
  }, [search]);

  return (
    <TSTable<User>
      route={`${USERSRoute.id}/`}
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
