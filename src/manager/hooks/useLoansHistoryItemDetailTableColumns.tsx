import { createColumnHelper } from "@tanstack/react-table";

import { Loan } from "../../common/models/loan/Loan";
import LoanHistoryItemDetailActionMenu from "../components/LoanHistoryItemDetailActionMenu";

export const useLoansHistoryItemDetailTableColumns = () => {
  const columnHelper = createColumnHelper<Loan>();

  return [
    columnHelper.accessor("lender.fullName", {
      header: "Lender",
      cell: (info) => info.getValue(),
      sortingFn: (rowA, rowB) => {
        const value1 = rowA.original.lender.fullName;
        const value2 = rowB.original.lender.fullName;
        return value1.localeCompare(value2, "cs");
      },
      enableColumnFilter: false,
    }),
    columnHelper.accessor("dateOfLending", {
      header: "Lending date",
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
        const value1 = rowA.original.dateOfLending;
        const value2 = rowB.original.dateOfLending;
        return value1.localeCompare(value2, "cs");
      },
      enableColumnFilter: false,
    }),
    columnHelper.accessor("dateOfReturning", {
      header: "Returned",
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
        const value1 = rowA.original.dateOfLending;
        const value2 = rowB.original.dateOfLending;
        return value1.localeCompare(value2, "cs");
      },
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
