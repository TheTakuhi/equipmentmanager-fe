import { FC } from "react";

import { useNavigate } from "@tanstack/react-router";
import { ArrowUpRight, Edit2, Info, Trash } from "react-feather";

import Menu from "../../../common/components/Menu";
import ItemDeleteDialog from "../../../common/dialogs/ItemDialogs/ItemDeleteDialog";
import ItemEditDialog from "../../../common/dialogs/ItemDialogs/ItemEditDialog";
import LoanCreateDialog from "../../../common/dialogs/LoanDialogs/LoanCreateDialog";
import { Item } from "../../../common/models/item/Item";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";

interface ItemActionMenuProps {
  item: Item;
}

const ItemActionMenu: FC<ItemActionMenuProps> = ({ item }) => {
  const { show } = useActionDialog();
  const navigate = useNavigate();

  const handleItemDetailClick = () => {
    navigate({
      params: { itemId: item.id },
      to: "/equipment-manager/management/items/$itemId",
    });
  };

  const handleLendItemClick = () => {
    show(<LoanCreateDialog />);
  };

  const handleEditClick = () => {
    show(<ItemEditDialog item={item} />);
  };

  const handleDeleteClick = () => {
    show(<ItemDeleteDialog item={item} />);
  };

  return (
    <Menu
      menuItems={[
        {
          label: "Item details",
          icon: <Info />,
          onClick: handleItemDetailClick,
        },
        {
          label: "Lend item",
          icon: <ArrowUpRight />,
          onClick: () => handleLendItemClick,
        },
        {
          label: "Edit",
          icon: <Edit2 />,
          onClick: handleEditClick,
        },
        {
          label: "Discard",
          icon: <Trash />,
          onClick: () => handleDeleteClick,
        },
      ]}
    />
  );
};

export default ItemActionMenu;
