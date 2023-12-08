import { FC } from "react";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toast } from "react-toastify";
import { toastOptions } from "../../../utils/toastOptions";
import SyncDialog from "../../SyncDialog";
import { useUsersSyncMutation } from "../../../hooks/mutations/users/useUsersSyncMutation.ts";
import { CircularProgress, useTheme } from "@chakra-ui/react";

const UsersSyncDialog: FC = () => {
  const { close } = useActionDialog();
  const theme = useTheme();

  const { mutate: mutateSyncUsers, isPending: pending } = useUsersSyncMutation();

  const handleSync = () => {
    mutateSyncUsers(undefined,{
      onSuccess: () => {
        toast.success("Users sync success", toastOptions);
        close();
      },
      onError: (error) => {
        toast.error(
          error.response?.data.message ?? "An error has occurred",
          toastOptions,
        );
      },
    });
  };

  if(pending)
    return (
    <SyncDialog
      title="Sync in progress..."
      close={close}
      description={
        <CircularProgress
          isIndeterminate
          color={theme.palette.primary.main}
          sx={{
            pl: "45%",
          }}
        />
      }
      discard={handleSync}
      pending
    />
  );

  return (
    <SyncDialog
      title="Sync users with AD"
      close={close}
      description={`You’re about to sync users with AD.
      This action might take up to 1 minute. Are you sure to proceed?`}
      discard={handleSync}
    />
  );
};

export default UsersSyncDialog;
