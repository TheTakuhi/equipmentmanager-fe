import { FC } from "react";

import { IconButton } from "@chakra-ui/react";
import { useSearch } from "@tanstack/react-router";
import { Trash } from "react-feather";

import TeamRemoveMemberDialog from "../../../common/dialogs/TeamDialogs/TeamRemoveMemberDialog";
import { User } from "../../../common/models/user/User";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { TEAMSRoute } from "../../../common/routes/common/teams/teamsRoute";

interface TeamActionMenuProps {
  user: User;
}

const TeamActionMenu: FC<TeamActionMenuProps> = ({ user }) => {
  const { active }: { active: string } = useSearch({ from: TEAMSRoute.id });
  const { show } = useActionDialog();

  const handleRemoveMemberClick = () =>
    show(<TeamRemoveMemberDialog teamId={active} user={user} />);

  return (
    <IconButton
      variant="actionButton"
      aria-label="Remove member"
      icon={<Trash />}
      onClick={handleRemoveMemberClick}
    />
  );
};

export default TeamActionMenu;
