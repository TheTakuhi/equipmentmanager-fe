import { FC } from "react";

import { useSearch } from "@tanstack/react-router";

import TSTable from "../../../common/components/TSTable/TSTable";
import { useGetLoans } from "../../../common/hooks/queries/loans/useGetLoans";
import { Loan } from "../../../common/models/loan/Loan";
import { SearchParams } from "../../../common/models/SearchParams";
import { createQueryParams } from "../../../common/utils/queryParams";

type LoansHistoryTableContainerProps = {
  tableHeight: string;
  route: string;
  columns: any;
  userName?: string;
  serialCode?: string;
};

const LoansHistoryTableContainer: FC<LoansHistoryTableContainerProps> = ({
  tableHeight,
  route,
  columns,
  userName,
  serialCode,
}) => {
  const search: SearchParams = useSearch({ from: route });

  const { data: loansData, isLoading: isLoadingLoans } = useGetLoans({
    ...createQueryParams(search, {
      sort: search.table?.sort ? undefined : "returnDate,desc",
      borrowerName: userName,
      serialCode,
    }),
  });

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
