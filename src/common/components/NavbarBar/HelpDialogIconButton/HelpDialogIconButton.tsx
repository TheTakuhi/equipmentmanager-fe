import { FC } from "react";

import { Box, Text, useTheme } from "@chakra-ui/react";
import { HelpCircle } from "react-feather";
import {useActionDialog} from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import HelpDialog from "../../../dialogs/HelpDialog";

export interface HelpDialogIconButtonProps {
  open: boolean;
}
const HelpDialogIconButton: FC<HelpDialogIconButtonProps> = ({ open }) => {
  const boxWidth = open ? "9.375rem" : "2.75rem";
  const theme = useTheme();

    const { show } = useActionDialog();
    const { close } = useActionDialog();

    const handleOpenHelpDialog = () => {
        show(<HelpDialog title="Help" close={close} />);
    };

  return (
    <Box
      display="flex"
      onClick={handleOpenHelpDialog}
      sx={{
        p: open ? "0.5rem 0.625rem" : "0.5rem 0rem",
        cursor: "pointer",
        width: boxWidth,
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.17)",
          transition: "ease-in 0.15s",
        },
        borderRadius: theme.borderRadius.element,
        color: "#FFFFFF",
        animation: open
          ? `border-grow 0.28s ease-in-out forwards`
          : `border-collapse 0.2s ease-in-out backwards`,
        textDecoration: "none",
        justifyContent: open ? "" : "center",
        alignItems: "center",
        gap: "0.625rem",
      }}
      title="Help"
    >
      <HelpCircle color="#FFFFFF" width="1.5rem" height="1.5rem" />
      {open ? (
        <Text
          sx={{
            color: theme.palette.text.primary,
            visibility: "hidden",
            animationName: "slide-in",
            animationDuration: "0.2s",
            animationDelay: "0.1s",
            animationFillMode: "forwards",
            size: "sidebar",
            whiteSpace: "nowrap",
          }}
        >
          Help
        </Text>
      ) : (
        ""
      )}
    </Box>
  );
};

export default HelpDialogIconButton;
