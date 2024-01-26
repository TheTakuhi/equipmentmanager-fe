import { FC } from "react";

import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";

import { useTeamForm } from "./hooks/useTeamForm/useTeamForm";
import Button from "../../components/Button";
import RHFInput from "../../components/Inputs/RHFInput";
import RHFMultiSelect from "../../components/Inputs/RHFMultiSelect";
import RHFSelect from "../../components/Inputs/RHFSelect";
import { useGetUsers } from "../../hooks/queries/users/useGetUsers";
import { TeamFormValues } from "../../models/team/TeamFormValues";
import { SelectOption } from "../../models/utils/SelectOption";

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
  isEdit,
}) => {
  const form = useTeamForm({ defaultValues });

  // TODO IMPLEMENT FOR BOTH MANAGER & ADMIN
  const { data: ownerCandidates, isLoading: isLoadingOwnerCandidates } =
    useGetUsers();

  const ownerOptions: SelectOption[] = [];
  if (ownerCandidates)
    ownerCandidates.content.map((owner) =>
      ownerOptions.push({
        value: owner.id,
        label: owner.fullName,
        id: owner.id,
      }),
    );

  const memberOptions: SelectOption[] = [];
  if (ownerCandidates)
    ownerCandidates.content.forEach((member) => {
      const option: SelectOption = {
        value: member.id,
        label: member.fullName,
        id: member.id,
      };
      memberOptions.push(option);
    });

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
            <RHFInput<TeamFormValues>
              name="teamName"
              label="Name"
              type="text"
              disabled={disabled}
              required
            />
            <RHFSelect<TeamFormValues>
              name="owner"
              label="Team owner"
              options={ownerOptions}
              disabled={disabled}
              required
            />
            <RHFMultiSelect<TeamFormValues>
              name="members"
              formLabel="Members"
              options={memberOptions}
              disabled={disabled}
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
