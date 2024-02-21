import { FC } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import { useTeamRemoveMemberMutation } from "../../../hooks/mutations/teams/useTeamRemoveMemberMutation";
import { User } from "../../../models/user/User";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import DiscardDialog from "../../DiscardDialog";

interface TeamRemoveMemberDialogProps {
  teamId: string;
  user: User;
}

const TeamRemoveMemberDialog: FC<TeamRemoveMemberDialogProps> = ({
  user,
  teamId,
}) => {
  const { close } = useActionDialog();
  const { mutate: mutateTeamEdit } = useTeamRemoveMemberMutation(teamId);

  const handleSubmit = () =>
    mutateTeamEdit(
      {
        userId: user.id,
      },
      {
        onSuccess: () => {
          toast.success("Team edited", toastOptions);
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
    <DiscardDialog
      title="Remove member from the team"
      close={close}
      description={`You’re about to remove team member ${user?.fullName}. 
        Are you sure you want to remove this member?`}
      discard={() => handleSubmit()}
    />
  );
};

export default TeamRemoveMemberDialog;
