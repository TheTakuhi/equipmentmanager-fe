import { FC } from "react";

import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Edit2 } from "react-feather";

import TeamEditDialog from "../../../common/dialogs/TeamDialogs/TeamEditDialog";
import { Team } from "../../../common/models/team/Team";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { theme } from "../../../common/theme";
import TeamTableContainer from "../TeamTableContainer";
import TeamTopContainer from "../TeamTopContainer";

type TeamContainerProps = {
  team?: Team;
};

const TeamContainer: FC<TeamContainerProps> = ({ team }) => {
  const { show } = useActionDialog();

  if (!team)
    return (
      <Box
        sx={{
          width: "100%",
          padding: "3rem 2rem",
          border: (t) => `dashed 1px ${t.palette.secondary.light}`,
          borderRadius: (t) => t.borderRadius.element,
        }}
      >
        <Text
          sx={{
            fontSize: "1em",
            color: (t) => t.palette.text.disabled,
          }}
        >
          Select a team or create one
        </Text>
      </Box>
    );

  const handleTeamEdit = () => show(<TeamEditDialog team={team} />);

  return (
    <Box
      sx={{
        borderRadius: (t) => t.borderRadius.element,
        border: (t) => `1px solid ${t.palette.secondary.light}`,
      }}
    >
      <Flex
        sx={{
          bg: (t) => t.palette.secondary.header,
          borderBottom: (t) => `1px solid ${t.palette.secondary.light}`,
          padding: "1rem 1.5rem 0.75rem 1.5rem",
          gap: "0.5rem",
          alignItems: "baseline",
        }}
      >
        <Heading size="h2">{team.teamName}</Heading>
        <IconButton
          onClick={handleTeamEdit}
          isRound
          aria-label="Edit team"
          icon={<Edit2 color={theme.palette.text.disabled} />}
          size="sm"
          sx={{
            bg: "none",
            minHeight: "32px",
            transition: theme.transition.default,

            _hover: {
              bg: theme.palette.secondary.light,
              svg: { stroke: theme.palette.text.primary },
            },
          }}
        />
        <Spacer />
        <Text
          sx={{
            fontSize: "0.75em",
            color: theme.palette.text.disabled,
          }}
        >
          owned by {team.owner.fullName}
        </Text>
      </Flex>

      <VStack sx={{ gap: "1rem", paddingY: "1rem", alignItems: "flex-start" }}>
        <TeamTopContainer />
        <TeamTableContainer />
      </VStack>
    </Box>
  );
};

export default TeamContainer;
