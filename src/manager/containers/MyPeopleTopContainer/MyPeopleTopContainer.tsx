import { FC } from "react";

import { Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { Download, Plus } from "react-feather";
import { toast } from "react-toastify";

import Button from "../../../common/components/Button";
import SearchBar from "../../../common/components/SearchBar";
import SortFilter from "../../../common/components/SortFilter";
import FormDialog from "../../../common/dialogs/FormDialog";
import { useItemDeleteMutation } from "../../../common/hooks/mutations/items/useItemDeleteMutation";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { toastOptions } from "../../../common/utils/toastOptions";

const MyPeopleTopContainer: FC = () => {
  const { show, close } = useActionDialog();
  // TODO implement like this after adding forms
  // const handleAdd: UserFormSubmitHandler = (values) =>
  //   mutateAddUser(values, {
  //     onSuccess: () => {
  //       toast.success("User added", toastOptions);
  //       close();
  //     },
  //     onError: (error) => {
  //       toast.error(
  //         error.response?.data.message ?? "An error has occurred",
  //         toastOptions,
  //       );
  //     },
  //   });

  const { mutate: mutateDeleteItem } = useItemDeleteMutation("123");
  // const { mutate: mutateAddUser } = useUserCreateMutation();

  const handleAdd = () => {
    mutateDeleteItem(undefined, {
      onSuccess: () => {
        toast.success("User created", toastOptions);
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

  const addUserDialogOpen = () => {
    show(
      <FormDialog
        title="Create user"
        close={close}
        actionLabel="Confirm"
        action={handleAdd}
      />,
    );
  };

  return (
    <>
      <Heading size="h1" sx={{ paddingX: "1.5rem", paddingTop: "1rem" }}>
        My people
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

export default MyPeopleTopContainer;
