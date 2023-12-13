import { FC } from "react";

import { Box, Heading, HStack } from "@chakra-ui/react";
import { Edit2, Trash } from "react-feather";
import { toast } from "react-toastify";

import Button from "../../../common/components/Button";
import DiscardDialog from "../../../common/dialogs/DiscardDialog";
import FormDialog from "../../../common/dialogs/FormDialog";
import { useItemDeleteMutation } from "../../../common/hooks/mutations/items/useItemDeleteMutation";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../common/utils/toastOptions";

const ItemDetailHeader: FC = () => {
  const { show, close } = useActionDialog();

  const { mutate: mutateDeleteItem } = useItemDeleteMutation("123");
  // const { mutate: mutateEditItem } = useItemEditMutation("123");

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
  // const handleEdit: ItemFormSubmitHandler = (values) =>
  //   mutateEditItem(values, {
  //     onSuccess: () => {
  //       toast.success("Item edited", toastOptions);
  //       close();
  //     },
  //     onError: (error) => {
  //       toast.error(
  //         error.response?.data.message ?? "An error has occurred",
  //         toastOptions,
  //       );
  //     },
  //   });
  // const handleEdit = () => {
  //   mutateDeleteItem(undefined, {
  //     onSuccess: () => {
  //       toast.success("Item edited", toastOptions);
  //       close();
  //     },
  //     onError: (error) => {
  //       toast.error(
  //         error.response?.data.message ?? "An error has occurred",
  //         toastOptions,
  //       );
  //       close();
  //     },
  //   });
  // };

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

  const editItemDialogOpen = () => {
    show(<FormDialog title="Edit item" close={close} />);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "inline-flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "auto",
      }}
    >
      <Heading size="h2">Details</Heading>
      <HStack sx={{ gap: "0.625rem", alignSelf: "flex-end" }}>
        <Button
          variant="secondary"
          label="Edit details"
          startIcon={<Edit2 />}
          onClick={() => editItemDialogOpen()}
        />
        <Button
          variant="danger"
          label="Discard"
          startIcon={<Trash />}
          onClick={() => discardDialogOpen()}
        />
      </HStack>
    </Box>
  );
};

export default ItemDetailHeader;
