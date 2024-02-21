import { FC } from "react";

import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { FormProvider } from "react-hook-form";

import { useAddMemberForm } from "./hooks/useAddMemberForm/useAddMemberForm";
import Button from "../../components/Button";
import RHFSelect from "../../components/Inputs/RHFSelect";
import { useGetTeamById } from "../../hooks/queries/teams/useGetTeamById";
import { useGetUsers } from "../../hooks/queries/users/useGetUsers";
import { SelectOption } from "../../models/utils/SelectOption";
import { parseUsersToSelectOptions } from "../../utils/selectOptionsParser";

export type TeamMemberRequestType = {
  member: {
    value: string;
    label: string;
  };
};

export type TeamMemberSubmitHandler = (values: TeamMemberRequestType) => void;

interface AddMemberProps {
  handleSubmit: TeamMemberSubmitHandler;
  defaultValues?: TeamMemberRequestType;
  close: () => void;
  teamId: string;
}

const AddMemberForm: FC<AddMemberProps> = ({
  handleSubmit,
  defaultValues,
  close,
  teamId,
}) => {
  const form = useAddMemberForm({ defaultValues });

  const { data: teamInfo, isLoading: isLoadingTeamInfo } =
    useGetTeamById(teamId);

  const { data: memberCandidates, isLoading: isLoadingMemberCandidates } =
    useGetUsers();

  const memberOptions: SelectOption[] = parseUsersToSelectOptions(
    memberCandidates?.content.filter(
      (m) => !teamInfo?.members.find((v) => v.id === m.id),
    ),
  );

  if (isLoadingMemberCandidates || isLoadingTeamInfo)
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
            <RHFSelect
              name="member"
              label="New member"
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
