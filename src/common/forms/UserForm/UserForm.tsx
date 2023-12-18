import { FC } from "react";

import { Box, SimpleGrid } from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";

import { useUserForm } from "./hooks/useUserForm/useUserForm";
import Button from "../../components/Button";
import RHFInput from "../../components/Inputs/RHFInput";
import RHFRadioGroup from "../../components/Inputs/RHFRadioGroup";
import { UserFormValues } from "../../models/user/UserFormValues";
import { CustomRole, DefaultRole } from "../../security/model/Role";

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
  isEdit,
}) => {
  const form = useUserForm({ defaultValues });

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <SimpleGrid sx={{ gap: "1rem" }}>
          <SimpleGrid columns={{ base: 2 }} sx={{ gap: "1rem" }}>
            <RHFInput<UserFormValues>
              name="firstName"
              formLabel="First name"
              type="text"
              disabled={disabled}
              required
            />
            <RHFInput<UserFormValues>
              name="lastName"
              formLabel="Last name"
              type="text"
              disabled={disabled}
              required
            />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem" }}>
            <RHFInput<UserFormValues>
              name="login"
              formLabel="Login"
              type="text"
              disabled={disabled}
              required
            />
            <RHFInput<UserFormValues>
              name="email"
              formLabel="Email"
              type="text"
              disabled={disabled}
              required
            />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem" }}>
            <RHFRadioGroup<UserFormValues>
              name="userRoles"
              label="Role"
              options={[
                ...Object.values(CustomRole),
                ...Object.values(DefaultRole),
              ]}
            />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem", pb: "1rem" }}>
            <Box
              sx={{
                display: "inline-flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "full",
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
