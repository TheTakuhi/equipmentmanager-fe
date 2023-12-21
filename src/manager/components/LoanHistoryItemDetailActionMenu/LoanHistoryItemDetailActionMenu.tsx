import { FC } from "react";

import { useNavigate } from "@tanstack/react-router";
import { ArrowDownLeft, Info } from "react-feather";

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

  const handleUserDetailClick = () => {
    navigate({
      params: { userDetailId: loan.lender.id },
      to: "/equipment-manager/management/user-detail/$userDetailId",
    });
  };

  const handleEditClick = () => {
    show(<LoanReturnDialog loan={loan} />);
  };

  return (
    <Menu
      menuItems={[
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
      ]}
    />
  );
};

export default LoanActionMenu;
