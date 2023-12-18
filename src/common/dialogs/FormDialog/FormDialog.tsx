import { FC, ReactNode } from "react";

import {
  Box,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useTheme,
} from "@chakra-ui/react";
import { X } from "react-feather";

interface FormDialogProps {
  title: string;
  // TODO after implementing forms make this mandatory
  dialogForm?: ReactNode;
  close: () => void;
}

const FormDialog: FC<FormDialogProps> = ({ title, dialogForm, close }) => {
  const theme = useTheme();

  return (
    <Modal motionPreset="scale" isOpen onClose={close} size="xl">
      <ModalOverlay sx={{ backdropFilter: "blur(4px)" }}>
        <ModalContent
          sx={{
            backgroundColor: theme.palette.background.default,
            borderRadius: theme.borderRadius.element,
            color: theme.palette.text.primary,
            border: `1px solid ${theme.palette.secondary.light}`,
          }}
        >
          <ModalHeader>
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
          </ModalHeader>
          <ModalBody>{dialogForm}</ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default FormDialog;
