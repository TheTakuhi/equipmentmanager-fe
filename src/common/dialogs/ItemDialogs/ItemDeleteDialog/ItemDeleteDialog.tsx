import { FC } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import { useItemDeleteMutation } from "../../../hooks/mutations/items/useItemDeleteMutation";
import { Item } from "../../../models/item/Item";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import DiscardDialog from "../../DiscardDialog";

interface ItemDeleteDialogProps {
  item: Item;
}

const ItemDeleteDialog: FC<ItemDeleteDialogProps> = ({ item }) => {
  const { close } = useActionDialog();

  const { mutate: mutateDeleteItem } = useItemDeleteMutation(item.id);

  const handleDelete = () => {
    mutateDeleteItem(undefined, {
      onSuccess: () => {
        toast.success("Item discarded", toastOptions);
        queryClient.invalidateQueries().then(close);
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

  return (
    <DiscardDialog
      title="Discard item?"
      close={close}
      description={`You’re about to discard ${item.serialCode}, ${item.type}. 
      Are you sure you want to discard this item? Item is going to be labeled as discarded
      and cannot be borrowed or edited and after 3 months get completely deleted!`}
      discard={handleDelete}
    />
  );
};

export default ItemDeleteDialog;
