import { FC } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import { useTeamDeleteMutation } from "../../../hooks/mutations/teams/useTeamDeleteMutation";
import { TeamMembersSize } from "../../../models/team/TeamMembersSize";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import DiscardDialog from "../../DiscardDialog";

interface TeamDeleteDialogProps {
  team: TeamMembersSize;
}

const TeamDeleteDialog: FC<TeamDeleteDialogProps> = ({ team }) => {
  const { close } = useActionDialog();

  const { mutate: mutateTeamItem } = useTeamDeleteMutation(team.id);

  const handleDelete = () => {
    mutateTeamItem(undefined, {
      onSuccess: () => {
        toast.success("Team discarded", toastOptions);
        queryClient.invalidateQueries().then(close);
      },
      onError: (error) => {
        toast.error(
          error.response?.data.message ?? "An error has occurred",
          toastOptions,
        );
        close();
      },
    });
  };

  return (
    <DiscardDialog
      title="Delete team?"
      close={close}
      description={`You’re about to delete ${team.teamName}. 
      Are you sure you want to delete this team? This action cannot be reverted!`}
      discard={handleDelete}
    />
  );
};

export default TeamDeleteDialog;
