import { FC } from "react";

import { Box, Heading, HStack } from "@chakra-ui/react";
import { Edit2, Trash } from "react-feather";
import { toast } from "react-toastify";

import Button from "../../../common/components/Button";
import DiscardDialog from "../../../common/dialogs/DiscardDialog";
import FormDialog from "../../../common/dialogs/FormDialog";
import ItemForm, {
  ItemFormSubmitHandler,
} from "../../../common/forms/ItemForm/ItemForm";
import { useItemDeleteMutation } from "../../../common/hooks/mutations/items/useItemDeleteMutation";
import { useItemEditMutation } from "../../../common/hooks/mutations/items/useItemEditMutation";
import { Item } from "../../../common/models/item/Item";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../common/utils/toastOptions";

interface ItemDetailHeaderProps {
  item?: Item;
}

const ItemDetailHeader: FC<ItemDetailHeaderProps> = ({ item }) => {
  const { show, close } = useActionDialog();

  const { mutate: mutateDeleteItem } = useItemDeleteMutation(item?.id);
  const { mutate: mutateEditItem } = useItemEditMutation(item?.id);

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

  const handleEdit: ItemFormSubmitHandler = (values) =>
    mutateEditItem(values, {
      onSuccess: () => {
        toast.success("Item edited", toastOptions);
        close();
      },
      onError: (error) => {
        toast.error(
          error.response?.data.message ?? "An error has occurred",
          toastOptions,
        );
      },
    });

  const discardDialogOpen = () => {
    show(
      <DiscardDialog
        title="Delete item"
        close={close}
        description="Are you sure?"
        discard={handleDiscard}
      />,
    );
  };

  const editItemDialogOpen = () => {
    show(
      <FormDialog
        title="Edit item"
        close={close}
        dialogForm={
          <ItemForm
            handleSubmit={handleEdit}
            close={close}
            isEdit
            defaultValues={{
              serialCode: item?.serialCode,
              type: item?.type,
              qualityState: item?.qualityState,
              comment: item?.comment,
              managerOwner: item?.managerOwner.id,
            }}
          />
        }
      />,
    );
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
