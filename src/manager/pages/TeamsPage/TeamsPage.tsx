import { Box, Heading, Stack, VStack } from "@chakra-ui/react";
import { useSearch } from "@tanstack/react-router";

import { useGetTeams } from "../../../common/hooks/queries/teams/useGetTeams";
import { SearchParams } from "../../../common/models/SearchParams";
import { TEAMSRoute } from "../../../common/routes/common/teams/teamsRoute";
import TeamCreateButton from "../../components/TeamCreateButton";
import TeamMenuCard from "../../components/TeamMenuCard";
import TeamContainer from "../../containers/TeamContainer";

const TeamsPage = () => {
  // TODO - current user memberLogin
  const {
    data: teams,
    isLoading,
    isError,
  } = useGetTeams({ memberLogin: "maturkat" });

  const search: SearchParams & { active?: string } = useSearch({
    from: TEAMSRoute.id,
  });

  // TODO - uncomment when real data is present
  // if (isLoading || isError) return <Skeleton height="20px" />;

  return (
    <>
      <Heading size="h1" sx={{ paddingX: "1.5rem", paddingY: "1rem" }}>
        Teams
      </Heading>
      <Stack
        direction={["column", "row"]}
        sx={{ gap: "1.5rem", paddingX: "1.5rem" }}
      >
        <VStack sx={{ width: "15rem", gap: "0.75rem" }}>
          {/* TODO - delete mocks and map real data */}
          {/* {teams.length !== 0 */}
          {/*  ? teams.map((team) => <TeamMenuCard key={team.id} team={team} />) */}
          {/*  : ""} */}
          {Array.from({ length: 5 }).map((_, index) => (
            <TeamMenuCard
              key={index}
              // TODO - delete mock and pass correct team
              team={{
                id: index.toString(),
                teamName: `The ultimately awesome team ${index}`,
                members: [{ fullName: "John Doe" }, { fullName: "Dave John" }],
              }}
            />
          ))}
          {/* end of mock deletion */}
          <TeamCreateButton />
        </VStack>
        <Box sx={{ width: "100%" }}>
          <TeamContainer
            // TODO - uncomment and delete mock
            // team={teams ? teams.find((t) => t.id === search.active) : undefined}
            team={
              search.active
                ? {
                    id: "1",
                    teamName: `The ultimately awesome team 1`,
                    owner: { fullName: "Kateřina Maturová" },
                    members: [
                      { fullName: "John Doe" },
                      { fullName: "Dave John" },
                    ],
                  }
                : undefined
            }
            // end of mock deletion
          />
        </Box>
      </Stack>
    </>
  );
};

export default TeamsPage;
