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
  const { mutate: mutateItemEdit } = useItemEditMutation(item.id);

  const handleSubmit: ItemFormSubmitHandler = ({
    type: { value: typeValue },
    qualityState: { value: qualityValue },
    ownerId: { id },
    ...values
  }) =>
    mutateItemEdit(
      {
        type: typeValue,
        qualityState: qualityValue,
        ownerId: id,
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
            comment: item.comment,
            type: { label: item.type.toLowerCase(), value: item.type },
            qualityState: {
              label: item.qualityState.toLowerCase(),
              value: item.qualityState,
            },
            ownerId: {
              label: item.owner.fullName,
              value: item.owner.id,
              id: item.owner.id,
            },
            state: item.state,
          }}
        />
      }
    />
  );
};

export default ItemEditDialog;
