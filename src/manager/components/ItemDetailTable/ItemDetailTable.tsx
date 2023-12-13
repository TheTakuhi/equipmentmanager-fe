import { FC } from "react";

import { Flex, Heading, HStack, Input, Select, Spacer } from "@chakra-ui/react";
import { ArrowUpRight, Download } from "react-feather";

import UsersTableContainer from "../../../admin/containers/user/UsersTableContainer";
import Button from "../../../common/components/Button";
import SortFilter from "../../../common/components/SortFilter";
import FormDialog from "../../../common/dialogs/FormDialog";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";

interface ItemDetailTableProps {
  tableHeight: string;
}

const ItemDetailTable: FC<ItemDetailTableProps> = ({ tableHeight }) => {
  const { show, close } = useActionDialog();
  // TODO implement after adding forms
  // const { mutate: mutateDeleteItem } = useItemDeleteMutation("123");
  // const handleAdd = () => {
  //   mutateDeleteItem(undefined, {
  //     onSuccess: () => {
  //       toast.success("Item deleted", toastOptions);
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

  const lendItemDialogOpen = () => {
    show(<FormDialog title="Lend item" close={close} />);
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
      <UsersTableContainer tableHeight={tableHeight} />
    </>
  );
};

export default ItemDetailTable;
