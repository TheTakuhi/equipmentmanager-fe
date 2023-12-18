import { FC } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import { useUserDeleteMutation } from "../../../hooks/mutations/users/useUserDeleteMutation";
import { User } from "../../../models/user/User";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import DiscardDialog from "../../DiscardDialog";

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

  // TODO IMPLEMENT SELECT NEW OWNER OF ITEMS BEFORE DELETING USER
  return (
    <DiscardDialog
      title="Delete user"
      close={close}
      description={`You’re about to delete ${user.fullName}. 
      Are you sure you want to delete this user? This action cannot be reversed!`}
      discard={handleDelete}
    />
  );
};

export default UserDeleteDialog;
