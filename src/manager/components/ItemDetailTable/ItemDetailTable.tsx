import { FC } from "react";

import {
  Flex,
  Heading,
  HStack,
  Input,
  Select,
  Skeleton,
  Spacer,
} from "@chakra-ui/react";
import { ArrowUpRight, Download } from "react-feather";

import Button from "../../../common/components/Button";
import SortFilter from "../../../common/components/SortFilter";
import LoanCreateDialog from "../../../common/dialogs/LoanDialogs/LoanCreateDialog";
import { useGetItemById } from "../../../common/hooks/queries/items/useGetItemById";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { itemDetailRoute } from "../../../common/routes/common/itemDetail/itemDetailRoute";
import LoansHistoryTableContainer from "../../containers/LoansHistoryTableContainer";
import { useLoansHistoryItemDetailTableColumns } from "../../hooks/useLoansHistoryItemDetailTableColumns";

interface ItemDetailTableProps {
  tableHeight: string;
  itemId: string;
}

const ItemDetailTable: FC<ItemDetailTableProps> = ({ tableHeight, itemId }) => {
  const { show } = useActionDialog();
  const columns = useLoansHistoryItemDetailTableColumns();

  const { data: item, isLoading } = useGetItemById(itemId);

  const lendItemDialogOpen = () => show(<LoanCreateDialog item={item} />);

  if (isLoading) return <Skeleton />;

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
          {/*  TODO - change into SearchBar component */}
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
