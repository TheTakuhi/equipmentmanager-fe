import { FC } from "react";

import { useNavigate } from "@tanstack/react-router";
import { ArrowDownLeft, Info } from "react-feather";

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

  const handleEditClick = () => {
    show(<LoanReturnDialog loan={loan} />);
  };

  const menuItems: MenuItemType[] = [
    {
      label: "User details",
      icon: <Info />,
      onClick: handleUserDetailClick,
    },
  ];

  if (!loan.returnDate)
    menuItems.push({
      label: "Return item",
      icon: <ArrowDownLeft />,
      onClick: handleEditClick,
    });

  return <Menu menuItems={menuItems} />;
};

export default LoanActionMenu;
