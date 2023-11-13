import { FC } from "react";

import { ArrowUpRight, Edit2, Info, Trash2 } from "react-feather";

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

  // TODO implement user detail redirect
  const handleDetailClick = () => {
    // eslint-disable-next-line no-console
    console.log("NAVIGATE TO USER DETAIL PAGE");
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
          icon: <Trash2 />,
          onClick: handleDeleteClick,
        },
      ]}
    />
  );
};

export default UserActionMenu;
