import { FC } from "react";

import { Alert } from "@chakra-ui/react";
import { useSearch } from "@tanstack/react-router";

import TSTable from "../../../common/components/TSTable";
import { useGetTeamMembers } from "../../../common/hooks/queries/teams/useGetTeamMembers";
import { SearchParams } from "../../../common/models/SearchParams";
import { Team } from "../../../common/models/team/Team";
import { User } from "../../../common/models/user/User";
import { TEAMSRoute } from "../../../common/routes/common/teams/teamsRoute";
import { createQueryParams } from "../../../common/utils/queryParams";
import { useTeamMembersTableColumns } from "../../hooks/useTeamMembersTableColumns";

type TeamTableContainerProps = {
  team: Team;
};

const TeamTableContainer: FC<TeamTableContainerProps> = ({ team }) => {
  const search: SearchParams & { active?: string; query?: { query: string } } =
    useSearch({
      from: TEAMSRoute.id,
    });

  const { data, isLoading, isError } = useGetTeamMembers(team.id, {
    ...createQueryParams(search, { search: search.query?.query }),
  });

  const columns = useTeamMembersTableColumns();

  if (isError) return <Alert>Error fetching data</Alert>;

  return (
    <TSTable<User>
      route={TEAMSRoute.id}
      columns={columns}
      data={data?.content ?? []}
      isLoading={isLoading}
      pageable={data}
      tableHeight="unset"
    />
  );
};

export default TeamTableContainer;
