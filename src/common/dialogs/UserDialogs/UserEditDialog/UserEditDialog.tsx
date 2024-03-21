import { FC } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import UserForm from "../../../forms/UserForm";
import { UserFormSubmitHandler } from "../../../forms/UserForm/UserForm";
import { useUserEditMutation } from "../../../hooks/mutations/users/useUserEditMutation";
import { User } from "../../../models/user/User";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import FormDialog from "../../FormDialog";

interface UserEditDialogProps {
  user: User;
}

const UserEditDialog: FC<UserEditDialogProps> = ({ user }) => {
  const { close } = useActionDialog();
  const { mutate: mutateUserEdit } = useUserEditMutation(user.id);

  const handleSubmit: UserFormSubmitHandler = (values) =>
    mutateUserEdit(
      {
        ...values,
      },
      {
        onSuccess: () => {
          toast.success("User edited", toastOptions);
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
      title="Edit user"
      close={close}
      dialogForm={
        <UserForm
          handleSubmit={handleSubmit}
          close={close}
          isEdit
          disabled
          defaultValues={{
            login: user.login,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            userRoles: user.userRoles,
          }}
        />
      }
    />
  );
};

export default UserEditDialog;
