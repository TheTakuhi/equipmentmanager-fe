import { Box, Button, useTheme } from "@chakra-ui/react";
import { toast } from "react-toastify";

import DiscardDialog from "../../../common/dialogs/DiscardDialog";
import FormDialog from "../../../common/dialogs/FormDialog";
import { useItemDeleteMutation } from "../../../common/hooks/mutations/items/useItemDeleteMutation";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../common/utils/toastOptions";

const ItemsPage = () => {
  const theme = useTheme();
  const { show, close } = useActionDialog();

  const { mutate: mutateDeleteItem } = useItemDeleteMutation("123");
  // const { mutate: mutateAddItem } = useItemCreateMutation();

  const handleDiscard = () => {
    mutateDeleteItem(undefined, {
      onSuccess: () => {
        toast.success("Item deleted", toastOptions);
        close();
      },
      onError: (error) => {
        toast.error(
          error.response?.data.message ?? "An error has occurred",
          toastOptions,
        );
        close();
      },
    });
  };

  // TODO implement like this after adding forms
  // const handleAdd: ItemFormSubmitHandler = (values) =>
  //   mutateAddItem(values, {
  //     onSuccess: () => {
  //       toast.success("Item added", toastOptions);
  //       close();
  //     },
  //     onError: (error) => {
  //       toast.error(
  //         error.response?.data.message ?? "An error has occurred",
  //         toastOptions,
  //       );
  //     },
  //   });

  const handleAdd = () => {
    mutateDeleteItem(undefined, {
      onSuccess: () => {
        toast.success("Item deleted", toastOptions);
        close();
      },
      onError: (error) => {
        toast.error(
          error.response?.data.message ?? "An error has occurred",
          toastOptions,
        );
        close();
      },
    });
  };

  const discardDialogOpen = () => {
    show(
      <DiscardDialog
        title="Del"
        description="Are you sure?"
        close={close}
        discard={handleDiscard}
      />,
    );
  };

  const addItemDialogOpen = () => {
    show(
      <FormDialog
        title="Add item"
        close={close}
        actionLabel="Confirm"
        action={handleAdd}
      />,
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.borderRadius.element,
        color: theme.palette.text.primary,
      }}
    >
      <Button colorScheme="red" onClick={discardDialogOpen}>
        Delete
      </Button>
      <Button colorScheme="green" onClick={addItemDialogOpen}>
        Add
      </Button>
      ITEMS PAGE
    </Box>
  );
};

export default ItemsPage;
