import { FC } from "react";

import { Flex, Heading, HStack, Skeleton, Spacer } from "@chakra-ui/react";
import { ArrowDownLeft, ArrowUpRight, Download } from "react-feather";

import Button from "../../../common/components/Button";
import SearchBar from "../../../common/components/SearchBar";
import LoanCreateDialog from "../../../common/dialogs/LoanDialogs/LoanCreateDialog";
import LoanReturnDialog from "../../../common/dialogs/LoanDialogs/LoanReturnDialog";
import { useGetItemById } from "../../../common/hooks/queries/items/useGetItemById";
import { useGetLoans } from "../../../common/hooks/queries/loans/useGetLoans";
import { Loan } from "../../../common/models/loan/Loan";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { ONEITEMDETAILRoute } from "../../../common/routes/common/itemDetail/item/oneItemDetailRoute";
import LoansHistoryTableContainer from "../../containers/LoansHistoryTableContainer";
import { useLoansHistoryItemDetailTableColumns } from "../../hooks/useLoansHistoryItemDetailTableColumns";

interface ItemDetailTableProps {
  tableHeight: string;
  itemId: string;
}

const ItemDetailTable: FC<ItemDetailTableProps> = ({ tableHeight, itemId }) => {
  const { show } = useActionDialog();
  const columns = useLoansHistoryItemDetailTableColumns();

  const { data: item, isLoading: isLoadingItem } = useGetItemById(itemId);
  const { data: loans, isLoading: isLoadingLoans } = useGetLoans({
    serialCode: item?.serialCode,
  });

  let activeLoan: Loan | undefined;
  if (loans) activeLoan = loans.content.find((l) => !l.returnDate);

  const lendItemDialogOpen = () => show(<LoanCreateDialog item={item} />);
  const returnItemDialog = () => show(<LoanReturnDialog loan={activeLoan!} />);

  if (isLoadingItem || isLoadingLoans) return <Skeleton />;

  return (
    <>
      <Heading size="h2" sx={{ paddingX: "1.5rem", paddingTop: "1rem" }}>
        Borrowing history
      </Heading>
      <Flex sx={{ padding: "1rem 1.5rem" }}>
        <SearchBar
          route={ONEITEMDETAILRoute.id}
          options={[
            { value: "borrowerName", label: "Borrower" },
            { value: "lenderName", label: "Lender" },
          ]}
        />
        <Spacer />
        <HStack gap="0.625rem" align="flex-end" paddingLeft="0.625rem">
          {activeLoan ? (
            <Button
              variant="primary"
              label="Return item"
              startIcon={<ArrowDownLeft />}
              onClick={() => returnItemDialog()}
            />
          ) : (
            <Button
              variant="primary"
              label="Lend item"
              startIcon={<ArrowUpRight />}
              onClick={() => lendItemDialogOpen()}
            />
          )}
          <Button
            variant="secondary"
            label="Export list"
            startIcon={<Download />}
          />
        </HStack>
      </Flex>
      <LoansHistoryTableContainer
        tableHeight={tableHeight}
        route={ONEITEMDETAILRoute.id}
        columns={columns}
        serialCode={item?.serialCode}
      />
    </>
  );
};

export default ItemDetailTable;
