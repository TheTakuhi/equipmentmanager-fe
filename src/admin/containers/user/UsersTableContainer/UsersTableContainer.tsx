import { FC, useEffect, useState } from "react";

import TSTable, {
  TableStateProps,
} from "../../../../common/components/TSTable/TSTable";
import { TableSearchQuery } from "../../../../common/forms/useTableSearchForm/useTableSearchForm";
import { useGetUsers } from "../../../../common/hooks/queries/users/useGetUsers";
import { useAllUserRoles } from "../../../../common/hooks/queries/utility/useAllUserRoles";
import { useUsersTableColumns } from "../../../../common/hooks/utils/useUsersTableColumns";

interface UsersTableContainerProps {
  searchQuery?: TableSearchQuery;
  tableHeight: string;
}

const UsersTableContainer: FC<UsersTableContainerProps> = ({
  searchQuery,
  tableHeight,
}) => {
  const columns = useUsersTableColumns();

  const [tableStateProps, setTableStateProps] = useState<TableStateProps>({
    pageIndex: 0,
    pageSize: 15,
    sort: "",
    sortDirection: "",
    columnFilters: [],
  });

  const {
    data: usersData,
    isLoading: isLoadingUsers,
    refetch,
  } = useGetUsers({
    [`${searchQuery?.param}`]: searchQuery?.value,
    [`${
      tableStateProps.columnFilters ? tableStateProps.columnFilters[0]?.id : ""
    }`]: tableStateProps.columnFilters
      ? tableStateProps.columnFilters[0]?.value
      : "",
    pageable: {
      page: tableStateProps.pageIndex,
      size: tableStateProps.pageSize,
      sort: tableStateProps.sort,
      [`${tableStateProps.sort}.dir`]: tableStateProps.sortDirection,
    },
  });

  const { userRoles } = useAllUserRoles();

  useEffect(() => {
    refetch();
  }, [searchQuery, tableStateProps]);

  return (
    <TSTable
      columns={columns}
      data={usersData?.content ?? []}
      isLoading={isLoadingUsers}
      pageable={usersData}
      tableStateCallback={(info) => setTableStateProps(info)}
      filterData={userRoles}
      tableHeight={tableHeight}
    />
  );
};

export default UsersTableContainer;
