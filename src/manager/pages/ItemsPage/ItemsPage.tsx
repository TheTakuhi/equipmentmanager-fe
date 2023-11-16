import {
  Flex,
  Heading,
  HStack,
  Input,
  Select,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  ArrowUpRight,
  Download,
  Edit2,
  Info,
  Plus,
  Trash,
} from "react-feather";
import { toast } from "react-toastify";

import Badge from "../../../common/components/Badge";
import Button from "../../../common/components/Button";
import Menu from "../../../common/components/Menu";
import SortFilter from "../../../common/components/SortFilter";
import DiscardDialog from "../../../common/dialogs/DiscardDialog";
import FormDialog from "../../../common/dialogs/FormDialog";
import { useItemDeleteMutation } from "../../../common/hooks/mutations/items/useItemDeleteMutation";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../common/utils/toastOptions";

const ItemsPage = () => {
  const { show, close } = useActionDialog();

  const { mutate: mutateDeleteItem } = useItemDeleteMutation("123");
  // const { mutate: mutateAddItem } = useItemCreateMutation();

  const handleDiscard = () => {
    mutateDeleteItem(undefined, {
      onSuccess: () => {
        toast.success("Item deleted", toastOptions);
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

  // TODO implement like this after adding forms
  // const handleAdd: ItemFormSubmitHandler = (values) =>
  //   mutateAddItem(values, {
  //     onSuccess: () => {
  //       toast.success("Item added", toastOptions);
  //       close();
  //     },
  //     onError: (error) => {
  //       toast.error(
  //         error.response?.data.message ?? "An error has occurred",
  //         toastOptions,
  //       );
  //     },
  //   });

  const handleAdd = () => {
    mutateDeleteItem(undefined, {
      onSuccess: () => {
        toast.success("Item deleted", toastOptions);
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

  const discardDialogOpen = () => {
    show(
      <DiscardDialog
        title="Del"
        description="Are you sure?"
        close={close}
        discard={handleDiscard}
      />,
    );
  };

  const addItemDialogOpen = () => {
    show(
      <FormDialog
        title="Add item"
        close={close}
        actionLabel="Confirm"
        action={handleAdd}
      />,
    );
  };

  const getActionMenu = () => {
    return (
      <Menu
        menuItems={[
          {
            label: "Detail",
            icon: <Info />,
            onClick: () => undefined,
          },
          {
            label: "Lend item",
            icon: <ArrowUpRight />,
            onClick: () => addItemDialogOpen(),
          },
          {
            label: "Edit",
            icon: <Edit2 />,
            onClick: () => addItemDialogOpen(),
          },
          {
            label: "Discard",
            icon: <Trash />,
            onClick: () => discardDialogOpen(),
          },
        ]}
      />
    );
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
      <TableContainer>
        <Table>
          <Thead>
            <Th>Serial code</Th>
            <Th>Type</Th>
            <Th>Quality state</Th>
            <Th>State</Th>
            <Th />
          </Thead>
          <Tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <Tr key={index} sx={{ fontSize: "0.875em" }}>
                <Td>KDSS-2424-6565-HYJU</Td>
                <Td>Laptop</Td>
                <Td>good</Td>
                <Td>
                  <Badge
                    variant={index % 3 ? "info" : "success"}
                    label={index % 3 ? "borrowed" : "available"}
                  />
                </Td>
                <Td>{getActionMenu()}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ItemsPage;
