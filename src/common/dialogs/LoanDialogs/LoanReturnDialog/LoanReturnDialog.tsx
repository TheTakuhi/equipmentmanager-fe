import { FC } from "react";

import { Loan } from "../../../models/loan/Loan";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import FormDialog from "../../FormDialog";

interface LoanReturnDialogProps {
  loan: Loan;
}

const LoanReturnDialog: FC<LoanReturnDialogProps> = ({ loan }) => {
  const { close } = useActionDialog();

  // TODO implement after forms
  // const { mutate: mutateLoanEdit } = useLoanEditMutation(user.id, true);

  // const handleSubmit: LoanFormSubmitHandler = (values) =>
  //   mutateLoanEdit(
  //     {
  //       ...values,
  //     },
  //     {
  //       onSuccess: () => {
  //         toast.success("Loan returned", toastOptions);
  //         queryClient.invalidateQueries().then(close);
  //       },
  //       onError: (error) =>
  //         toast.error(
  //           error.response?.data.message ?? "An error has occurred",
  //           toastOptions
  //         ),
  //     }
  //   );

  return (
    <FormDialog
      title={`Return item ${loan.item.serialCode}`}
      close={close}
      // dialogForm={}
    />
  );
};

export default LoanReturnDialog;
