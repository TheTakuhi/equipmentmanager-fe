import { FC } from "react";

import { useNavigate } from "@tanstack/react-router";
import { ArrowDownLeft, Bell, Info } from "react-feather";

import Menu from "../../../common/components/Menu";
import LoanReturnDialog from "../../../common/dialogs/LoanDialogs/LoanReturnDialog";
import { Loan } from "../../../common/models/loan/Loan";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";

interface LoanActionMenuProps {
  loan: Loan;
}

const LoanActionMenu: FC<LoanActionMenuProps> = ({ loan }) => {
  const { show } = useActionDialog();
  const navigate = useNavigate();

  // TODO implement user detail redirect
  const handleUserDetailClick = () => {
    // eslint-disable-next-line no-console
    console.log("NAVIGATE TO USER DETAIL PAGE");
  };

  const handleItemDetailClick = () => {
    navigate({
      params: { itemId: loan.item.id },
      to: "/equipment-manager/management/items/$itemId",
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

  return (
    <Menu
      menuItems={[
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
          label: "Return item",
          icon: <ArrowDownLeft />,
          onClick: handleEditClick,
        },
        {
          label: "Notify lender",
          icon: <Bell />,
          onClick: handleNotifyLenderClick,
        },
      ]}
    />
  );
};

export default LoanActionMenu;
