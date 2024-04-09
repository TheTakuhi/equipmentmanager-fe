import { Box, Heading, Skeleton, Stack, VStack } from "@chakra-ui/react";

import { useGetTeams } from "../../../common/hooks/queries/teams/useGetTeams";
import { ActiveTeamProvider } from "../../../common/providers/ActiveTeamProvider";
import TeamCreateButton from "../../components/TeamCreateButton";
import TeamMenuCard from "../../components/TeamMenuCard";
import TeamContainer from "../../containers/TeamContainer";

const TeamsPage = () => {
  const { data: teams, isLoading, isError } = useGetTeams();

  if (isLoading || isError)
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
            <Skeleton sx={{ width: "100%", height: "65px" }} />
            <Skeleton sx={{ width: "100%", height: "65px" }} />
            <Skeleton sx={{ width: "100%", height: "65px" }} />
          </VStack>
          <Box sx={{ width: "100%" }}>
            <Skeleton sx={{ width: "100%", height: "122px" }} />
          </Box>
        </Stack>
      </>
    );

  return (
    <ActiveTeamProvider>
      <Heading size="h1" sx={{ paddingX: "1.5rem", paddingY: "1rem" }}>
        Teams
      </Heading>
      <Stack
        direction={["column", "row"]}
        sx={{ gap: "1.5rem", paddingX: "1.5rem" }}
      >
        <VStack sx={{ width: "15rem", gap: "0.75rem" }}>
          {teams && teams.content.length !== 0
            ? teams.content.map((team) => (
                <TeamMenuCard key={team.id} team={team} />
              ))
            : null}
          <TeamCreateButton />
        </VStack>
        <Box sx={{ width: "100%" }}>
          <TeamContainer />
        </Box>
      </Stack>
    </ActiveTeamProvider>
  );
};

export default TeamsPage;
