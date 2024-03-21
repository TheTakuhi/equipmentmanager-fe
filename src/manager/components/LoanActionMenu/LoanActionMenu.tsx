import { FC } from "react";

import { useNavigate } from "@tanstack/react-router";
import { ArrowDownLeft, Bell, Info } from "react-feather";

import Menu from "../../../common/components/Menu";
import { MenuItemType } from "../../../common/components/Menu/Menu";
import LoanReturnDialog from "../../../common/dialogs/LoanDialogs/LoanReturnDialog";
import { Loan } from "../../../common/models/loan/Loan";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";

interface LoanActionMenuProps {
  loan: Loan;
}

const LoanActionMenu: FC<LoanActionMenuProps> = ({ loan }) => {
  const { show } = useActionDialog();
  const navigate = useNavigate();

  const handleUserDetailClick = () => {
    navigate({
      params: { userDetailId: loan.borrower.id },
      to: "/equipment-manager/management/user-detail/$userDetailId",
    });
  };

  const handleItemDetailClick = () => {
    navigate({
      params: { itemDetailId: loan.item.id },
      to: "/equipment-manager/management/item-detail/$itemDetailId",
    });
  };

  const handleEditClick = () => {
    show(<LoanReturnDialog loan={loan} />);
  };

  // TODO implement notify logic
  const handleNotifyLenderClick = () => {
    // eslint-disable-next-line no-console
    console.log("NOTIFY LENDER");
  };

  const menuItems: MenuItemType[] = [];

  if (!loan.returnDate) {
    menuItems.push({
      label: "Return item",
      icon: <ArrowDownLeft />,
      onClick: handleEditClick,
    });
  }

  menuItems.push(
    ...[
      {
        label: "Item details",
        icon: <Info />,
        onClick: handleItemDetailClick,
      },
      {
        label: "User details",
        icon: <Info />,
        onClick: handleUserDetailClick,
      },
      {
        label: "Notify lender",
        icon: <Bell />,
        onClick: handleNotifyLenderClick,
      },
    ],
  );

  return <Menu menuItems={menuItems} />;
};

export default LoanActionMenu;
