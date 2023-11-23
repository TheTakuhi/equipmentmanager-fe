import { FC } from "react";

import { Item } from "../../../models/item/Item";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import FormDialog from "../../FormDialog";

interface ItemEditDialogProps {
  item: Item;
}

const ItemEditDialog: FC<ItemEditDialogProps> = ({ item }) => {
  const { close } = useActionDialog();

  // TODO implement after forms
  // const { mutate: mutateItemEdit } = useItemEditMutation(item.id, true);

  // const handleSubmit: ItemFormSubmitHandler = (values) =>
  //   mutateItemEdit(
  //     {
  //       ...values,
  //     },
  //     {
  //       onSuccess: () => {
  //         toast.success("Item edited", toastOptions);
  //         queryClient.invalidateQueries().then(close);
  //       },
  //       onError: (error) =>
  //         toast.error(
  //           error.response?.data.message ?? "An error has occurred",
  //           toastOptions
  //         ),
  //     }
  //   );

  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log(item);
  };

  return (
    <FormDialog
      title="Edit item"
      close={close}
      // dialogForm={}
      action={handleSubmit}
      actionLabel="Edit"
    />
  );
};

export default ItemEditDialog;
