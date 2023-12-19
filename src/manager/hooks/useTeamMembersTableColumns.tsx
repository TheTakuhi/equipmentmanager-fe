import { createColumnHelper } from "@tanstack/react-table";

import { User } from "../../common/models/user/User";
import TeamActionMenu from "../components/TeamActionMenu";

export const useTeamMembersTableColumns = () => {
  const columnHelpers = createColumnHelper<User>();

  return [
    columnHelpers.accessor("fullName", {
      header: "Name",
      cell: (info) => info.getValue(),
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
