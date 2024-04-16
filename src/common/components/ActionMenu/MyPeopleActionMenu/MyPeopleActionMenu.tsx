import { FC } from "react";

import { HStack, IconButton } from "@chakra-ui/react";
import { ArrowUpRight, Edit2, Trash } from "react-feather";

import LoanCreateDialog from "../../../dialogs/LoanDialogs/LoanCreateDialog";
import UserDeleteDialog from "../../../dialogs/UserDialogs/UserDeleteDialog";
import UserEditDialog from "../../../dialogs/UserDialogs/UserEditDialog";
import { User } from "../../../models/user/User";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";

interface UserProps {
  user: User;
}

const MyPeopleActionMenu: FC<UserProps> = ({ user }) => {
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
      <IconButton
        variant="actionButton"
        aria-label="Lend item"
        icon={<ArrowUpRight />}
        onClick={handleLendItemClick}
      />
      <IconButton
        variant="actionButton"
        aria-label="Edit user"
        icon={<Edit2 />}
        onClick={handleEditClick}
      />
      <IconButton
        variant="actionButton"
        aria-label="Delete user"
        icon={<Trash />}
        onClick={handleDeleteClick}
      />
    </HStack>
  );
};

export default MyPeopleActionMenu;
