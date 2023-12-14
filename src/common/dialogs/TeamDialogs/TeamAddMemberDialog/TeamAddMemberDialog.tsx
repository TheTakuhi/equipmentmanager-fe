import { FC } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import AddMemberForm from "../../../forms/AddMemberForm";
import { AddMemberSubmitHandler } from "../../../forms/AddMemberForm/AddMemberForm";
import { useTeamAddMemberMutation } from "../../../hooks/mutations/teams/useTeamAddMemberMutation";
import { Team } from "../../../models/team/Team";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import FormDialog from "../../FormDialog";

interface TeamAddMemberDialogProps {
  team: Team;
}

const TeamAddMemberDialog: FC<TeamAddMemberDialogProps> = ({ team }) => {
  const { close } = useActionDialog();
  const { mutate: mutateTeamAddMember } = useTeamAddMemberMutation(team.id);

  const handleSubmit: AddMemberSubmitHandler = (values) =>
    mutateTeamAddMember(
      {
        ...values,
      },
      {
        onSuccess: () => {
          toast.success("Member added", toastOptions);
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
    <FormDialog
      title="Add member to team"
      close={close}
      dialogForm={
        <AddMemberForm
          handleSubmit={handleSubmit}
          close={close}
          defaultValues={{
            id: "",
          }}
        />
      }
    />
  );
};

export default TeamAddMemberDialog;
