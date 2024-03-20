import { FC } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import ItemForm from "../../../forms/ItemForm";
import { ItemFormSubmitHandler } from "../../../forms/ItemForm/ItemForm";
import { useItemCreateMutation } from "../../../hooks/mutations/items/useItemCreateMutation";
import { ItemType } from "../../../models/item/ItemType";
import { QualityState } from "../../../models/item/QualityState";
import { User } from "../../../models/user/User";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import FormDialog from "../../FormDialog";

interface ItemCreateDialogProps {
  currentUser: User;
}

const ItemCreateDialog: FC<ItemCreateDialogProps> = ({ currentUser }) => {
  const { close } = useActionDialog();

  const { mutate: mutateAddItem } = useItemCreateMutation();

  const handleAdd: ItemFormSubmitHandler = ({
    type: { value: typeValue },
    qualityState: { value: qualityValue },
    ownerId: { value: ownerId },
    ...values
  }) =>
    mutateAddItem(
      {
        type: typeValue,
        qualityState: qualityValue,
        ownerId,
        ...values,
      },
      {
        onSuccess: () => {
          toast.success("Item added", toastOptions);
          queryClient.invalidateQueries().then(close);
        },
        onError: (error) => {
          toast.error(
            error.response?.data.message ?? "An error has occurred",
            toastOptions,
          );
        },
      },
    );

  return (
    <FormDialog
      title="Add item"
      dialogForm={
        <ItemForm
          handleSubmit={handleAdd}
          close={close}
          defaultValues={{
            qualityState: {
              value: QualityState.NEW,
              label: QualityState.NEW.toLowerCase(),
            },
            type: {
              value: ItemType.LAPTOP,
              label: ItemType.LAPTOP.toLowerCase(),
            },
            ownerId: {
              label: currentUser.fullName,
              value: currentUser.id,
            },
          }}
        />
      }
      close={close}
    />
  );
};

export default ItemCreateDialog;
