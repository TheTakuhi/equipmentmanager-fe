import { FC } from "react";

import { HStack } from "@chakra-ui/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Edit2,
  RotateCcw,
  Trash,
} from "react-feather";
import { toast } from "react-toastify";

import { ActionIconButton } from "../../../common/components/ActionIconButton";
import { queryClient } from "../../../common/config/react-query/reactQuery";
import ItemDeleteDialog from "../../../common/dialogs/ItemDialogs/ItemDeleteDialog";
import ItemEditDialog from "../../../common/dialogs/ItemDialogs/ItemEditDialog";
import LoanCreateDialog from "../../../common/dialogs/LoanDialogs/LoanCreateDialog";
import LoanReturnDialog from "../../../common/dialogs/LoanDialogs/LoanReturnDialog";
import { useItemEditMutation } from "../../../common/hooks/mutations/items/useItemEditMutation";
import { Item } from "../../../common/models/item/Item";
import { ItemState } from "../../../common/models/item/ItemState";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../common/utils/toastOptions";

interface ItemActionMenuProps {
  item: Item;
}

const ItemActionMenu: FC<ItemActionMenuProps> = ({ item }) => {
  const { show } = useActionDialog();

  const { mutate } = useItemEditMutation(item.id);

  const handleRestoreItem = () =>
    mutate(
      {
        state: ItemState.AVAILABLE,
        serialCode: item.serialCode,
        type: item.type,
        comment: item.comment,
        ownerId: item.owner.id,
        qualityState: item.qualityState,
      },
      {
        onSuccess: () => {
          toast.success("Item restored", toastOptions);
          queryClient.invalidateQueries();
        },
      },
    );

  const handleLendItemClick = () => show(<LoanCreateDialog item={item} />);

  const handleReturnItem = () =>
    show(
      <LoanReturnDialog
        loan={item.loans.find((l) => l.returnDate === null)!}
      />,
    );

  const handleEditClick = () => show(<ItemEditDialog item={item} />);

  const handleDeleteClick = () => show(<ItemDeleteDialog item={item} />);

  if (item.state === ItemState.DISCARDED)
    return (
      <ActionIconButton
        aria-label="Restore item"
        icon={RotateCcw}
        onClick={handleRestoreItem}
      />
    );

  return (
    <HStack gap={0}>
      {item.state === ItemState.BORROWED ? (
        <ActionIconButton
          aria-label="Return item"
          icon={ArrowDownRight}
          onClick={handleReturnItem}
        />
      ) : (
        <ActionIconButton
          aria-label="Lend item"
          icon={ArrowUpRight}
          onClick={handleLendItemClick}
        />
      )}
      <ActionIconButton
        aria-label="Edit item"
        icon={Edit2}
        onClick={handleEditClick}
      />
      <ActionIconButton
        aria-label="Discard item"
        icon={Trash}
        onClick={handleDeleteClick}
        visibility={item.state === ItemState.BORROWED ? "hidden" : "visible"}
      />
    </HStack>
  );
};

export default ItemActionMenu;
