import { FC, useEffect } from "react";

import { useSearch } from "@tanstack/react-router";

import TSTable from "../../../../common/components/TSTable/TSTable";
import { useGetUsers } from "../../../../common/hooks/queries/users/useGetUsers";
import { useAllUserRoles } from "../../../../common/hooks/queries/utility/useAllUserRoles";
import { USERSRoute } from "../../../../common/routes/common/users/usersRoute";
import { useUsersTableColumns } from "../../../../manager/hooks/useUsersTableColumns";

interface UsersTableContainerProps {
  tableHeight: string;
}

const UsersTableContainer: FC<UsersTableContainerProps> = ({ tableHeight }) => {
  const columns = useUsersTableColumns();

  const search = useSearch({ from: `${USERSRoute.id}/` });

  const {
    data: usersData,
    isLoading: isLoadingUsers,
    refetch,
  } = useGetUsers({
    [`${search.searchBy}`]: search.value,
    [`${search.columnFilters ? search.columnFilters[0]?.id : ""}`]:
      search.columnFilters ? search.columnFilters[0]?.value : "",
    pageable: {
      page: search.pageIndex,
      size: search.pageSize,
      sort: search.sort,
    },
  });

  const { userRoles } = useAllUserRoles();

  useEffect(() => {
    refetch();
  }, [search]);

  return (
    <TSTable
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
