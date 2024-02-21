import { FC } from "react";

import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";

import { useTeamForm } from "./hooks/useTeamForm/useTeamForm";
import Button from "../../components/Button";
import RHFInput from "../../components/Inputs/RHFInput";
import RHFSelect from "../../components/Inputs/RHFSelect";
import { useGetUsers } from "../../hooks/queries/users/useGetUsers";
import { TeamFormValues } from "../../models/team/TeamFormRequestValues";
import { SelectOption } from "../../models/utils/SelectOption";
import { useActiveRoles } from "../../providers/ActiveRolesProvider/ActiveRolesProvider";
import { CustomRole } from "../../security/model/Role";
import { parseUsersToSelectOptions } from "../../utils/selectOptionsParser";

export type TeamFormSubmitHandler = (values: TeamFormValues) => void;

interface TeamFormProps {
  handleSubmit: TeamFormSubmitHandler;
  defaultValues?: Partial<TeamFormValues>;
  close: () => void;
  isEdit?: true;
  isSubmitting: boolean;
}

const TeamForm: FC<TeamFormProps> = ({
  handleSubmit,
  defaultValues,
  close,
  isEdit,
  isSubmitting,
}) => {
  const form = useTeamForm({ defaultValues });
  const { activeRoles } = useActiveRoles();

  const { data: ownerCandidates, isLoading: isLoadingOwnerCandidates } =
    useGetUsers();

  const ownerOptions: SelectOption[] = parseUsersToSelectOptions(
    ownerCandidates?.content,
  );

  const memberOptions: SelectOption[] = ownerOptions.filter(
    (m) => m.value !== form.watch("owner").value,
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
            <RHFInput<TeamFormValues>
              name="teamName"
              label="Name"
              type="text"
              required
            />
            <RHFSelect<TeamFormValues>
              name="owner"
              label="Team owner"
              options={ownerOptions}
              isDisabled={
                activeRoles[0].includes(CustomRole.MANAGER) && !isEdit
              }
              required
            />
            <RHFSelect<TeamFormValues>
              name="members"
              label="Members"
              options={memberOptions}
              required
              isMulti
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
              {/* TODO - submitting button style adjustment needed */}
              <Button
                variant="primary"
                label={isEdit ? "Edit team" : "Create team"}
                type="submit"
                isLoading={isSubmitting}
                loadingText="Submitting"
              />
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};

export default TeamForm;
