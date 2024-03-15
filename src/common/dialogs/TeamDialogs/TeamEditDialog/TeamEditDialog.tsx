import { FC, useState } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import TeamForm from "../../../forms/TeamForm";
import { TeamFormSubmitHandler } from "../../../forms/TeamForm/TeamForm";
import { useTeamEditMutation } from "../../../hooks/mutations/teams/useTeamEditMutation";
import { Team } from "../../../models/team/Team";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import FormDialog from "../../FormDialog";

interface TeamEditDialogProps {
  team: Team;
}

const TeamEditDialog: FC<TeamEditDialogProps> = ({ team }) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { close } = useActionDialog();
  const { mutate: mutateTeamEdit } = useTeamEditMutation(team.id);

  const handleSubmit: TeamFormSubmitHandler = (values) => {
    setIsSubmitting(true);
    mutateTeamEdit(
      {
        teamName: values.teamName,
        ownerId: values.owner.value,
        membersIds: [
          values.owner.value,
          ...values.members
            .filter((m) => m.value !== values.owner.value)
            .map((m) => m.value),
        ],
      },
      {
        onSuccess: () => {
          toast.success("Team edited", toastOptions);
          queryClient.invalidateQueries().then(close);
        },
        onError: (error) => {
          toast.error(
            error.response?.data.message ?? "An error has occurred",
            toastOptions,
          );
          setIsSubmitting(false);
        },
      },
    );
  };

  return (
    <FormDialog
      title="Edit team"
      close={close}
      dialogForm={
        <TeamForm
          handleSubmit={handleSubmit}
          close={close}
          isSubmitting={isSubmitting}
          isEdit
          defaultValues={{
            teamName: team.teamName,
            owner: { value: team.owner.id, label: team.owner.fullName },
            members: team.members.map((m) => {
              return { value: m.id, label: m.fullName };
            }),
          }}
        />
      }
    />
  );
};

export default TeamEditDialog;
