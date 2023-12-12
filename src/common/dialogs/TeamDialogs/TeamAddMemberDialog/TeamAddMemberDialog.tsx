import { FC } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import FormDialog from "../../FormDialog";
import TeamForm from "../../../forms/TeamForm";
import { TeamFormSubmitHandler } from "../../../forms/TeamForm/TeamForm";
import { Team } from "../../../models/team/Team";
import { useTeamEditMutation } from "../../../hooks/mutations/teams/useTeamEditMutation";

interface TeamAddMemberDialogProps {
  team: Team;
}

const TeamAddMemberDialog: FC<TeamAddMemberDialogProps> = ({ team }) => {
  const { close } = useActionDialog();
  const { mutate: mutateTeamEdit } = useTeamEditMutation(team.id, true);

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

  // TODO CREATE ADD MEMBER FORM
  return (
    <FormDialog
      title="Add member to team"
      close={close}
      dialogForm={
        <TeamForm
          handleSubmit={handleSubmit}
          close={close}
          isEdit
          defaultValues={{
            teamName: team.teamName,
            owner: team.owner,
            members: team.members,
          }}
        />
      }
    />
  );
};

export default TeamAddMemberDialog;
