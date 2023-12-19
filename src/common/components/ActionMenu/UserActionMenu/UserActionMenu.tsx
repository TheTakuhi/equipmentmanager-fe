import { FC } from "react";

import { useNavigate } from "@tanstack/react-router";
import { ArrowUpRight, Edit2, Info, Trash } from "react-feather";

import LoanCreateDialog from "../../../dialogs/LoanDialogs/LoanCreateDialog";
import UserDeleteDialog from "../../../dialogs/UserDialogs/UserDeleteDialog";
import UserEditDialog from "../../../dialogs/UserDialogs/UserEditDialog";
import { User } from "../../../models/user/User";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import Menu from "../../Menu";

interface UserProps {
  user: User;
}

const UserActionMenu: FC<UserProps> = ({ user }) => {
  const { show } = useActionDialog();
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate({
      params: { userId: user.id },
      to: "/equipment-manager/management/users/$userId",
    });
  };

  const handleLendItemClick = () => {
    show(<LoanCreateDialog />);
  };

  const handleEditClick = () => {
    show(<UserEditDialog user={user} />);
  };

  const handleDeleteClick = () => {
    show(<UserDeleteDialog user={user} />);
  };

  return (
    <Menu
      menuItems={[
        {
          label: "Lend item",
          icon: <ArrowUpRight />,
          onClick: handleLendItemClick,
        },
        {
          label: "User details",
          icon: <Info />,
          onClick: handleDetailClick,
        },
        {
          label: "Edit user",
          icon: <Edit2 />,
          onClick: handleEditClick,
        },
        {
          label: "Delete user",
          icon: <Trash />,
          onClick: handleDeleteClick,
        },
      ]}
    />
  );
};

export default UserActionMenu;
