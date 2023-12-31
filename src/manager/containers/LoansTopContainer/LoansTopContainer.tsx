import { FC } from "react";

import { Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { Download, Plus } from "react-feather";
import { toast } from "react-toastify";

import Button from "../../../common/components/Button";
import SearchBar from "../../../common/components/SearchBar";
import SortFilter from "../../../common/components/SortFilter";
import { queryClient } from "../../../common/config/react-query/reactQuery";
import FormDialog from "../../../common/dialogs/FormDialog";
import LoanForm, {
  LoanFormSubmitHandler,
} from "../../../common/forms/LoanForm/LoanForm";
import { useLoanCreateMutation } from "../../../common/hooks/mutations/loans/useLoanCreateMutation";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { LOANSRoute } from "../../../common/routes/common/loans/loansRoute";
import { toastOptions } from "../../../common/utils/toastOptions";

const LoansTopContainer: FC = () => {
  const { show, close } = useActionDialog();

  const { mutate: mutateCreateLoan } = useLoanCreateMutation();

  const handleAdd: LoanFormSubmitHandler = (values) =>
    mutateCreateLoan(values, {
      onSuccess: () => {
        toast.success("Loan created", toastOptions);
        queryClient.invalidateQueries();
        close();
      },
      onError: (error) => {
        toast.error(
          error.response?.data.message ?? "An error has occurred",
          toastOptions,
        );
      },
    });

  // TODO implement like this after adding forms
  // const { mutate: mutateDeleteItem } = useItemDeleteMutation("123");

  // const handleDelete = () => {
  //   mutateDeleteItem(undefined, {
  //     onSuccess: () => {
  //       toast.success("Item loaned successfully", toastOptions);
  //       close();
  //     },
  //     onError: (error) => {
  //       toast.error(
  //         error.response?.data.message ?? "An error has occurred",
  //         toastOptions,
  //       );
  //       close();
  //     },
  //   });
  // };

  const createLoanDialogOpen = () => {
    show(
      <FormDialog
        title="Lend item"
        close={close}
        dialogForm={<LoanForm handleSubmit={handleAdd} close={close} />}
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
              { value: "asc", label: "Newest" },
              { value: "desc", label: "Oldest" },
            ]}
          />
          {/* TODO - fix searchbar param width for longer param labels */}
          <SearchBar
            route={LOANSRoute.id}
            options={[
              { value: "itemCode", label: "Item code" },
              { value: "borrower", label: "Borrower's name" },
              { value: "lendingDate", label: "Lending date" },
            ]}
          />
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
