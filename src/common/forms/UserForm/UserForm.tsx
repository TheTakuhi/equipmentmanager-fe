import { FC } from "react";
import { UserFormValues } from "../../models/user/UserFormValues";

import { useUserForm } from "./hooks/useUserForm/useUserForm";

import { Box, SimpleGrid } from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";
import Button from "../../components/Button";
import RHFInput from "../../components/Inputs/RHFInput";
import RHFCheckboxGroup from "../../components/Inputs/RHFCheckboxGroup";


import { CustomRole, DefaultRole } from "../../security/model/Role.ts";

export type UserFormSubmitHandler = (values: UserFormValues) => void;

interface UserFormProps {
  handleSubmit: UserFormSubmitHandler;
  disabled?: boolean;
  defaultValues?: Partial<UserFormValues>;
  close: () => void;
  isEdit?: true;
}

const UserForm: FC<UserFormProps> = ({
                                       handleSubmit,
                                       disabled,
                                       defaultValues,
                                       close,
                                       isEdit
                                     }) => {
  const form = useUserForm({ defaultValues });

  const handleCheckboxChange = (event: React.FormEvent<HTMLDivElement>) => {
    const { value } = event.target as HTMLInputElement;
    const userRoles = form.getValues("userRoles");
    if (userRoles.includes(value)) {
      form.setValue(
        "userRoles",
        userRoles.filter((role) => role !== value)
      );
    } else {
      form.setValue("userRoles", [...userRoles, value]);
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <SimpleGrid sx={{ gap: "1rem" }}>
          <SimpleGrid columns={{ base: 2 }} sx={{ gap: "1rem" }}>
            <RHFInput<typeof form>
              name="firstName"
              formLabel="First name"
              type="text"
              disabled={disabled}
              isRequired
            />
            <RHFInput<typeof form>
              name="lastName"
              formLabel="Last name"
              type="text"
              disabled={disabled}
              isRequired
            />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem" }}>
            <RHFInput<typeof form>
              name="login"
              formLabel="Login"
              type="text"
              disabled={disabled}
              isRequired
            />
            <RHFInput<typeof form>
              name="email"
              formLabel="Email"
              type="text"
              disabled={disabled}
              isRequired
            />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem" }}>
            <RHFCheckboxGroup<typeof form>
              name="userRoles"
              label="Role"
              isRequired
              options={[
                ...Object.values(CustomRole),
                ...Object.values(DefaultRole)
              ]}
              onChange={handleCheckboxChange}
            />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem", pb: "1rem" }}>
            <Box
              sx={{
                display: "inline-flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "full"
              }}
            >
              <Button variant="secondary" label="Close" onClick={close} />
              <Button
                variant="primary"
                label={isEdit ? "Edit user" : "Add user"}
                type="submit"
              />
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};

export default UserForm;
