import { FC } from "react";

import { User } from "../../../models/user/User";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import FormDialog from "../../FormDialog";

interface UserEditDialogProps {
  user: User;
}

const UserEditDialog: FC<UserEditDialogProps> = ({ user }) => {
  const { close } = useActionDialog();

  // TODO implement after forms
  // const { mutate: mutateUserEdit } = useUserEditMutation(user.id, true);

  // const handleSubmit: UserFormSubmitHandler = (values) =>
  //   mutateUserEdit(
  //     {
  //       ...values,
  //     },
  //     {
  //       onSuccess: () => {
  //         toast.success("User edited", toastOptions);
  //         queryClient.invalidateQueries().then(close);
  //       },
  //       onError: (error) =>
  //         toast.error(
  //           error.response?.data.message ?? "An error has occurred",
  //           toastOptions
  //         ),
  //     }
  //   );

  return (
    <FormDialog
      title={`Edit user ${user.fullName}`}
      close={close}
      // dialogForm={
      // <UserForm handleSubmit={handleSubmit} close={close} isEdit
      // defaultValues={{
      // }}
      // />
      // }
    />
  );
};

export default UserEditDialog;
