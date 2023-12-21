import { FC } from "react";

import { toast } from "react-toastify";

import { queryClient } from "../../../config/react-query/reactQuery";
import LoanForm from "../../../forms/LoanForm";
import { LoanFormSubmitHandler } from "../../../forms/LoanForm/LoanForm";
import { useLoanCreateMutation } from "../../../hooks/mutations/loans/useLoanCreateMutation";
import { Item } from "../../../models/item/Item";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../utils/toastOptions";
import FormDialog from "../../FormDialog";

type LoanCreateDialogProps = {
  item?: Item;
};

const LoanCreateDialog: FC<LoanCreateDialogProps> = ({ item }) => {
  const { close } = useActionDialog();

  const { mutate: mutateLoanCreate } = useLoanCreateMutation();

  const handleSubmit: LoanFormSubmitHandler = (values) =>
    mutateLoanCreate(
      {
        ...values,
      },
      {
        onSuccess: () => {
          toast.success("Loan created", toastOptions);
          queryClient.invalidateQueries().then(close);
        },
        onError: (error) => {
          toast.error(
            error.response?.data.message ?? "An error has occurred",
            toastOptions,
          );
        },
      },
    );

  return (
    <FormDialog
      title="Lend item"
      close={close}
      dialogForm={
        <LoanForm
          handleSubmit={handleSubmit}
          close={close}
          defaultValues={{ itemId: item?.id }}
        />
      }
    />
  );
};

export default LoanCreateDialog;
