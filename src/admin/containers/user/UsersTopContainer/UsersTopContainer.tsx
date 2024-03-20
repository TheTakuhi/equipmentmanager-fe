import { FC } from "react";

import { Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { Download, RefreshCw } from "react-feather";

import Button from "../../../../common/components/Button";
import SearchBar from "../../../../common/components/SearchBar";
import UsersSyncDialog from "../../../../common/dialogs/UserDialogs/UsersSyncDialog";
import { useActionDialog } from "../../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { AllUSERSRoute } from "../../../../common/routes/common/users/allUsers/allUsersRoute";

const UsersTopContainer: FC = () => {
  const { show } = useActionDialog();

  const syncUsersDialogOpen = () => {
    show(<UsersSyncDialog />);
  };

  return (
    <>
      <Heading size="h1" sx={{ paddingX: "1.5rem", paddingTop: "1rem" }}>
        Users
      </Heading>
      <Flex sx={{ padding: "1rem 1.5rem" }}>
        <HStack gap="0.625rem">
          <SearchBar
            route={AllUSERSRoute.id}
            options={[
              { value: "login", label: "Login" },
              { value: "fullName", label: "Name" },
            ]}
          />
        </HStack>
        <Spacer />
        <HStack gap="0.625rem" align="flex-end" paddingLeft="0.625rem">
          <Button
            variant="primary"
            label="Sync with AD"
            startIcon={<RefreshCw />}
            onClick={syncUsersDialogOpen}
          />
          <Button
            variant="secondary"
            label="Export list"
            startIcon={<Download />}
            // TODO - enable after export is implemented
            isDisabled
          />
        </HStack>
      </Flex>
    </>
  );
};

export default UsersTopContainer;
