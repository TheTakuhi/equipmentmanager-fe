import { FC } from "react";

import { HStack } from "@chakra-ui/react";
import { ArrowDownLeft } from "react-feather";

import { ActionIconButton } from "../../../common/components/ActionIconButton";
import LoanReturnDialog from "../../../common/dialogs/LoanDialogs/LoanReturnDialog";
import { Loan } from "../../../common/models/loan/Loan";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";

interface LoanActionMenuProps {
  loan: Loan;
}

const LoanActionMenu: FC<LoanActionMenuProps> = ({ loan }) => {
  const { show } = useActionDialog();

  const handleEditClick = () => {
    show(<LoanReturnDialog loan={loan} />);
  };

  // TODO - implement mail notifications
  // const handleNotifyLenderClick = () => {
  //   // eslint-disable-next-line no-console
  //   console.log("NOTIFY LENDER");
  // };

  return (
    <HStack gap={0}>
      <ActionIconButton
        aria-label="Return item"
        icon={ArrowDownLeft}
        onClick={handleEditClick}
        visibility={!loan.returnDate ? "visible" : "hidden"}
      />
      {/* <ActionIconButton */}
      {/*  aria-label="Notify lender" */}
      {/*  icon={Bell} */}
      {/*  onClick={handleNotifyLenderClick} */}
      {/* /> */}
    </HStack>
  );
};

export default LoanActionMenu;
