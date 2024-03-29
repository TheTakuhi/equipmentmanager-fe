import { createColumnHelper } from "@tanstack/react-table";

import MyPeopleActionMenu from "../../common/components/ActionMenu/MyPeopleActionMenu";
import { User } from "../../common/models/user/User";

export const useMyPeopleTableColumns = () => {
  const columnHelper = createColumnHelper<User>();

  return [
    columnHelper.accessor("login", {
      header: "Login",
      cell: (info) => info.getValue(),
      enableColumnFilter: false,
    }),
    columnHelper.accessor("fullName", {
      header: "Full name",
      cell: (info) => info.getValue(),
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
      cell: (info) => <MyPeopleActionMenu user={info.row.original} />,
      enableColumnFilter: false,
      enableSorting: false,
    }),
  ];
};
