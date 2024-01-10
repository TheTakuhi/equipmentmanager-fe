import { FC, useRef, useState } from "react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  IconButton,
  Skeleton,
  useTheme,
} from "@chakra-ui/react";
import { X } from "react-feather";
import { toast } from "react-toastify";

import Button from "../../components/Button";
import UserItemsList from "../../components/UserItemsList";
import EditItemsOwnerForm from "../../forms/EditItemsOwnerForm";
import { EditItemsOwnerSubmitHandler } from "../../forms/EditItemsOwnerForm/EditItemsOwnerForm";
import { useEditItemsOwnerMutation } from "../../hooks/mutations/items/useEditItemsOwnerMutation";
import { useGetItems } from "../../hooks/queries/items/useGetItems";
import { TeamFormValues } from "../../models/team/TeamFormValues";
import { User } from "../../models/user/User";
import { toastOptions } from "../../utils/toastOptions";

interface StepperDialogProps {
  close: () => void;
  title: string;
  description: string;
  discard?: () => void;
  removeMember?: (values: TeamFormValues) => void;
  user?: User;
}

const DiscardUserDialog: FC<StepperDialogProps> = ({
  title,
  description,
  close,
  discard,
  user,
}) => {
  const theme = useTheme();
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { mutate: mutateItemsEditOwner } = useEditItemsOwnerMutation();
  const handleSubmit: EditItemsOwnerSubmitHandler = (values) =>
    mutateItemsEditOwner(
      {
        ...values,
      },
      {
        onSuccess: () => {
          toast.success("Items owner changed", toastOptions);
          setIsFormSubmitted(true);
        },
        onError: (error) =>
          toast.error(
            error.response?.data.message ?? "An error has occurred",
            toastOptions,
          ),
      },
    );

  const { data: allUserItems, isLoading: isLoadingAllUserItems } = useGetItems({
    login: user?.login,
  });

  // TODO style Skeleton loading
  if (isLoadingAllUserItems) return <Skeleton />;

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
          <AlertDialogBody
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {description}
            <UserItemsList allUserItems={allUserItems} />
            <EditItemsOwnerForm
              handleSubmit={handleSubmit}
              defaultValues={{
                id: "",
              }}
            />
          </AlertDialogBody>
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
              <Button
                variant="primary"
                label="Discard"
                onClick={discard}
                isDisabled={
                  !isFormSubmitted || allUserItems?.totalElements !== 0
                }
              />
            </Box>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DiscardUserDialog;
