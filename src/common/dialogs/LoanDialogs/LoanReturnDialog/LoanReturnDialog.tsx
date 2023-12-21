import { FC } from "react";

import { DateTime } from "luxon";
import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import LoanForm from "../../../forms/LoanForm";
import { LoanFormSubmitHandler } from "../../../forms/LoanForm/LoanForm";
import { useLoanEditMutation } from "../../../hooks/mutations/loans/useLoanEditMutation";
import { Loan } from "../../../models/loan/Loan";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import FormDialog from "../../FormDialog";

interface LoanReturnDialogProps {
  loan: Loan;
}

const LoanReturnDialog: FC<LoanReturnDialogProps> = ({ loan }) => {
  const { close } = useActionDialog();

  const { mutate: mutateLoanEdit } = useLoanEditMutation(loan.id);

  const handleSubmit: LoanFormSubmitHandler = (values) =>
    mutateLoanEdit(
      {
        ...values,
      },
      {
        onSuccess: () => {
          toast.success("Loan returned", toastOptions);
          queryClient.invalidateQueries().then(close);
        },
        onError: (error) =>
          toast.error(
            error.response?.data.message ?? "An error has occurred",
            toastOptions,
          ),
      },
    );

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
            itemId: loan.item.id,
            borrowerId: loan.lender.id,
            dateOfLending: loan.dateOfLending,
            dateOfReturning: DateTime.local().toFormat("yyyy-MM-dd"),
          }}
        />
      }
    />
  );
};

export default LoanReturnDialog;
