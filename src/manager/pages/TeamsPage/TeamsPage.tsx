import { useEffect, useState } from "react";

import { Box, Heading, Skeleton, Stack, VStack } from "@chakra-ui/react";
import { Plus } from "react-feather";

import Button from "../../../common/components/Button";
import { Pagination } from "../../../common/components/Pagination";
import { SimpleSearch } from "../../../common/components/SimpleSearch";
import TeamCreateDialog from "../../../common/dialogs/TeamDialogs/TeamCreateDialog";
import { useGetTeams } from "../../../common/hooks/queries/teams/useGetTeams";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { ActiveTeamProvider } from "../../../common/providers/ActiveTeamProvider";
import { TEAMSRoute } from "../../../common/routes/common/teams/teamsRoute";
import TeamMenuCard from "../../components/TeamMenuCard";
import TeamContainer from "../../containers/TeamContainer";

const PAGE_SIZE = 7;

const TeamsPage = () => {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  const { data: teams, isLoading } = useGetTeams({
    search: query,
    pageable: { page, size: PAGE_SIZE },
  });

  const { show } = useActionDialog();

  const handleCreateTeam = () => show(<TeamCreateDialog />);

  const renderSkeletons = () => {
    return (
      <>
        {Array.from({ length: 3 }, (_, i) => (
          <Skeleton key={i} sx={{ width: "100%", height: "65px" }} />
        ))}
      </>
    );
  };

  useEffect(() => {
    setPage(0);
  }, [query]);

  return (
    <ActiveTeamProvider>
      <Heading size="h1" sx={{ paddingX: "1.5rem", paddingY: "1rem" }}>
        Teams
      </Heading>
      <Stack
        direction={["column", "row"]}
        sx={{ gap: "1.5rem", paddingX: "1.5rem" }}
      >
        <VStack
          sx={{
            width: 250,
            gap: "0.75rem",
          }}
        >
          <SimpleSearch
            route={TEAMSRoute.id}
            useCallback
            callback={(v) => setQuery(v)}
          />
          {isLoading ? (
            renderSkeletons()
          ) : (
            <>
              {teams && teams.content.length !== 0
                ? teams.content.map((team) => (
                    <TeamMenuCard key={team.id} team={team} />
                  ))
                : null}
              <Button
                variant="secondary"
                label="Create a team"
                rightIcon={<Plus />}
                onClick={handleCreateTeam}
                sx={{
                  width: "100%",
                  height: "65px",
                  justifyContent: "space-between",
                  paddingX: "1.25rem",
                }}
              />
            </>
          )}
          <Pagination
            pageable={{ page, size: PAGE_SIZE }}
            totalPages={teams?.totalPages}
            isLoading={isLoading}
            index={(v) => setPage(v)}
          />
        </VStack>
        <Box sx={{ width: "100%" }}>
          <TeamContainer />
        </Box>
      </Stack>
    </ActiveTeamProvider>
  );
};

export default TeamsPage;
