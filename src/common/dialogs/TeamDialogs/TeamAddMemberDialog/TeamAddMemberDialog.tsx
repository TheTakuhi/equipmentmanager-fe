import { FC } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import TeamForm from "../../../forms/TeamForm";
import { TeamFormSubmitHandler } from "../../../forms/TeamForm/TeamForm";
import { useTeamEditMutation } from "../../../hooks/mutations/teams/useTeamEditMutation";
import { Team } from "../../../models/team/Team";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import FormDialog from "../../FormDialog";

interface TeamAddMemberDialogProps {
  team: Team;
}

const TeamAddMemberDialog: FC<TeamAddMemberDialogProps> = ({ team }) => {
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
            owner: team.owner.id,
            members: team.members.map((member) => member.id),
          }}
        />
      }
    />
  );
};

export default TeamAddMemberDialog;
