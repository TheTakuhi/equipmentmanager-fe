import { FC, useEffect, useState } from "react";

import TSTable, {
  TableStateProps,
} from "../../../common/components/TSTable/TSTable";
import { TableSearchQuery } from "../../../common/forms/useTableSearchForm/useTableSearchForm";
import { useGetItems } from "../../../common/hooks/queries/items/useGetItems";
import { useItemsTableColumns } from "../../../common/hooks/utils/useItemsTableColumns";

interface ItemsTableContainerProps {
  searchQuery?: TableSearchQuery;
  tableHeight: string;
}

const ItemsTableContainer: FC<ItemsTableContainerProps> = ({
  searchQuery,
  tableHeight,
}) => {
  const columns = useItemsTableColumns();
  const [tableStateProps, setTableStateProps] = useState<TableStateProps>({
    pageIndex: 0,
    pageSize: 15,
    sort: "",
    sortDirection: "",
    columnFilters: [],
  });

  const {
    data: itemsData,
    isLoading: isLoadingItems,
    refetch,
  } = useGetItems({
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
      data={itemsData?.content ?? []}
      isLoading={isLoadingItems}
      pageable={itemsData}
      tableStateCallback={(info) => setTableStateProps(info)}
      tableHeight={tableHeight}
    />
  );
};

export default ItemsTableContainer;
