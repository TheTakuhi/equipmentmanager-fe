import { FC } from "react";

import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";

import { useEditItemsOwnerForm } from "./hooks/useEditItemsOwnerForm/useEditItemsOwnerForm";
import Button from "../../components/Button";
import RHFSelect from "../../components/Inputs/RHFSelect";
import { useGetUsers } from "../../hooks/queries/users/useGetUsers";
import { UserSelectOption } from "../../models/user/UserSelectOption";
import { SelectOption } from "../../models/utils/SelectOption";

export type EditItemsOwnerSubmitHandler = (values: UserSelectOption) => void;

interface EditItemsOwnerProps {
  handleSubmit: EditItemsOwnerSubmitHandler;
  defaultValues?: Partial<UserSelectOption>;
}

const EditItemsOwnerForm: FC<EditItemsOwnerProps> = ({
  handleSubmit,
  defaultValues,
}) => {
  const form = useEditItemsOwnerForm({ defaultValues });

  const { data: ownerCandidates, isLoading: isLoadingOwnerCandidates } =
    useGetUsers();

  const memberOptions: SelectOption[] = [];
  if (ownerCandidates)
    ownerCandidates.content.map((member) =>
      memberOptions.push({
        value: member.id,
        label: member.fullName,
      }),
    );

  if (isLoadingOwnerCandidates)
    return (
      <Skeleton
        height="1rem"
        width="auto"
        mt="1rem"
        startColor="#222222"
        endColor="#444444"
      />
    );

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <SimpleGrid sx={{ gap: "1rem" }}>
          <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem" }}>
            <RHFSelect<UserSelectOption>
              name="toUserId"
              label="New owner of items"
              options={memberOptions}
              required
            />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem" }}>
            <Box
              sx={{
                display: "inline-flex",
                justifyContent: "end",
                alignItems: "center",
                width: "full",
              }}
            >
              <Button variant="primary" label="Edit owner" type="submit" />
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};

export default EditItemsOwnerForm;
