import { FC, ReactNode, useRef } from "react";

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

interface SyncDialogProps {
  close: () => void;
  title: string;
  description: string | ReactNode;
  discard: () => void;
  pending?: boolean;
}

const SyncDialog: FC<SyncDialogProps> = ({
  title,
  description,
  close,
  discard,
  pending,
}) => {
  const theme = useTheme();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  return (
    <AlertDialog
      motionPreset="scale"
      isOpen
      onClose={close}
      leastDestructiveRef={cancelRef}
      closeOnOverlayClick={!pending}
      closeOnEsc={!pending}
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
              {pending ? (
                ""
              ) : (
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
              )}
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
              {pending ? (
                <>
                  <Button
                    variant="disabled"
                    label="Close"
                    onClick={close}
                    isDisabled
                  />
                  <Button
                    variant="disabled"
                    label="Sync"
                    onClick={discard}
                    isDisabled
                  />
                </>
              ) : (
                <>
                  <Button variant="secondary" label="Close" onClick={close} />
                  <Button variant="primary" label="Sync" onClick={discard} />
                </>
              )}
            </Box>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default SyncDialog;
