import { FC, useEffect } from "react";

import { useSearch } from "@tanstack/react-router";

import TSTable from "../../../common/components/TSTable/TSTable";
import { useGetLoans } from "../../../common/hooks/queries/loans/useGetLoans";
import { Loan } from "../../../common/models/loan/Loan";
import { SearchParams } from "../../../common/models/SearchParams";

interface LoansHistoryTableContainerProps {
  tableHeight: string;
  route: string;
  columns: any;
  userLoanHistory?: string;
  itemLoanHistory?: string;
}

const LoansHistoryTableContainer: FC<LoansHistoryTableContainerProps> = ({
  tableHeight,
  route,
  columns,
  userLoanHistory,
  itemLoanHistory,
}) => {
  const search: SearchParams = useSearch({ from: route });

  const {
    data: loansData,
    isLoading: isLoadingLoans,
    refetch,
  } = useGetLoans(
    search.pagination !== undefined && search.table !== undefined
      ? {
          [`${search.search !== undefined ? search.search.param : ""}`]:
            search.search !== undefined ? search.search.value : "",
          [`${search.table.columnFilters[0]?.id}`]:
            search.table.columnFilters[0]?.value,
          pageable: {
            page: search.pagination.index,
            size: search.pagination.size,
            sort: search.table.sort,
          },
          user: userLoanHistory,
          item: itemLoanHistory,
        }
      : {},
  );

  useEffect(() => {
    refetch();
  }, [search]);

  return (
    <TSTable<Loan>
      route={route}
      columns={columns}
      data={loansData?.content ?? []}
      isLoading={isLoadingLoans}
      pageable={loansData}
      tableHeight={tableHeight}
    />
  );
};

export default LoansHistoryTableContainer;
