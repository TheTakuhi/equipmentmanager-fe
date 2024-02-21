import { FC } from "react";

import TSTable from "../../../common/components/TSTable";
import { Team } from "../../../common/models/team/Team";
import { TEAMSRoute } from "../../../common/routes/common/teams/teamsRoute";
import { useTeamMembersTableColumns } from "../../hooks/useTeamMembersTableColumns";

type TeamTableContainerProps = {
  team: Team;
};

const TeamTableContainer: FC<TeamTableContainerProps> = ({ team }) => {
  const columns = useTeamMembersTableColumns(team);

  return (
    <TSTable
      route={TEAMSRoute.id}
      columns={columns}
      data={team.members}
      tableHeight="unset"
      hidePagination
    />
  );
};

export default TeamTableContainer;
