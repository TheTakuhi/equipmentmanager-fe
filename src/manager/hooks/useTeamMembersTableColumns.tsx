import { HStack, Tooltip } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";

import { User } from "../../common/models/user/User";
import { useActiveTeam } from "../../common/providers/ActiveTeamProvider/ActiveTeamProvider";
import { Crown } from "../../common/theme/icons";
import { StyledLink } from "../../common/theme/styles/styledLink";
import TeamActionMenu from "../components/TeamActionMenu";

export const useTeamMembersTableColumns = () => {
  const { activeTeam } = useActiveTeam();
  const columnHelpers = createColumnHelper<User>();

  return [
    columnHelpers.accessor("fullName", {
      header: "Name",
      cell: (info) => {
        return (
          <HStack spacing="0.5rem">
            <div
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <StyledLink
                to="/equipment-manager/management/user-detail/$userDetailId"
                // @ts-ignore
                params={{ userDetailId: info.row.original.id }}
              >
                {info.getValue()}
              </StyledLink>
              {activeTeam?.owner.id === info.row.original.id ? (
                <Tooltip
                  hasArrow
                  label="Team's owner"
                  placement="right"
                  openDelay={500}
                >
                  <Crown width="1.125em" height="1.125em" stroke="#7A7A80" />
                </Tooltip>
              ) : null}
            </div>
          </HStack>
        );
      },
      enableColumnFilter: false,
    }),
    columnHelpers.accessor("login", {
      header: "Login",
      cell: (info) => (
        <div
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <StyledLink
            to="/equipment-manager/management/user-detail/$userDetailId"
            // @ts-ignore
            params={{ userDetailId: info.row.original.id }}
          >
            {info.getValue()}
          </StyledLink>
        </div>
      ),
      enableColumnFilter: false,
    }),
    columnHelpers.accessor("email", {
      header: "Email",
      cell: (info) => (
        <div
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          title={info.getValue()}
        >
          {info.getValue()}
        </div>
      ),
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
