import { FC } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import ItemForm from "../../../forms/ItemForm";
import { ItemFormSubmitHandler } from "../../../forms/ItemForm/ItemForm";
import { useItemEditMutation } from "../../../hooks/mutations/items/useItemEditMutation";
import { Item } from "../../../models/item/Item";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import FormDialog from "../../FormDialog";

interface ItemEditDialogProps {
  item: Item;
}

const ItemEditDialog: FC<ItemEditDialogProps> = ({ item }) => {
  const { close } = useActionDialog();
  const { mutate: mutateItemEdit } = useItemEditMutation(item.id, true);

  const handleSubmit: ItemFormSubmitHandler = (values) =>
    mutateItemEdit(
      {
        ...values,
      },
      {
        onSuccess: () => {
          toast.success("Item edited", toastOptions);
          queryClient.invalidateQueries().then(close);
        },
        onError: (error) =>
          toast.error(
            error.response?.data.message ?? "An error has occurred",
            toastOptions,
          ),
      },
    );

  return (
    <FormDialog
      title="Edit item"
      close={close}
      dialogForm={
        <ItemForm
          handleSubmit={handleSubmit}
          close={close}
          isEdit
          defaultValues={{
            serialCode: item.serialCode,
            type: item.type,
            qualityState: item.qualityState,
            comment: item.comment,
            managerOwner: item.managerOwner.id,
          }}
        />
      }
    />
  );
};

export default ItemEditDialog;
