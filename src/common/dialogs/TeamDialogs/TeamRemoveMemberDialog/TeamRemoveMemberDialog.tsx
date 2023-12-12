import { FC } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import { TeamFormSubmitHandler } from "../../../forms/TeamForm/TeamForm";
import { Team } from "../../../models/team/Team";
import DiscardDialog from "../../DiscardDialog";

interface TeamRemoveMemberDialogProps {
  team: Team;
}

const TeamRemoveMemberDialog: FC<TeamRemoveMemberDialogProps> = ({ team }) => {
  const { close } = useActionDialog();

  const handleSubmit: TeamFormSubmitHandler = (values) =>
    mutateTeamEdit(
      {
        ...values,
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
      title="Remove member from team"
      close={close}
      description={`You’re about to delete team member ${team.member.fullName}. 
        Are you sure you want to delete this member?`}
      discard={handleSubmit}
    />
  );
};

export default TeamRemoveMemberDialog;
