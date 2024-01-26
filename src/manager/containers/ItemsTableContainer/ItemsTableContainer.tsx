import { FC, useEffect } from "react";

import { useSearch } from "@tanstack/react-router";

import TSTable from "../../../common/components/TSTable/TSTable";
import { useGetItems } from "../../../common/hooks/queries/items/useGetItems";
import { useItemsTableColumns } from "../../../common/hooks/utils/useItemsTableColumns";
import { Item } from "../../../common/models/item/Item";
import { SearchParams } from "../../../common/models/SearchParams";
import { ITEMSRoute } from "../../../common/routes/common/items/itemsRoute";

interface ItemsTableContainerProps {
  tableHeight: string;
  includeDiscarded?: boolean;
}

const ItemsTableContainer: FC<ItemsTableContainerProps> = ({
  tableHeight,
  includeDiscarded,
}) => {
  const columns = useItemsTableColumns();

  const search: SearchParams = useSearch({ from: `${ITEMSRoute.id}/` });

  const {
    data: itemsData,
    isLoading: isLoadingItems,
    refetch,
  } = useGetItems(
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
          includeDiscarded,
        }
      : {},
  );

  useEffect(() => {
    refetch();
  }, [search, includeDiscarded]);

  return (
    <TSTable<Item>
      route={`${ITEMSRoute.id}/`}
      columns={columns}
      data={itemsData?.content ?? []}
      isLoading={isLoadingItems}
      pageable={itemsData}
      tableHeight={tableHeight}
    />
  );
};

export default ItemsTableContainer;
