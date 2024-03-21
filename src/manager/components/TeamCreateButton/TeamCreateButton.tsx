import { Button, Text, useTheme } from "@chakra-ui/react";
import { Plus } from "react-feather";

import TeamCreateDialog from "../../../common/dialogs/TeamDialogs/TeamCreateDialog";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";

const TeamCreateButton = () => {
  const theme = useTheme();
  const { show } = useActionDialog();

  const handleCreateTeam = () => show(<TeamCreateDialog />);

  return (
    <Button
      onClick={handleCreateTeam}
      sx={{
        width: "100%",
        height: "65px",
        bg: theme.palette.secondary.dark,
        borderRadius: theme.borderRadius.element,
        border: `1px solid ${theme.palette.secondary.light}`,
        padding: "0.75rem 1.25rem",
        justifyContent: "space-between",
        transition: theme.transition.default,
        "p, svg": { transition: theme.transition.default },

        _hover: {
          bg: theme.palette.secondary.header,
          cursor: "pointer",
          p: { color: theme.palette.text.primary },
          svg: { stroke: theme.palette.text.primary },
        },
      }}
    >
      <Text
        sx={{
          maxWidth: "160px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: theme.palette.text.disabled,
          fontWeight: "600",
        }}
      >
        Create a team
      </Text>
      <Plus width="1em" height="1em" color={theme.palette.text.disabled} />
    </Button>
  );
};

export default TeamCreateButton;
