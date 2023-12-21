import { FC } from "react";

import { useNavigate } from "@tanstack/react-router";
import { Info, Trash } from "react-feather";

import Menu from "../../../common/components/Menu";
import { User } from "../../../common/models/user/User";
import { userDetailRoute } from "../../../common/routes/common/userDetail/userDetailRoute";

interface TeamActionMenuProps {
  user: User;
}

const TeamActionMenu: FC<TeamActionMenuProps> = ({ user }) => {
  const navigate = useNavigate();
  // const { show } = useActionDialog();

  // TODO - check if matches
  const handleUserDetailClick = () => {
    navigate({
      to: `${userDetailRoute.id}/${user.id}`,
    });
  };

  // TODO - implement
  const handleRemoveMemberClick = () => {};
  // show(<TeamRemoveMemberDialog team={} user={user} />);

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
