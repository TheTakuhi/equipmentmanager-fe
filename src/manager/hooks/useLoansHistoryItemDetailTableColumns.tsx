import { createColumnHelper } from "@tanstack/react-table";
import { DateTime } from "luxon";

import { Loan } from "../../common/models/loan/Loan";
import { StyledLink } from "../../common/theme/styles/styledLink";
import LoanHistoryItemDetailActionMenu from "../components/LoanHistoryItemDetailActionMenu";

export const useLoansHistoryItemDetailTableColumns = () => {
  const columnHelper = createColumnHelper<Loan>();

  return [
    columnHelper.accessor("borrower.fullName", {
      id: "borrower.fullName",
      header: "Borrower",
      cell: (info) => (
        <StyledLink
          to="/equipment-manager/management/user-detail/$userDetailId"
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
      cell: (info) => (
        <LoanHistoryItemDetailActionMenu loan={info.row.original} />
      ),
      enableColumnFilter: false,
      enableSorting: false,
    }),
  ];
};
