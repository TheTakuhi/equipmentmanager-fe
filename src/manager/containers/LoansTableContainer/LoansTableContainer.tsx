import { FC, useEffect, useState } from "react";

import TSTable, {
  TableStateProps,
} from "../../../common/components/TSTable/TSTable";
import { TableSearchQuery } from "../../../common/forms/useTableSearchForm/useTableSearchForm";
import { useGetLoans } from "../../../common/hooks/queries/loans/useGetLoans";
import { useLoansTableColumns } from "../../../common/hooks/utils/useLoansTableColumns";

interface LoansTableContainerProps {
  searchQuery?: TableSearchQuery;
  tableHeight: string;
}

const LoansTableContainer: FC<LoansTableContainerProps> = ({
  searchQuery,
  tableHeight,
}) => {
  const columns = useLoansTableColumns();

  const [tableStateProps, setTableStateProps] = useState<TableStateProps>({
    pageIndex: 0,
    pageSize: 15,
    sort: "",
    sortDirection: "",
    columnFilters: [],
  });

  const {
    data: loansData,
    isLoading: isLoadingLoans,
    refetch,
  } = useGetLoans({
    [`${searchQuery?.param}`]: searchQuery?.value,
    [`${
      tableStateProps.columnFilters ? tableStateProps.columnFilters[0]?.id : ""
    }`]: tableStateProps.columnFilters
      ? tableStateProps.columnFilters[0]?.value
      : "",
    pageable: {
      page: tableStateProps.pageIndex,
      size: tableStateProps.pageSize,
      sort: tableStateProps.sort,
      [`${tableStateProps.sort}.dir`]: tableStateProps.sortDirection,
    },
  });

  useEffect(() => {
    refetch();
  }, [searchQuery, tableStateProps]);

  return (
    <TSTable
      columns={columns}
      data={loansData?.content ?? []}
      isLoading={isLoadingLoans}
      pageable={loansData}
      tableStateCallback={(info) => setTableStateProps(info)}
      tableHeight={tableHeight}
    />
  );
};

export default LoansTableContainer;
