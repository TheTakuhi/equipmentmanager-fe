import { FC, useRef } from "react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  IconButton,
  useTheme,
} from "@chakra-ui/react";
import { X } from "react-feather";

import Help from "../../components/Help";

interface HelpDialogProps {
  close: () => void;
  title: string;
}

const HelpDialog: FC<HelpDialogProps> = ({ close, title }) => {
  const theme = useTheme();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  return (
    <AlertDialog
      motionPreset="scale"
      isOpen
      onClose={close}
      leastDestructiveRef={cancelRef}
      size="3xl"
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          sx={{
            backgroundColor: theme.palette.background.default,
            borderRadius: theme.borderRadius.element,
            color: theme.palette.text.primary,
          }}
        >
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            <Box
              sx={{
                display: "inline-flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "full",
                color: theme.palette.text.primary,
              }}
            >
              {title}
              <IconButton
                isRound
                aria-label="Close"
                size="xs"
                icon={<X color={theme.palette.text.primary} />}
                onClick={close}
                sx={{
                  height: "24px",
                  minHeight: "24px",
                  backgroundColor: theme.palette.secondary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.light,
                  },
                  "&:active": {
                    backgroundColor: theme.palette.secondary.light,
                  },
                }}
              />
            </Box>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Help />
          </AlertDialogBody>
          <AlertDialogFooter />
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default HelpDialog;
