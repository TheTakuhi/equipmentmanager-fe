import { FC } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import AddMemberForm from "../../../forms/AddMemberForm";
import { TeamMemberSubmitHandler } from "../../../forms/AddMemberForm/AddMemberForm";
import { useTeamAddMemberMutation } from "../../../hooks/mutations/teams/useTeamAddMemberMutation";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import FormDialog from "../../FormDialog";

type TeamAddMemberDialogProps = {
  teamId: string;
};

const TeamAddMemberDialog: FC<TeamAddMemberDialogProps> = ({ teamId }) => {
  const { close } = useActionDialog();
  const { mutate: mutateTeamAddMember } = useTeamAddMemberMutation(teamId);

  const handleSubmit: TeamMemberSubmitHandler = (values) =>
    mutateTeamAddMember(
      {
        userId: values.member.value,
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
      title="Add member to the team"
      close={close}
      dialogForm={
        <AddMemberForm
          handleSubmit={handleSubmit}
          close={close}
          teamId={teamId}
        />
      }
    />
  );
};

export default TeamAddMemberDialog;
