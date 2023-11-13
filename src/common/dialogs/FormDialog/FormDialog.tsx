import { FC, ReactNode } from "react";

import {
  Box,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useTheme,
} from "@chakra-ui/react";
import { X } from "react-feather";

import Button from "../../components/Button";

interface FormDialogProps {
  close: () => void;
  title: string;
  actionLabel: string;
  action: () => void;
  // TODO after implementing forms make this mandatory
  dialogForm?: ReactNode;
}

const FormDialog: FC<FormDialogProps> = ({
  close,
  title,
  actionLabel,
  action,
  dialogForm,
}) => {
  const theme = useTheme();

  return (
    <Modal motionPreset="scale" isOpen onClose={close}>
      <ModalOverlay sx={{ backdropFilter: "blur(4px)" }}>
        <ModalContent
          sx={{
            backgroundColor: theme.palette.background.default,
            borderRadius: theme.borderRadius.element,
            color: theme.palette.text.primary,
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
          </ModalHeader>
          <ModalBody>{dialogForm}</ModalBody>
          <ModalFooter>
            <Box
              sx={{
                display: "inline-flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "full",
              }}
            >
              <Button variant="secondary" label="Close" onClick={close} />
              <Button variant="primary" label={actionLabel} onClick={action} />
            </Box>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default FormDialog;
