import { FC } from "react";

import { Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { Download, Plus } from "react-feather";

import Button from "../../../common/components/Button";
import SearchBar from "../../../common/components/SearchBar";
import SortFilter from "../../../common/components/SortFilter";
import FormDialog from "../../../common/dialogs/FormDialog";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";

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

  // const { mutate: mutateDeleteItem } = useItemDeleteMutation("123");
  // const { mutate: mutateCreateLoan } = useLoanCreateMutation();

  // const handleAdd = () => {
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
    show(<FormDialog title="Lend item" close={close} />);
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
            options={[
              { value: "itemCode", label: "Item code" },
              { value: "borrower", label: "Borrower's name" },
              { value: "lendingDate", label: "Lending date" },
            ]}
            handleSubmit={() => {}}
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
