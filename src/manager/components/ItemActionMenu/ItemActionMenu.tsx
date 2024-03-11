import { FC } from "react";

import { useNavigate } from "@tanstack/react-router";
import { ArrowDownLeft, ArrowUpRight, Edit2, Info, Trash } from "react-feather";

import Menu from "../../../common/components/Menu";
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
  const navigate = useNavigate();

  const handleItemDetailClick = () => {
    navigate({
      params: { itemDetailId: item.id },
      to: "/equipment-manager/management/item-detail/$itemDetailId",
    });
  };

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
    <Menu
      menuItems={[
        {
          label: "Item details",
          icon: <Info />,
          onClick: handleItemDetailClick,
        },
        item.state === ItemState.BORROWED
          ? {
              label: "Return item",
              icon: <ArrowDownLeft />,
              onClick: handleReturnItem,
            }
          : {
              label: "Lend item",
              icon: <ArrowUpRight />,
              onClick: handleLendItemClick,
            },
        {
          label: "Edit",
          icon: <Edit2 />,
          onClick: handleEditClick,
        },
        {
          label: "Discard",
          icon: <Trash />,
          onClick: handleDeleteClick,
        },
      ]}
    />
  );
};

export default ItemActionMenu;
