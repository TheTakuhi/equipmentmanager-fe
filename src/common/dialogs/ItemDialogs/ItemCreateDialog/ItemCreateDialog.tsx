import { FC } from "react";

import { toast } from "react-toastify";

import ItemForm from "../../../forms/ItemForm";
import { ItemFormSubmitHandler } from "../../../forms/ItemForm/ItemForm";
import { useItemCreateMutation } from "../../../hooks/mutations/items/useItemCreateMutation";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import FormDialog from "../../FormDialog";

const ItemCreateDialog: FC = () => {
  const { close } = useActionDialog();

  const { mutate: mutateAddItem } = useItemCreateMutation();

  const handleAdd: ItemFormSubmitHandler = (values) =>
    mutateAddItem(values, {
      onSuccess: () => {
        toast.success("Item added", toastOptions);
        close();
      },
      onError: (error) => {
        toast.error(
          error.response?.data.message ?? "An error has occurred",
          toastOptions,
        );
      },
    });

  return (
    <FormDialog
      title="Add item"
      dialogForm={<ItemForm handleSubmit={handleAdd} close={close} />}
      close={close}
    />
  );
};

export default ItemCreateDialog;
