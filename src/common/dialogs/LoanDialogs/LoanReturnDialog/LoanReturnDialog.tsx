import { FC, useState } from "react";

import { DateTime } from "luxon";

import LoanForm from "../../../forms/LoanForm";
import { LoanFormSubmitHandler } from "../../../forms/LoanForm/LoanForm";
import { useLoanPatchMutation } from "../../../hooks/mutations/loans/useLoanPatchMutation";
import { Loan } from "../../../models/loan/Loan";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import FormDialog from "../../FormDialog";

interface LoanReturnDialogProps {
  loan: Loan;
}

const LoanReturnDialog: FC<LoanReturnDialogProps> = ({ loan }) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { close } = useActionDialog();

  const { mutate: mutateLoanEdit } = useLoanPatchMutation(loan.id);

  const handleSubmit: LoanFormSubmitHandler = (values) => {
    setIsSubmitting(true);
    mutateLoanEdit(
      {
        returnDate: values.returnDate!,
      },
      {
        onSuccess: () => close(),
        onError: () => setIsSubmitting(false),
      },
    );
  };

  return (
    <FormDialog
      title={`Return item ${loan.item.serialCode}`}
      close={close}
      dialogForm={
        <LoanForm
          handleSubmit={handleSubmit}
          close={close}
          isEdit
          defaultValues={{
            item: {
              value: loan.item.id,
              label: `${loan.item.serialCode}, ${loan.item.type}`,
            },
            borrower: {
              value: loan.lender.id,
              label: loan.lender.fullName,
            },
            loanDate: loan.loanDate,
            returnDate: DateTime.local().toFormat("yyyy-MM-dd"),
          }}
          isSubmitting={isSubmitting}
        />
      }
    />
  );
};

export default LoanReturnDialog;
