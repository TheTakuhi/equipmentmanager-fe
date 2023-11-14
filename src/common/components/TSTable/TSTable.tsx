import { FC, useEffect, useState } from "react";

import {
  Grid,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ColumnFilter, flexRender } from "@tanstack/react-table";
import { ChevronDown, ChevronUp } from "react-feather";

import TSFilter from "./Filter/TSFilter";
import TSPagination from "./Pagination";
import { PaginationStateProps } from "./Pagination/TSPagination";
import { tableHeadStyle, tableRowStyle, tableStyle } from "./tableStyles";
import { useTanstackTable } from "./useTanstackTable";
import { TableSearchQuery } from "../../forms/useTableSearchForm/useTableSearchForm";
import { Pageable } from "../../models/utils/Pageable";
import { useNavbar } from "../../providers/NavbarProvider/NavbarProvider";
import { theme } from "../../theme";

export interface TableStateProps extends PaginationStateProps {
  sort: string;
  sortDirection: string;
  columnFilters?: ColumnFilter[];
}

interface TSTableProps {
  data: any[];
  columns: any[];
  isLoading: boolean;
  pageable?: Pageable<any>;
  filterData?: any;
  searchQuery?: TableSearchQuery;
  tableStateCallback: (info: TableStateProps) => void;
}

const TSTable: FC<TSTableProps> = ({
  data,
  columns,
  isLoading,
  pageable,
  filterData,
  searchQuery,
  tableStateCallback,
}) => {
  const { navbarState } = useNavbar();
  const navbar = navbarState ? 170 : 64;

  const [paginationProps, setPaginationProps] = useState<PaginationStateProps>({
    pageIndex: 0,
    pageSize: 15,
  });
  const [columnFilters, setColumnFilters] = useState<ColumnFilter[]>([]);

  const table = useTanstackTable({
    data,
    columns,
    paginationProps,
    pageable,
  });

  useEffect(() => {
    setPaginationProps({ pageIndex: 0, pageSize: paginationProps.pageSize });
  }, [columnFilters, searchQuery]);

  useEffect(() => {
    if (
      pageable &&
      pageable.totalPages !== paginationProps.pageIndex + 1 &&
      pageable.size < paginationProps.pageSize
    ) {
      setPaginationProps({ pageIndex: 0, pageSize: paginationProps.pageSize });
    }
  }, [data]);

  // INFO sorting use effect + callback to get data into the endpoint
  useEffect(() => {
    const { sorting } = table.getState();
    const sortName = sorting.length !== 0 ? sorting[0].id : "";
    const sortDirection =
      sorting.length !== 0 ? (sorting[0].desc ? "desc" : "asc") : "";

    tableStateCallback({
      ...paginationProps,
      sort: sortName,
      sortDirection,
      columnFilters,
    });
  }, [paginationProps, table.getState().sorting, columnFilters]);

  // TODO PAGINATION TRANSITION ANIMATION FIX
  return (
    <>
      <TableContainer>
        <Table sx={{ ...tableStyle }}>
          <Thead sx={{ ...tableHeadStyle(table) }}>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                      sx={{
                        p: "0.5rem 0.75rem",
                        fontSize: theme.components.Text.sizes.body1.fontSize,
                        fontWeight: "normal",
                        letterSpacing: 0,
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.75rem",
                          }}
                        >
                          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none"
                                : "",
                              style: {
                                display: "inline-flex",
                                gap: "0.5rem",
                                cursor: "pointer",
                                color: theme.palette.text.disabled,
                                textTransform: "capitalize",
                              },
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                            {{
                              asc: <ChevronUp width="1rem" height="1rem" />,
                              desc: <ChevronDown width="1rem" height="1rem" />,
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                          {header.column.getCanFilter() ? (
                            <TSFilter
                              column={header.column}
                              onChange={setColumnFilters}
                              data={filterData}
                            />
                          ) : null}
                        </div>
                      )}
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {isLoading
              ? table.getHeaderGroups().map((headerGroup) => (
                  <Tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <Td key={header.id}>
                          <Skeleton variant="text" />
                        </Td>
                      );
                    })}
                  </Tr>
                ))
              : data.length === 0
              ? table.getHeaderGroups().map((headerGroup) => (
                  <Tr key={headerGroup.id}>
                    <Td colSpan={headerGroup.headers.length}>
                      <Text
                        sx={{
                          fontSize: theme.components.Text.sizes.body1.fontSize,
                          fontStyle: "italic",
                          textAlign: "center",
                          p: "2rem 1rem",
                        }}
                      >
                        No data found
                      </Text>
                    </Td>
                  </Tr>
                ))
              : table.getRowModel().rows.map((row) => {
                  return (
                    <Tr
                      key={row.id}
                      sx={{
                        ...tableRowStyle,
                      }}
                    >
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <Td
                            key={cell.id}
                            sx={{
                              "&:first-of-type": {
                                paddingLeft: "2rem !important",
                              },
                              fontSize:
                                theme.components.Text.sizes.body1.fontSize,
                              color: theme.palette.text.primary,
                              p: "0.5rem 0.75rem",
                              borderBottom: `1px solid ${theme.palette.secondary.light}`,
                            }}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </Td>
                        );
                      })}
                    </Tr>
                  );
                })}
          </Tbody>
        </Table>
      </TableContainer>
      <Grid
        sx={{
          "&:first-of-type": {
            pl: "2rem !important",
            pr: "1.5rem !important",
          },
          background: theme.palette.secondary.header,
          borderBottom: `1px solid ${theme.palette.secondary.light}`,
          borderTop: `1px solid ${theme.palette.secondary.light}`,
          p: "0.875rem 0.75rem",
          position: "sticky",
          bottom: 0,
          width: `calc(100vw - ${navbar}px - 17px)`,
          transition: "all 0.75s",
        }}
      >
        <TSPagination
          theme={theme}
          pageable={pageable}
          setPaginationProps={setPaginationProps}
          paginationProps={paginationProps}
          paginationStateCallback={setPaginationProps}
          isLoading={isLoading}
        />
      </Grid>
    </>
  );
};

export default TSTable;
