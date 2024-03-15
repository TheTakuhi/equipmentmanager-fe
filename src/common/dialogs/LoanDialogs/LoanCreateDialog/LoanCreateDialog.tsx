import { FC, useState } from "react";

import LoanForm from "../../../forms/LoanForm";
import { LoanFormSubmitHandler } from "../../../forms/LoanForm/LoanForm";
import { useLoanCreateMutation } from "../../../hooks/mutations/loans/useLoanCreateMutation";
import { Item } from "../../../models/item/Item";
import { useActionDialog } from "../../../providers/ActionDialogProvider/ActionDialogProvider";
import FormDialog from "../../FormDialog";

type LoanCreateDialogProps = {
  item?: Item;
};

const LoanCreateDialog: FC<LoanCreateDialogProps> = ({ item }) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { close } = useActionDialog();

  const { mutate: mutateLoanCreate } = useLoanCreateMutation();

  const handleSubmit: LoanFormSubmitHandler = (values) => {
    setIsSubmitting(true);
    mutateLoanCreate(
      {
        loanDate: values.loanDate,
        itemId: values.item.value,
        borrowerId: values.borrower.value,
      },
      {
        onSuccess: () => close(),
        onError: () => setIsSubmitting(false),
      },
    );
  };

  return (
    <FormDialog
      title="Lend item"
      close={close}
      dialogForm={
        <LoanForm
          handleSubmit={handleSubmit}
          close={close}
          defaultValues={{
            item: {
              value: item?.id ?? "",
              label: item ? `${item.serialCode}, ${item.type}` : "",
            },
          }}
          isSubmitting={isSubmitting}
          isConcreteItem={!!item}
        />
      }
    />
  );
};

export default LoanCreateDialog;
