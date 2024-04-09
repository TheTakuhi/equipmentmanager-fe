import { FC } from "react";

import { Box, Flex, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import { Edit2, Trash } from "react-feather";

import { IconButton } from "../../../common/components/IconButton";
import TeamDeleteDialog from "../../../common/dialogs/TeamDialogs/TeamDeleteDialog";
import TeamEditDialog from "../../../common/dialogs/TeamDialogs/TeamEditDialog";
import { useGetCurrentUser } from "../../../common/hooks/queries/users/useGetCurrentUser";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { useActiveRoles } from "../../../common/providers/ActiveRolesProvider/ActiveRolesProvider";
import { useActiveTeam } from "../../../common/providers/ActiveTeamProvider/ActiveTeamProvider";
import { CustomRole } from "../../../common/security/model/Role";
import { theme } from "../../../common/theme";
import TeamTableContainer from "../TeamTableContainer";
import TeamTopContainer from "../TeamTopContainer";

const TeamContainer: FC = () => {
  const { show } = useActionDialog();
  const { activeRoles } = useActiveRoles();
  const { data: currentUser } = useGetCurrentUser();
  const { activeTeam } = useActiveTeam();

  if (!activeTeam)
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

  const userIsAbleToEdit =
    (activeRoles[0].includes(CustomRole.MANAGER) &&
      activeTeam.owner.id === currentUser?.id) ||
    activeRoles[0].includes(CustomRole.ADMIN);

  const handleTeamEdit = () => show(<TeamEditDialog team={activeTeam} />);

  const handleTeamDelete = () => show(<TeamDeleteDialog team={activeTeam} />);

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
        <Heading size="h2">{activeTeam.teamName}&apos;s members</Heading>
        {userIsAbleToEdit ? (
          <>
            <IconButton
              onClick={handleTeamEdit}
              aria-label="Edit team"
              icon={Edit2}
            />
            <IconButton
              onClick={handleTeamDelete}
              aria-label="Delete team"
              icon={Trash}
            />
          </>
        ) : null}
        <Spacer />
        <Text
          sx={{
            fontSize: "0.75em",
            color: theme.palette.text.disabled,
          }}
        >
          owned by {activeTeam.owner.fullName}
        </Text>
      </Flex>

      <VStack sx={{ gap: "1rem", paddingY: "1rem", alignItems: "flex-start" }}>
        <TeamTopContainer userIsAbleToEdit={userIsAbleToEdit} />
        <TeamTableContainer team={activeTeam} />
      </VStack>
    </Box>
  );
};

export default TeamContainer;
