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

import Button from "../../components/Button";
import { TeamFormValues } from "../../models/team/TeamFormValues.ts";

interface DiscardDialogProps {
  close: () => void;
  title: string;
  description: string;
  discard?: () => void;
  removeMember?: (values: TeamFormValues) => void;
}

const DiscardDialog: FC<DiscardDialogProps> = ({
  title,
  description,
  close,
  discard,
}) => {
  const theme = useTheme();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  return (
    <AlertDialog
      motionPreset="scale"
      isOpen
      onClose={close}
      leastDestructiveRef={cancelRef}
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
                  height: "30px",
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
          <AlertDialogBody>{description}</AlertDialogBody>
          <AlertDialogFooter>
            <Box
              sx={{
                display: "inline-flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "full",
              }}
            >
              <Button variant="secondary" label="Close" onClick={close} />
              <Button variant="primary" label="Discard" onClick={discard} />
            </Box>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DiscardDialog;
