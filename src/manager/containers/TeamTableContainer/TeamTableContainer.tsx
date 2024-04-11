import { FC } from "react";

import { Alert } from "@chakra-ui/react";
import { useSearch } from "@tanstack/react-router";

import TSTable from "../../../common/components/TSTable";
import { useGetTeamMembers } from "../../../common/hooks/queries/teams/useGetTeamMembers";
import { SearchParams } from "../../../common/models/SearchParams";
import { User } from "../../../common/models/user/User";
import { useActiveTeam } from "../../../common/providers/ActiveTeamProvider/ActiveTeamProvider";
import { TEAMSRoute } from "../../../common/routes/common/teams/teamsRoute";
import { createQueryParams } from "../../../common/utils/queryParams";
import { useTeamMembersTableColumns } from "../../hooks/useTeamMembersTableColumns";

const TeamTableContainer: FC = () => {
  const { activeTeam } = useActiveTeam();
  const search: SearchParams & { query?: string } = useSearch({
    from: TEAMSRoute.id,
  });

  const { data, isLoading, isError } = useGetTeamMembers(activeTeam!.id, {
    ...createQueryParams(search, { search: search.query }),
  });

  const columns = useTeamMembersTableColumns();

  if (isError || !activeTeam) return <Alert>Error fetching data</Alert>;

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
