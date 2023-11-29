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

  return (
    <FormDialog
      title="Create user"
      close={close}
      // dialogForm={<UserForm handleSubmit={handleAdd} close={close} />}
    />
  );
};

export default UserCreateDialog;
