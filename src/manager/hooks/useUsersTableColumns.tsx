import { createColumnHelper } from "@tanstack/react-table";

import UserActionMenu from "../../common/components/ActionMenu/UserActionMenu";
import { User } from "../../common/models/user/User";
import { ONEUSERDETAILRoute } from "../../common/routes/common/userDetail/user/oneUserDetailRoute";
import { StyledLink } from "../../common/theme/styles/styledLink";

export const useUsersTableColumns = () => {
  const columnHelper = createColumnHelper<User>();

  return [
    columnHelper.accessor("login", {
      header: "Login",
      cell: (info) => (
        <StyledLink
          to={ONEUSERDETAILRoute.id}
          params={{ userDetailId: info.row.original.id }}
        >
          {info.getValue()}
        </StyledLink>
      ),
      enableColumnFilter: false,
    }),
    columnHelper.accessor("fullName", {
      header: "Full name",
      cell: (info) => (
        <StyledLink
          to={ONEUSERDETAILRoute.id}
          params={{ userDetailId: info.row.original.id }}
        >
          {info.getValue()}
        </StyledLink>
      ),
      sortingFn: (rowA, rowB) => {
        const value1 = rowA.original.lastName;
        const value2 = rowB.original.lastName;
        return value1.localeCompare(value2, "cs");
      },
      enableColumnFilter: false,
    }),
    columnHelper.accessor("email", {
      header: "E-mail",
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
      sortingFn: (rowA, rowB) => {
        const value1 = rowA.original.fullName;
        const value2 = rowB.original.fullName;
        return value1.localeCompare(value2, "cs");
      },
      enableColumnFilter: false,
    }),
    columnHelper.accessor("userRoles", {
      header: "Role",
      cell: (info) => info.getValue().join(", "),
      sortingFn: (rowA, rowB) => {
        const value1 = rowA.original.userRoles.toString();
        const value2 = rowB.original.userRoles.toString();
        return value1.localeCompare(value2, "cs");
      },
    }),
    columnHelper.display({
      id: "actions",
      header: "",
      cell: (info) => <UserActionMenu user={info.row.original} />,
      enableColumnFilter: false,
      enableSorting: false,
    }),
  ];
};
