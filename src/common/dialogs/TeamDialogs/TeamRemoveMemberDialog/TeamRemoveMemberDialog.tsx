import { FC } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import { TeamFormSubmitHandler } from "../../../forms/TeamForm/TeamForm";
import { useTeamEditMutation } from "../../../hooks/mutations/teams/useTeamEditMutation";
import { Team } from "../../../models/team/Team";
import { User } from "../../../models/user/User";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import DiscardDialog from "../../DiscardDialog";

interface TeamRemoveMemberDialogProps {
  team: Team;
  user: User;
}

const TeamRemoveMemberDialog: FC<TeamRemoveMemberDialogProps> = ({
  user,
  team,
}) => {
  const { close } = useActionDialog();
  const { mutate: mutateTeamEdit } = useTeamEditMutation(team.id);

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
      description={`You’re about to delete team member ${user?.fullName}. 
        Are you sure you want to delete this member?`}
      removeMember={handleSubmit}
    />
  );
};

export default TeamRemoveMemberDialog;
