import { FC } from "react";

import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import FormDialog from "../../FormDialog";

const ItemCreateDialog: FC = () => {
  const { close } = useActionDialog();

  // TODO implement after adding forms
  // const { mutate: mutateAddItem } = useItemCreateMutation();

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

  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log("Item created");
  };

  return (
    <FormDialog
      title="Add item"
      close={close}
      // dialogForm={}
      action={handleSubmit}
      actionLabel="Confirm"
    />
  );
};

export default ItemCreateDialog;
