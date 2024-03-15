import { FC } from "react";

import { useSearch } from "@tanstack/react-router";

import TSTable from "../../../common/components/TSTable/TSTable";
import { useGetLoans } from "../../../common/hooks/queries/loans/useGetLoans";
import { Loan } from "../../../common/models/loan/Loan";
import { SearchParams } from "../../../common/models/SearchParams";
import { AllLOANSRoute } from "../../../common/routes/common/loans/allLoans/allLoansRoute";
import { createQueryParams } from "../../../common/utils/queryParams";
import { useLoansTableColumns } from "../../hooks/useLoansTableColumns";

interface LoansTableContainerProps {
  tableHeight: string;
}

const LoansTableContainer: FC<LoansTableContainerProps> = ({ tableHeight }) => {
  const columns = useLoansTableColumns();

  const search: SearchParams = useSearch({ from: AllLOANSRoute.id });

  const { data: loansData, isLoading: isLoadingLoans } = useGetLoans({
    ...createQueryParams(search),
  });

  return (
    <TSTable<Loan>
      route={AllLOANSRoute.id}
      columns={columns}
      data={loansData?.content ?? []}
      isLoading={isLoadingLoans}
      pageable={loansData}
      tableHeight={tableHeight}
    />
  );
};

export default LoansTableContainer;
