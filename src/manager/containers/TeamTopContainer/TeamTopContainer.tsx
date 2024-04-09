import { FC } from "react";

import { HStack, Spacer } from "@chakra-ui/react";
import { useSearch } from "@tanstack/react-router";
import { UserPlus } from "react-feather";

import Button from "../../../common/components/Button";
import { SimpleSearch } from "../../../common/components/SimpleSearch";
import TeamAddMemberDialog from "../../../common/dialogs/TeamDialogs/TeamAddMemberDialog";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { TEAMSRoute } from "../../../common/routes/common/teams/teamsRoute";

type TeamTopContainerProps = {
  userIsAbleToEdit: boolean;
};

const TeamTopContainer: FC<TeamTopContainerProps> = ({ userIsAbleToEdit }) => {
  const { active }: { active: string } = useSearch({ from: TEAMSRoute.id });
  const { show } = useActionDialog();

  const handleAddMember = () => show(<TeamAddMemberDialog teamId={active} />);

  return (
    <HStack sx={{ width: "100%", paddingX: "1.5rem" }}>
      <SimpleSearch route={TEAMSRoute.id} />
      <Spacer />
      {userIsAbleToEdit ? (
        <Button
          variant="primary"
          label="Add member"
          startIcon={<UserPlus />}
          onClick={handleAddMember}
        />
      ) : null}
    </HStack>
  );
};

export default TeamTopContainer;
