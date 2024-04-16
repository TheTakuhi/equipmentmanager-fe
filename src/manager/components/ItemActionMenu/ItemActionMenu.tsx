import { FC } from "react";

import { HStack, IconButton } from "@chakra-ui/react";
import { ArrowDownRight, ArrowUpRight, Edit2, Trash } from "react-feather";

import ItemDeleteDialog from "../../../common/dialogs/ItemDialogs/ItemDeleteDialog";
import ItemEditDialog from "../../../common/dialogs/ItemDialogs/ItemEditDialog";
import LoanCreateDialog from "../../../common/dialogs/LoanDialogs/LoanCreateDialog";
import LoanReturnDialog from "../../../common/dialogs/LoanDialogs/LoanReturnDialog";
import { Item } from "../../../common/models/item/Item";
import { ItemState } from "../../../common/models/item/ItemState";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";

interface ItemActionMenuProps {
  item: Item;
}

const ItemActionMenu: FC<ItemActionMenuProps> = ({ item }) => {
  const { show } = useActionDialog();

  const handleLendItemClick = () => show(<LoanCreateDialog item={item} />);

  const handleReturnItem = () =>
    show(
      <LoanReturnDialog
        loan={item.loans.find((l) => l.returnDate === null)!}
      />,
    );

  const handleEditClick = () => show(<ItemEditDialog item={item} />);

  const handleDeleteClick = () => show(<ItemDeleteDialog item={item} />);

  return (
    <HStack gap={0}>
      {item.state === ItemState.BORROWED ? (
        <IconButton
          variant="actionButton"
          aria-label="Return item"
          icon={<ArrowDownRight />}
          onClick={handleReturnItem}
        />
      ) : (
        <IconButton
          variant="actionButton"
          aria-label="Lend item"
          icon={<ArrowUpRight />}
          onClick={handleLendItemClick}
        />
      )}
      <IconButton
        variant="actionButton"
        aria-label="Edit item"
        icon={<Edit2 />}
        onClick={handleEditClick}
      />
      <IconButton
        variant="actionButton"
        aria-label="Discard item"
        icon={<Trash />}
        onClick={handleDeleteClick}
        visibility={item.state === ItemState.DISCARDED ? "hidden" : "visible"}
      />
    </HStack>
  );
};

export default ItemActionMenu;
