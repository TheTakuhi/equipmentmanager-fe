import { FC } from "react";

import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import FormDialog from "../../FormDialog";

const UserCreateDialog: FC = () => {
  const { close } = useActionDialog();

  // TODO implement after forms
  // const { mutate: mutateAddUser } = useUserCreateMutation();

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
    console.log("User created");
  };

  return (
    <FormDialog
      title="Create user"
      close={close}
      // dialogForm={}
      action={handleSubmit}
      actionLabel="Create"
    />
  );
};

export default UserCreateDialog;
