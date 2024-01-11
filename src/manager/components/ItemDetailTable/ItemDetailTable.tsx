import { FC } from "react";

import { Flex, Heading, HStack, Input, Select, Spacer } from "@chakra-ui/react";
import { ArrowUpRight, Download } from "react-feather";
import { toast } from "react-toastify";

import Button from "../../../common/components/Button";
import SortFilter from "../../../common/components/SortFilter";
import { queryClient } from "../../../common/config/react-query/reactQuery";
import FormDialog from "../../../common/dialogs/FormDialog";
import LoanForm from "../../../common/forms/LoanForm";
import { LoanFormSubmitHandler } from "../../../common/forms/LoanForm/LoanForm";
import { useLoanCreateMutation } from "../../../common/hooks/mutations/loans/useLoanCreateMutation";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { itemDetailRoute } from "../../../common/routes/common/itemDetail/itemDetailRoute";
import { toastOptions } from "../../../common/utils/toastOptions";
import LoansHistoryTableContainer from "../../containers/LoansHistoryTableContainer";
import { useLoansHistoryItemDetailTableColumns } from "../../hooks/useLoansHistoryItemDetailTableColumns";

interface ItemDetailTableProps {
  tableHeight: string;
  itemIdParam: any;
}

const ItemDetailTable: FC<ItemDetailTableProps> = ({
  tableHeight,
  itemIdParam,
}) => {
  const { show, close } = useActionDialog();
  const columns = useLoansHistoryItemDetailTableColumns();

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

  const lendItemDialogOpen = () => {
    show(
      <FormDialog
        title="Lend item"
        close={close}
        dialogForm={
          <LoanForm
            handleSubmit={handleSubmit}
            close={close}
            defaultValues={{ itemId: itemIdParam }}
          />
        }
      />,
    );
  };
  return (
    <>
      <Heading size="h2" sx={{ paddingX: "1.5rem", paddingTop: "1rem" }}>
        Lending history
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
              <option>Serial code</option>
              <option>Type</option>
              <option>Quality state</option>
              <option>State</option>
            </Select>
            <Input placeholder="Search..." />
          </HStack>
        </HStack>
        <Spacer />
        <HStack gap="0.625rem" align="flex-end" paddingLeft="0.625rem">
          <Button
            variant="primary"
            label="Lend item"
            startIcon={<ArrowUpRight />}
            onClick={() => lendItemDialogOpen()}
          />
          <Button
            variant="secondary"
            label="Export list"
            startIcon={<Download />}
          />
        </HStack>
      </Flex>
      <LoansHistoryTableContainer
        tableHeight={tableHeight}
        route={`${itemDetailRoute.id}/$itemDetailId`}
        columns={columns}
      />
    </>
  );
};

export default ItemDetailTable;
