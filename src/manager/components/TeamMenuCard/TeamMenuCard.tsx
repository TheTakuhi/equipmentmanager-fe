import { FC } from "react";

import { Button, Text, useTheme, VStack } from "@chakra-ui/react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { ChevronRight } from "react-feather";

import { SearchParams } from "../../../common/models/SearchParams";
import { Team } from "../../../common/models/team/Team";
import { TEAMSRoute } from "../../../common/routes/common/teams/teamsRoute";

interface TeamMenuCardProps {
  team: Team;
}

const TeamMenuCard: FC<TeamMenuCardProps> = ({ team }) => {
  const theme = useTheme();

  const navigate = useNavigate();
  const search: SearchParams & { active?: string } = useSearch({
    from: TEAMSRoute.id,
  });
  const active = search.active?.valueOf() === team.id;

  const membersCount = team.members.length;

  const handleTeamSelect = () =>
    navigate({
      search: (prev) => ({
        ...prev,
        active: team.id,
      }),
    });

  return (
    <Button
      onClick={handleTeamSelect}
      sx={{
        width: "100%",
        minHeight: "65px",
        bg: active
          ? theme.palette.secondary.header
          : theme.palette.secondary.dark,
        borderRadius: theme.borderRadius.element,
        border: `1px solid ${theme.palette.secondary.light}`,
        padding: "0.75rem 1.25rem",
        justifyContent: "space-between",
        svg: { transition: theme.transition.default },

        _hover: {
          cursor: "pointer",
          bg: theme.palette.secondary.header,
          svg: { stroke: theme.palette.text.primary },
        },
      }}
    >
      <VStack sx={{ width: "100%", gap: 0, alignItems: "start" }}>
        <Text
          sx={{
            maxWidth: "160px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontWeight: "normal",
            lineHeight: "1.75em",
          }}
        >
          {team.teamName}
        </Text>
        <Text
          sx={{
            fontSize: "0.75em",
            fontWeight: "normal",
            color: theme.palette.text.disabled,
          }}
        >
          {membersCount} {membersCount === 1 ? "member" : "members"}
        </Text>
      </VStack>
      <ChevronRight
        width="1.25em"
        height="1.25em"
        color={active ? theme.palette.text.main : theme.palette.text.disabled}
      />
    </Button>
  );
};

export default TeamMenuCard;
