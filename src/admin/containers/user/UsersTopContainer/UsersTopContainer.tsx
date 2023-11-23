import { FC } from "react";

import { Flex, Heading, HStack, Input, Select, Spacer } from "@chakra-ui/react";
import { Download, Plus } from "react-feather";

import Button from "../../../../common/components/Button";
import UserCreateDialog from "../../../../common/dialogs/UserDialogs/UserCreateDialog";
import { useActionDialog } from "../../../../common/providers/ActionDialogProvider/ActionDialogProvider";

const UsersTopContainer: FC = () => {
  const { show } = useActionDialog();

  const addUserDialogOpen = () => {
    show(<UserCreateDialog />);
  };

  return (
    <>
      <Heading size="h1" sx={{ paddingX: "1.5rem", paddingTop: "1rem" }}>
        Users
      </Heading>
      <Flex sx={{ padding: "1rem 1.5rem" }}>
        <HStack gap="0.625rem">
          <Select variant="filled">
            <option>Login</option>
            <option>Email</option>
            <option>Role</option>
          </Select>
          <Input placeholder="Search..." />
        </HStack>
        <Spacer />
        <HStack gap="0.625rem" align="flex-end" paddingLeft="0.625rem">
          <Button
            variant="primary"
            label="Add user"
            startIcon={<Plus />}
            onClick={() => addUserDialogOpen()}
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

export default UsersTopContainer;
