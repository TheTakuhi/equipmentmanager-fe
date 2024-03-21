import { FC } from "react";

import { useNavigate, useSearch } from "@tanstack/react-router";
import { Info, Trash } from "react-feather";

import Menu from "../../../common/components/Menu";
import TeamRemoveMemberDialog from "../../../common/dialogs/TeamDialogs/TeamRemoveMemberDialog";
import { User } from "../../../common/models/user/User";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { TEAMSRoute } from "../../../common/routes/common/teams/teamsRoute";
import { userDetailRoute } from "../../../common/routes/common/userDetail/userDetailRoute";

interface TeamActionMenuProps {
  user: User;
}

const TeamActionMenu: FC<TeamActionMenuProps> = ({ user }) => {
  const navigate = useNavigate();
  const { active }: { active: string } = useSearch({ from: TEAMSRoute.id });
  const { show } = useActionDialog();

  const handleUserDetailClick = () => {
    navigate({
      to: `${userDetailRoute.id}/${user.id}`,
    });
  };

  const handleRemoveMemberClick = () =>
    show(<TeamRemoveMemberDialog teamId={active} user={user} />);

  return (
    <Menu
      menuItems={[
        {
          label: "User details",
          icon: <Info />,
          onClick: handleUserDetailClick,
        },
        {
          label: "Remove",
          icon: <Trash />,
          onClick: handleRemoveMemberClick,
        },
      ]}
    />
  );
};

export default TeamActionMenu;
