import { FC } from "react";

import { Flex, Heading, HStack, Input, Select, Spacer } from "@chakra-ui/react";
import { Download, Plus } from "react-feather";
import { toast } from "react-toastify";

import Button from "../../../common/components/Button";
import SortFilter from "../../../common/components/SortFilter";
import FormDialog from "../../../common/dialogs/FormDialog";
import { useItemDeleteMutation } from "../../../common/hooks/mutations/items/useItemDeleteMutation";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../common/utils/toastOptions";

const LoansTopContainer: FC = () => {
  const { show, close } = useActionDialog();
  // TODO implement like this after adding forms
  // const handleAdd: LoanFormSubmitHandler = (values) =>
  //   mutateCreateLoan(values, {
  //     onSuccess: () => {
  //       toast.success("Loan created", toastOptions);
  //       close();
  //     },
  //     onError: (error) => {
  //       toast.error(
  //         error.response?.data.message ?? "An error has occurred",
  //         toastOptions,
  //       );
  //     },
  //   });

  const { mutate: mutateDeleteItem } = useItemDeleteMutation("123");
  // const { mutate: mutateCreateLoan } = useLoanCreateMutation();

  const handleAdd = () => {
    mutateDeleteItem(undefined, {
      onSuccess: () => {
        toast.success("Item loaned successfully", toastOptions);
        close();
      },
      onError: (error) => {
        toast.error(
          error.response?.data.message ?? "An error has occurred",
          toastOptions,
        );
        close();
      },
    });
  };

  const createLoanDialogOpen = () => {
    show(
      <FormDialog
        title="Lend item"
        close={close}
        actionLabel="Confirm"
        action={handleAdd}
      />,
    );
  };

  return (
    <>
      <Heading size="h1" sx={{ paddingX: "1.5rem", paddingTop: "1rem" }}>
        Loans
      </Heading>
      <Flex sx={{ padding: "1rem 1.5rem" }}>
        <HStack gap="0.625rem">
          <SortFilter
            options={[
              { label: "Newest", value: "NEWEST" },
              { label: "Oldest", value: "OLDEST" },
            ]}
            sx={{ width: "max-content" }}
          />
          <HStack gap="0">
            <Select variant="filled">
              <option>Item code</option>
              <option>Lender</option>
            </Select>
            <Input placeholder="Search..." />
          </HStack>
        </HStack>
        <Spacer />
        <HStack gap="0.625rem" align="flex-end" paddingLeft="0.625rem">
          <Button
            variant="primary"
            label="Lend item"
            startIcon={<Plus />}
            onClick={() => createLoanDialogOpen()}
          />
          <Button
            variant="secondary"
            label="Export list"
            startIcon={<Download />}
          />
        </HStack>
      </Flex>
    </>
  );
};

export default LoansTopContainer;
