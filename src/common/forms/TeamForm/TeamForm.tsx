import { TeamFormValues } from "../../models/team/TeamFormValues";
import { FC } from "react";
import { useTeamForm } from "./hooks/useTeamForm/useTeamForm";
import { FormProvider } from "react-hook-form";
import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import Button from "../../components/Button";
import RHFInput from "../../components/Inputs/RHFInput";
import RHFAutocomplete from "../../components/Inputs/RHFAutocomplete";
import { useGetUsers } from "../../hooks/queries/users/useGetUsers";
import { SelectOption } from "../../models/utils/SelectOption";
import RHFMultiSelect from "../../components/Inputs/RHFMultiSelect";

export type TeamFormSubmitHandler = (values: TeamFormValues) => void;

interface TeamFormProps {
  handleSubmit: TeamFormSubmitHandler;
  disabled?: boolean;
  defaultValues?: Partial<TeamFormValues>;
  close: () => void;
  isEdit?: true;
}

const TeamForm: FC<TeamFormProps> = ({
  handleSubmit,
  disabled,
  defaultValues,
  close,
  isEdit
}) => {
  const form = useTeamForm({defaultValues});

  // TODO IMPLEMENT FOR BOTH MANAGER & ADMIN
  const { data: ownerCandidates, isLoading: isLoadingOwnerCandidates } =
    useGetUsers();

  const ownerOptions: SelectOption[] = [];
  if(ownerCandidates)
    ownerCandidates.content.map((owner) =>
      ownerOptions.push({
        value: owner.id,
        label: owner.fullName,
      }),
    );

  // TODO IMPLEMENT ITEM FORM SKELETON LOADING
  if (isLoadingOwnerCandidates) return <Skeleton />;

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <SimpleGrid sx={{ gap: "1rem" }}>
          <SimpleGrid columns={{ base: 1 }} sx={{ gap: "1rem" }}>
            <RHFInput<typeof form>
              name="teamName"
              formLabel="Name"
              type="text"
              disabled={disabled}
              isRequired
            />
            <RHFAutocomplete<typeof form>
              name="owner"
              formLabel="Team owner"
              options={ownerOptions}
              disabled={disabled}
              isRequired
            />
            <RHFMultiSelect<typeof form>
              name="members"
              formLabel="Members"
              options={ownerOptions}
              disabled={disabled}
              isRequired
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
                label={isEdit ? "Edit team" : "Create team"}
                type="submit"
              />
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};

export default TeamForm;
