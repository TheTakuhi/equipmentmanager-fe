import { FC } from "react";

import { Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { Download, Plus } from "react-feather";

import Button from "../../../common/components/Button";
import SearchBar from "../../../common/components/SearchBar";
import LoanCreateDialog from "../../../common/dialogs/LoanDialogs/LoanCreateDialog";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { LOANSRoute } from "../../../common/routes/common/loans/loansRoute";

const LoansTopContainer: FC = () => {
  const { show } = useActionDialog();

  const createLoanDialogOpen = () => show(<LoanCreateDialog />);

  return (
    <>
      <Heading size="h1" sx={{ paddingX: "1.5rem", paddingTop: "1rem" }}>
        Loans
      </Heading>
      <Flex sx={{ padding: "1rem 1.5rem" }}>
        <HStack gap="0.625rem">
          <SearchBar
            route={LOANSRoute.id}
            options={[
              { value: "serialCode", label: "Item code" },
              { value: "borrowerName", label: "Borrower's name" },
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
