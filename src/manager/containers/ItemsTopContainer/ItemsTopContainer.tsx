import { FC } from "react";

import { Flex, Heading, HStack, Input, Select, Spacer } from "@chakra-ui/react";
import { Download, Plus } from "react-feather";

import Button from "../../../common/components/Button";
import SortFilter from "../../../common/components/SortFilter";
import ItemCreateDialog from "../../../common/dialogs/ItemDialogs/ItemCreateDialog";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";

const ItemsTopContainer: FC = () => {
  const { show } = useActionDialog();

  const addItemDialogOpen = () => {
    show(<ItemCreateDialog />);
  };

  return (
    <>
      <Heading size="h1" sx={{ paddingX: "1.5rem", paddingTop: "1rem" }}>
        Items
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
            label="Add item"
            startIcon={<Plus />}
            onClick={() => addItemDialogOpen()}
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

export default ItemsTopContainer;
