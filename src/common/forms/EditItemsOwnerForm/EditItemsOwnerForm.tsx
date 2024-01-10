import { FC } from "react";

import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";

import { useEditItemsOwnerForm } from "./hooks/useEditItemsOwnerForm/useEditItemsOwnerForm";
import Button from "../../components/Button";
import RHFAutocomplete from "../../components/Inputs/RHFAutocomplete";
import { useGetUsers } from "../../hooks/queries/users/useGetUsers";
import { SelectOption } from "../../models/utils/SelectOption";

export type EditItemsOwnerSubmitHandler = (values: { id: string }) => void;

interface EditItemsOwnerProps {
  handleSubmit: EditItemsOwnerSubmitHandler;
  defaultValues?: { id: string };
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

  // TODO IMPLEMENT SKELETON LOADING
  if (isLoadingOwnerCandidates) return <Skeleton />;

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <SimpleGrid sx={{ gap: "1rem" }}>
          <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem" }}>
            <RHFAutocomplete
              name="id"
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
