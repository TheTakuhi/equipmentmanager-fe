import { FC } from "react";

import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";

import { useAddMemberForm } from "./hooks/useAddMemberForm/useAddMemberForm";
import Button from "../../components/Button";
import RHFAutocomplete from "../../components/Inputs/RHFAutocomplete";
import { useGetUsers } from "../../hooks/queries/users/useGetUsers";
import { SelectOption } from "../../models/utils/SelectOption";

export type AddMemberSubmitHandler = (values: { id: string }) => void;

interface AddMemberProps {
  handleSubmit: AddMemberSubmitHandler;
  defaultValues?: { id: string };
  close: () => void;
}

const AddMemberForm: FC<AddMemberProps> = ({
  handleSubmit,
  defaultValues,
  close,
}) => {
  const form = useAddMemberForm({ defaultValues });

  const { data: memberCandidates, isLoading: isLoadingMemberCandidates } =
    useGetUsers();

  const memberOptions: SelectOption[] = [];
  if (memberCandidates)
    memberCandidates.content.map((member) =>
      memberOptions.push({
        value: member.id,
        label: member.fullName,
      }),
    );

  // TODO IMPLEMENT ITEM FORM SKELETON LOADING
  if (isLoadingMemberCandidates) return <Skeleton />;

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <SimpleGrid sx={{ gap: "1rem" }}>
          <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem" }}>
            <RHFAutocomplete
              name="id"
              formLabel="New member"
              options={memberOptions}
              required
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
              <Button variant="primary" label="Add member" type="submit" />
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};

export default AddMemberForm;
