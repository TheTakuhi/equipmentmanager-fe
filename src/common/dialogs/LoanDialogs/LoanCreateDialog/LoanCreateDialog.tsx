import { FC } from "react";

import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import FormDialog from "../../FormDialog";

const LoanCreateDialog: FC = () => {
  const { close } = useActionDialog();

  // TODO implement after forms
  // const { mutate: mutateLoanCreate } = useLoanCreateMutation();

  // const handleSubmit: LoanFormSubmitHandler = (values) =>
  //   mutateLoanCreate(
  //     {
  //       ...values,
  //     },
  //     {
  //       onSuccess: () => {
  //         toast.success("Loan created", toastOptions);
  //         queryClient.invalidateQueries().then(close);
  //       },
  //       onError: (error) => {
  //         toast.error(
  //           error.response?.data.message ?? "An error has occurred",
  //           toastOptions
  //         );
  //       },
  //     }
  //   );

  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log("create loan");
  };

  return (
    <FormDialog
      title="Lend item"
      close={close}
      // dialogForm={}
      action={handleSubmit}
      actionLabel="Lend item"
    />
  );
};

export default LoanCreateDialog;
