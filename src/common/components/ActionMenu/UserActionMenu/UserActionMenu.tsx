import { FC } from "react";

import { HStack } from "@chakra-ui/react";
import { ArrowUpRight, Edit2, Trash } from "react-feather";

import LoanCreateDialog from "../../../dialogs/LoanDialogs/LoanCreateDialog";
import UserDeleteDialog from "../../../dialogs/UserDialogs/UserDeleteDialog";
import UserEditDialog from "../../../dialogs/UserDialogs/UserEditDialog";
import { User } from "../../../models/user/User";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { ActionIconButton } from "../../ActionIconButton";

interface UserProps {
  user: User;
}

const UserActionMenu: FC<UserProps> = ({ user }) => {
  const { show } = useActionDialog();

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
    <HStack gap={0}>
      <ActionIconButton
        aria-label="Lend item"
        icon={ArrowUpRight}
        onClick={handleLendItemClick}
      />
      <ActionIconButton
        aria-label="Edit item"
        icon={Edit2}
        onClick={handleEditClick}
      />
      <ActionIconButton
        aria-label="Delete item"
        icon={Trash}
        onClick={handleDeleteClick}
      />
    </HStack>
  );
};

export default UserActionMenu;
