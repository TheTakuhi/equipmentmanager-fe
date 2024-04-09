import { ColumnFiltersState } from "@tanstack/react-table";

import { SearchParams } from "../models/SearchParams";
import { PageableParam } from "../models/utils/Pageable";

export type FilterParams = string | Partial<PageableParam>;
export type QueryParams = Record<string, FilterParams>;

const addColumnFiltersIfAny = (
  queryParams: QueryParams,
  columnFilters: ColumnFiltersState,
) => {
  if (columnFilters.length) {
    const filterId = columnFilters[0].id;
    const filterValue = columnFilters[0].value as string;
    if (filterId) {
      queryParams[filterId] = filterValue;
    }
  }
};

const addAdditionalParamsIfAny = (
  queryParams: QueryParams,
  additionalParams?: { [key: string]: string | number | boolean | undefined },
) => {
  if (additionalParams)
    Object.entries(additionalParams).forEach(([key, value]) => {
      if (value !== undefined && queryParams)
        queryParams[key] = value as string;
    });
};

export const createQueryParams = (
  searchParams: SearchParams,
  additionalParams?: { [key: string]: string | number | boolean | undefined },
): QueryParams => {
  const queryParams: QueryParams = {};

  if (!Object.keys(searchParams).length) return queryParams;

  const { search, table, pagination } = searchParams;

  if (!!search && !!search.value) queryParams[search.param] = search.value;

  if (table.columnFilters.length)
    addColumnFiltersIfAny(queryParams, table.columnFilters);

  queryParams.pageable = {
    page: pagination.index,
    size: pagination.size,
    sort: table?.sort,
  };

  addAdditionalParamsIfAny(queryParams, additionalParams);

  return queryParams;
};
