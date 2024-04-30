import { createColumnHelper } from "@tanstack/react-table";
import { DateTime } from "luxon";

import { Loan } from "../../common/models/loan/Loan";
import { ONEITEMDETAILRoute } from "../../common/routes/common/itemDetail/item/oneItemDetailRoute";
import { StyledLink } from "../../common/theme/styles/styledLink";
import LoanHistoryUserDetailActionMenu from "../components/LoanHistoryUserDetailActionMenu";

export const useLoansHistoryUserDetailTableColumns = () => {
  const columnHelper = createColumnHelper<Loan>();

  return [
    columnHelper.accessor("item.serialCode", {
      id: "serialCode",
      header: "Item",
      cell: ({ row }) => {
        return (
          <div
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <StyledLink
              to={ONEITEMDETAILRoute.id}
              // @ts-ignore
              params={{ itemDetailId: row.original.item.id }}
            >
              {row.original.item.serialCode}, {row.original.item.type}
            </StyledLink>
          </div>
        );
      },
      enableColumnFilter: false,
    }),
    columnHelper.accessor("loanDate", {
      header: "Lending date",
      cell: (info) => (
        <div
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {DateTime.fromISO(info.getValue())
            .setLocale("en-gb")
            .toLocaleString()}
        </div>
      ),
      enableColumnFilter: false,
    }),
    columnHelper.accessor("returnDate", {
      header: "Returned",
      cell: (info) => (
        <div
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {info.getValue() !== null
            ? DateTime.fromISO(info.getValue()!)
                .setLocale("en-gb")
                .toLocaleString()
            : null}
        </div>
      ),
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
