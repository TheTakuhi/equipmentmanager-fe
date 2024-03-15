import { FC } from "react";

import { useSearch } from "@tanstack/react-router";

import TSTable from "../../../common/components/TSTable/TSTable";
import { useGetUsers } from "../../../common/hooks/queries/users/useGetUsers";
import { useAllUserRoles } from "../../../common/hooks/queries/utility/useAllUserRoles";
import { SearchParams } from "../../../common/models/SearchParams";
import { User } from "../../../common/models/user/User";
import { ALLMyPeopleRoute } from "../../../common/routes/common/myPeople/allMyPeople/allMyPeopleRoute";
import { createQueryParams } from "../../../common/utils/queryParams";
import { useMyPeopleTableColumns } from "../../hooks/useMyPeopleTableColumns";

interface MyPeopleTableContainerProps {
  tableHeight: string;
}

const MyPeopleTableContainer: FC<MyPeopleTableContainerProps> = ({
  tableHeight,
}) => {
  const columns = useMyPeopleTableColumns();

  const search: SearchParams = useSearch({ from: ALLMyPeopleRoute.id });

  const { data: usersData, isLoading: isLoadingUsers } = useGetUsers({
    ...createQueryParams(search),
  });

  const { userRoles } = useAllUserRoles();

  return (
    <TSTable<User>
      route={ALLMyPeopleRoute.id}
      columns={columns}
      data={usersData?.content ?? []}
      isLoading={isLoadingUsers}
      pageable={usersData}
      filterData={userRoles}
      tableHeight={tableHeight}
    />
  );
};

export default MyPeopleTableContainer;
