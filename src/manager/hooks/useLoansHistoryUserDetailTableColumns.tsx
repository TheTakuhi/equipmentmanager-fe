import { createColumnHelper } from "@tanstack/react-table";
import { DateTime } from "luxon";

import { Loan } from "../../common/models/loan/Loan";
import LoanHistoryUserDetailActionMenu from "../components/LoanHistoryUserDetailActionMenu";

export const useLoansHistoryUserDetailTableColumns = () => {
  const columnHelper = createColumnHelper<Loan>();

  return [
    columnHelper.accessor("item.serialCode", {
      id: "serialCode",
      header: "Item",
      cell: ({ row }) => {
        return (
          <div>
            {row.original.item.serialCode}, {row.original.item.type}
          </div>
        );
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
        <LoanHistoryUserDetailActionMenu loan={info.row.original} />
      ),
      enableColumnFilter: false,
      enableSorting: false,
    }),
  ];
};
