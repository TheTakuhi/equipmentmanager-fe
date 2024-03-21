import { HStack, Text, Tooltip } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";

import { Team } from "../../common/models/team/Team";
import { User } from "../../common/models/user/User";
import { Crown } from "../../common/theme/icons";
import TeamActionMenu from "../components/TeamActionMenu";

export const useTeamMembersTableColumns = (team: Team) => {
  const columnHelpers = createColumnHelper<User>();

  return [
    columnHelpers.accessor("fullName", {
      header: "Name",
      cell: (info) => {
        return (
          <HStack spacing="0.5rem">
            <Text sx={{ fontSize: "1em" }}>{info.getValue()}</Text>
            {team.owner.id === info.row.original.id ? (
              <Tooltip
                hasArrow
                label="Team's owner"
                placement="right"
                openDelay={500}
              >
                <Crown width="1.125em" height="1.125em" stroke="#7A7A80" />
              </Tooltip>
            ) : null}
          </HStack>
        );
      },
      enableColumnFilter: false,
    }),
    columnHelpers.accessor("login", {
      header: "Login",
      cell: (info) => info.getValue(),
      enableColumnFilter: false,
    }),
    columnHelpers.accessor("email", {
      header: "Email",
      cell: (info) => info.getValue(),
      enableColumnFilter: false,
    }),
    columnHelpers.accessor((row) => row, {
      id: "actions",
      header: "",
      cell: (info) => <TeamActionMenu user={info.row.original} />,
      enableColumnFilter: false,
      enableSorting: false,
    }),
  ];
};
