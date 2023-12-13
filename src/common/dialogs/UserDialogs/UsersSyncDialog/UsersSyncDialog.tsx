import { FC } from "react";

import { CircularProgress, useTheme } from "@chakra-ui/react";
import { toast } from "react-toastify";

import { useUsersSyncMutation } from "../../../hooks/mutations/users/useUsersSyncMutation";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import SyncDialog from "../../SyncDialog";

const UsersSyncDialog: FC = () => {
  const { close } = useActionDialog();
  const theme = useTheme();

  const { mutate: mutateSyncUsers, isPending: pending } =
    useUsersSyncMutation();

  const handleSync = () => {
    mutateSyncUsers(undefined, {
      onSuccess: () => {
        toast.success("Users sync success", toastOptions);
        close();
      },
      onError: (error: any) => {
        toast.error(
          error.response?.data.message ?? "An error has occurred",
          toastOptions,
        );
      },
    });
  };

  if (pending)
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
