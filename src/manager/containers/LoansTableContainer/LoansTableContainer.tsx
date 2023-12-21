import { FC, useEffect } from "react";

import { useSearch } from "@tanstack/react-router";

import TSTable from "../../../common/components/TSTable/TSTable";
import { useGetLoans } from "../../../common/hooks/queries/loans/useGetLoans";
import { Loan } from "../../../common/models/loan/Loan";
import { SearchParams } from "../../../common/models/SearchParams";
import { LOANSRoute } from "../../../common/routes/common/loans/loansRoute";
import { useLoansTableColumns } from "../../hooks/useLoansTableColumns";

interface LoansTableContainerProps {
  tableHeight: string;
}

const LoansTableContainer: FC<LoansTableContainerProps> = ({ tableHeight }) => {
  const columns = useLoansTableColumns();

  const search: SearchParams = useSearch({ from: `${LOANSRoute.id}/` });

  // TODO - implement query params from search
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
        }
      : {},
  );

  useEffect(() => {
    refetch();
  }, [search]);

  return (
    <TSTable<Loan>
      route={`${LOANSRoute.id}/`}
      columns={columns}
      data={loansData?.content ?? []}
      isLoading={isLoadingLoans}
      pageable={loansData}
      tableHeight={tableHeight}
    />
  );
};

export default LoansTableContainer;
