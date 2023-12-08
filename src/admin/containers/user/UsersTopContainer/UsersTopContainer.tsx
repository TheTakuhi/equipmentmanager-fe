import { FC } from "react";

import { Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { Download, RefreshCw } from "react-feather";

import Button from "../../../../common/components/Button";
import SearchBar from "../../../../common/components/SearchBar";
import SortFilter from "../../../../common/components/SortFilter";
import { useActionDialog } from "../../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import UsersSyncDialog from "../../../../common/dialogs/UserDialogs/UsersSyncDialog";

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
          <SortFilter
            options={[
              { value: "asc", label: "Newest" },
              { value: "desc", label: "Oldest" },
            ]}
          />
          <SearchBar
            options={[
              { value: "login", label: "Login" },
              { value: "fullName", label: "Name" },
              { value: "email", label: "E-mail" },
            ]}
            handleSubmit={() => {}}
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
          />
        </HStack>
      </Flex>
    </>
  );
};

export default UsersTopContainer;
