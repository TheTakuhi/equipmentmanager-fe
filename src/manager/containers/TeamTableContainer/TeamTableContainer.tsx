import { FC } from "react";

import TSTable from "../../../common/components/TSTable";
import { useGetUsers } from "../../../common/hooks/queries/users/useGetUsers";
import { TEAMSRoute } from "../../../common/routes/common/teams/teamsRoute";
import { useTeamMembersTableColumns } from "../../hooks/useTeamMembersTableColumns";

const TeamTableContainer: FC = () => {
  const columns = useTeamMembersTableColumns();

  const { data, isLoading } = useGetUsers();

  return (
    <TSTable
      route={TEAMSRoute.id}
      columns={columns}
      data={data?.content ?? []}
      isLoading={isLoading}
      tableHeight="unset"
      hidePagination
    />
  );
};

export default TeamTableContainer;
