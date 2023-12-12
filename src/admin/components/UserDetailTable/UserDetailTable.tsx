import { FC } from "react";

import { Flex, Heading, HStack, Input, Select, Spacer } from "@chakra-ui/react";
import { Download } from "react-feather";

import Button from "../../../common/components/Button";
import SortFilter from "../../../common/components/SortFilter";
import LoansTableContainer from "../../../manager/containers/LoansTableContainer";

interface UserDetailTableProps {
  tableHeight: string;
}

const UserDetailTable: FC<UserDetailTableProps> = ({ tableHeight }) => {
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
              <option>Item code</option>
              <option>Item type</option>
            </Select>
            <Input placeholder="Search..." />
          </HStack>
        </HStack>
        <Spacer />
        <HStack gap="0.625rem" align="flex-end" paddingLeft="0.625rem">
          <Button
            variant="secondary"
            label="Export list"
            startIcon={<Download />}
          />
        </HStack>
      </Flex>
      <LoansTableContainer tableHeight={tableHeight} />
    </>
  );
};

export default UserDetailTable;