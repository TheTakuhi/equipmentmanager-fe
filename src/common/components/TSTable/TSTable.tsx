import { useEffect, useState } from "react";

import {
  Box,
  Grid,
  SkeletonText,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";
import { ColumnFilter, flexRender } from "@tanstack/react-table";
import { ChevronDown, ChevronUp } from "react-feather";

import TSFilter from "./Filter/TSFilter";
import TSPagination from "./Pagination";
import { PaginationStateProps } from "./Pagination/TSPagination";
import { tableHeadStyle, tableRowStyle, tableStyle } from "./tableStyles";
import { useTanstackTable } from "./useTanstackTable";
import { Pageable } from "../../models/utils/Pageable";
import { theme } from "../../theme";

export type TableSearchParams = {
  sort: string;
  columnFilters: ColumnFilter[];
};

type TSTableProps<T extends object> = {
  route: string;
  data: T[];
  columns: any[];
  isLoading?: boolean;
  pageable?: Pageable<Omit<T, "content">>;
  filterData?: any;
  tableHeight: string;
  hidePagination?: true;
};

const TSTable = <T extends object>({
  route,
  data,
  columns,
  isLoading,
  pageable,
  filterData,
  tableHeight,
  hidePagination,
}: TSTableProps<T>) => {
  const navigate = useNavigate({ from: route });

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
  }, [columnFilters]);

  useEffect(() => {
    if (
      pageable &&
      pageable.totalPages !== paginationProps.pageIndex + 1 &&
      pageable.size < paginationProps.pageSize
    ) {
      setPaginationProps({ pageIndex: 0, pageSize: paginationProps.pageSize });
    }
  }, [data]);

  useEffect(() => {
    const { sorting } = table.getState();
    const sortName = sorting.length !== 0 ? sorting[0].id : undefined;
    const sortDirection =
      sorting.length !== 0 ? (sorting[0].desc ? "desc" : "asc") : undefined;

    navigate({
      search: (prev) => ({
        ...prev,
        table: {
          sort:
            sortName && sortDirection
              ? `${sortName},${sortDirection}`
              : undefined,
          columnFilters,
        },
      }),
    });
  }, [paginationProps, table.getState().sorting]);

  return (
    <Box
      sx={{
        overflowX: "hidden",
        maxHeight: tableHeight,
      }}
    >
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
                                textTransform: "none",
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
                              key={header.column.id}
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
                          <SkeletonText
                            noOfLines={1}
                            spacing="2"
                            skeletonHeight="3"
                            px="1.5rem"
                            startColor="#222222"
                            endColor="#444444"
                            fontSize={
                              theme.components.Text.sizes.body2.fontSize
                            }
                          />
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
      {hidePagination ? null : (
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
            transition: "all 0.75s",
          }}
        >
          <TSPagination
            route={route}
            pageable={pageable}
            isLoading={isLoading}
          />
        </Grid>
      )}
    </Box>
  );
};

export default TSTable;
