import { FC } from "react";

import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import FormDialog from "../../FormDialog";
import { toast } from "react-toastify";
import { toastOptions } from "../../../utils/toastOptions";
import { useTeamCreateMutation } from "../../../hooks/mutations/teams/useTeamCreateMutation";
import TeamForm, { TeamFormSubmitHandler } from "../../../forms/TeamForm/TeamForm";

const TeamCreateDialog: FC = () => {
  const { close } = useActionDialog();

  const { mutate: mutateAddTeam } = useTeamCreateMutation();

  const handleAdd: TeamFormSubmitHandler = (values) =>
    mutateAddTeam(values, {
      onSuccess: () => {
        toast.success("Team added", toastOptions);
        close();
      },
      onError: (error) => {
        toast.error(
          error.response?.data.message ?? "An error has occurred",
          toastOptions,
        );
      },
    });

  return (
    <FormDialog
      title="Add team"
      dialogForm={<TeamForm handleSubmit={handleAdd} close={close} />}
      close={close}
    />
  );
};

export default TeamCreateDialog;
