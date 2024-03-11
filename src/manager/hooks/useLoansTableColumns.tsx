import { createColumnHelper } from "@tanstack/react-table";

import { Loan } from "../../common/models/loan/Loan";
import LoanActionMenu from "../components/LoanActionMenu";

export const useLoansTableColumns = () => {
  const columnHelper = createColumnHelper<Loan>();

  return [
    columnHelper.accessor("item.serialCode", {
      header: "Item",
      cell: ({ row }) => {
        return (
          <div>
            {row.original.item.serialCode},{" "}
            {row.original.item.type}
          </div>
        );
      },
      enableColumnFilter: false,
    }),
    columnHelper.accessor("borrower.fullName", {
      header: "Borrower",
      cell: (info) => info.getValue(),
      sortingFn: (rowA, rowB) => {
        const value1 = rowA.original.borrower.fullName;
        const value2 = rowB.original.borrower.fullName;
        return value1.localeCompare(value2, "cs");
      },
      enableColumnFilter: false,
    }),
    columnHelper.accessor("loanDate", {
      header: "Lending date",
      cell: (info) => info.getValue(),
      enableColumnFilter: false,
    }),
    columnHelper.accessor("returnDate", {
      header: "Returned",
      cell: (info) => info.getValue(),
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
