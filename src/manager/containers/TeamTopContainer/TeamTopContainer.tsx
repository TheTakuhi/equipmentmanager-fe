import { Heading, HStack, Spacer } from "@chakra-ui/react";
import { useSearch } from "@tanstack/react-router";
import { UserPlus } from "react-feather";

import Button from "../../../common/components/Button";
import SearchBar from "../../../common/components/SearchBar";
import TeamAddMemberDialog from "../../../common/dialogs/TeamDialogs/TeamAddMemberDialog";
import { useActionDialog } from "../../../common/providers/ActionDialogProvider/ActionDialogProvider";
import { TEAMSRoute } from "../../../common/routes/common/teams/teamsRoute";

const TeamTopContainer = () => {
  const { active }: { active: string } = useSearch({ from: TEAMSRoute.id });
  const { show } = useActionDialog();
  const handleAddMember = () => show(<TeamAddMemberDialog teamId={active} />);

  return (
    <>
      <Heading size="h3" sx={{ paddingX: "1.5rem" }}>
        Members
      </Heading>
      <HStack sx={{ width: "100%", paddingX: "1.5rem" }}>
        <SearchBar
          route={TEAMSRoute.id}
          options={[
            { value: "name", label: "Name" },
            { value: "login", label: "Login" },
            { value: "email", label: "Email" },
          ]}
        />
        <Spacer />
        <Button
          variant="primary"
          label="Add member"
          startIcon={<UserPlus />}
          onClick={handleAddMember}
        />
      </HStack>
    </>
  );
};

export default TeamTopContainer;
