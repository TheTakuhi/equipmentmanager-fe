import {
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { PaginationStateProps } from "./Pagination/TSPagination";

interface TanstackTableProps {
  data: any[];
  columns: any[];
  paginationProps: PaginationStateProps;
  pageable: any;
}

export function useTanstackTable({
  data,
  columns,
  paginationProps,
  pageable,
}: TanstackTableProps) {
  return useReactTable({
    data,
    columns,
    state: {
      pagination: {
        pageIndex: paginationProps.pageIndex,
        pageSize: paginationProps.pageSize,
      },
    },
    initialState: {
      pagination: {
        pageIndex: paginationProps.pageIndex,
        pageSize: paginationProps.pageSize,
      },
    },
    manualPagination: true,
    pageCount: pageable?.totalPages,
    manualSorting: true,
    manualFiltering: true,

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
}
