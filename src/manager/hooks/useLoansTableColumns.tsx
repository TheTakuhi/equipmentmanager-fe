import { createColumnHelper } from "@tanstack/react-table";
import { DateTime } from "luxon";

import { Loan } from "../../common/models/loan/Loan";
import { ONEITEMDETAILRoute } from "../../common/routes/common/itemDetail/item/oneItemDetailRoute";
import { StyledLink } from "../../common/theme/styles/styledLink";
import LoanActionMenu from "../components/LoanActionMenu";

export const useLoansTableColumns = () => {
  const columnHelper = createColumnHelper<Loan>();

  return [
    columnHelper.accessor("item.serialCode", {
      header: "Item",
      cell: ({ row }) => {
        return (
          <StyledLink
            to={ONEITEMDETAILRoute.id}
            // @ts-ignore
            params={{ itemDetailId: row.original.item.id }}
          >
            {row.original.item.serialCode}, {row.original.item.type}
          </StyledLink>
        );
      },
      enableColumnFilter: false,
    }),
    columnHelper.accessor("borrower.fullName", {
      header: "Borrower",
      cell: (info) => (
        <StyledLink
          to="/equipment-manager/management/user-detail/$userDetailId"
          // @ts-ignore
          params={{ userDetailId: info.row.original.borrower.id }}
        >
          {info.getValue()}
        </StyledLink>
      ),
      sortingFn: (rowA, rowB) => {
        const value1 = rowA.original.borrower.fullName;
        const value2 = rowB.original.borrower.fullName;
        return value1.localeCompare(value2, "cs");
      },
      enableColumnFilter: false,
    }),
    columnHelper.accessor("loanDate", {
      header: "Lending date",
      cell: (info) =>
        DateTime.fromISO(info.getValue()).setLocale("en-gb").toLocaleString(),
      enableColumnFilter: false,
    }),
    columnHelper.accessor("returnDate", {
      header: "Returned",
      cell: (info) =>
        info.getValue() !== null
          ? DateTime.fromISO(info.getValue()!)
              .setLocale("en-gb")
              .toLocaleString()
          : null,
      enableColumnFilter: false,
    }),
    columnHelper.accessor((row) => row, {
      id: "actions",
      header: "",
      cell: (info) => <LoanActionMenu loan={info.row.original} />,
      enableColumnFilter: false,
      enableSorting: false,
    }),
  ];
};
