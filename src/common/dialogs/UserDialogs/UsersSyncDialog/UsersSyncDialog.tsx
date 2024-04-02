import { FC, useState } from "react";

import { CircularProgress, Text, useTheme } from "@chakra-ui/react";
import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import { useUsersSync } from "../../../hooks/queries/users/useUsersSync";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import SyncDialog from "../../SyncDialog";

const UsersSyncDialog: FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const { close } = useActionDialog();
  const theme = useTheme();

  const { isSuccess, isError, error, isLoading } = useUsersSync({
    queryKey: [],
    enabled: isEnabled,
  });

  if (isSuccess) {
    toast.success("Users sync success", toastOptions);
    queryClient.invalidateQueries().then(close);
  }

  if (isError)
    toast.error(error?.message ?? "An error has occurred", toastOptions);

  return (
    <SyncDialog
      title="Sync users with AD"
      close={close}
      description={
        isLoading ? (
          <>
            <Text>Syncing users with AD...</Text>
            <CircularProgress
              isIndeterminate
              color={theme.palette.primary.main}
              sx={{
                pl: "45%",
              }}
            />
          </>
        ) : (
          <Text>
            You’re about to sync users with AD. This action might take up to 1
            minute. Are you sure to proceed?
          </Text>
        )
      }
      discard={() => setIsEnabled(true)}
      pending={isLoading}
    />
  );
};

export default UsersSyncDialog;
