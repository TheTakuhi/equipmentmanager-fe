import { FC, useState } from "react";

import { CircularProgress } from "@chakra-ui/react";
import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import TeamForm, {
  TeamFormSubmitHandler,
} from "../../../forms/TeamForm/TeamForm";
import { useTeamCreateMutation } from "../../../hooks/mutations/teams/useTeamCreateMutation";
import { useGetCurrentUser } from "../../../hooks/queries/users/useGetCurrentUser";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { useActiveRoles } from "../../../providers/ActiveRolesProvider/ActiveRolesProvider";
import { CustomRole } from "../../../security/model/Role";
import { toastOptions } from "../../../utils/toastOptions";
import FormDialog from "../../FormDialog";

const TeamCreateDialog: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { close } = useActionDialog();
  const { mutate: mutateAddTeam } = useTeamCreateMutation();

  const { activeRoles } = useActiveRoles();
  const { data: currentUser, isLoading: isLoadingUser } = useGetCurrentUser();

  const handleAdd: TeamFormSubmitHandler = (values) => {
    setIsSubmitting(true);
    mutateAddTeam(
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
          toast.success("Team created", toastOptions);
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

  if (isLoadingUser) return <CircularProgress />;

  return (
    <FormDialog
      title="Create a team"
      dialogForm={
        <TeamForm
          handleSubmit={handleAdd}
          close={close}
          isSubmitting={isSubmitting}
          defaultValues={{
            owner: activeRoles[0].includes(CustomRole.MANAGER)
              ? {
                  value: currentUser?.id ?? "",
                  label: currentUser?.fullName ?? "",
                }
              : { value: "", label: "" },
          }}
        />
      }
      close={close}
    />
  );
};

export default TeamCreateDialog;
