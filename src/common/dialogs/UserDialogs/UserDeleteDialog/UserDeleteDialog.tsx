import { FC } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import { useUserDeleteMutation } from "../../../hooks/mutations/users/useUserDeleteMutation";
import { User } from "../../../models/user/User";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import DiscardUserDialog from "../../DiscardUserDialog";

interface UserDeleteDialogProps {
  user: User;
}

const UserDeleteDialog: FC<UserDeleteDialogProps> = ({ user }) => {
  const { close } = useActionDialog();

  const { mutate: mutateDeleteUser } = useUserDeleteMutation(user.id);

  const handleDelete = () => {
    mutateDeleteUser(undefined, {
      onSuccess: () => {
        toast.success("User deleted", toastOptions);
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
    <DiscardUserDialog
      title="Delete user"
      close={close}
      description={`You’re about to delete user ${user.fullName}.
      This action cannot be reversed! Select new owner of ${user.fullName}'s owned items.
      After successfully updating ownership of the items, discard button is going to get enabled.`}
      discard={handleDelete}
      user={user}
    />
  );
};

export default UserDeleteDialog;
