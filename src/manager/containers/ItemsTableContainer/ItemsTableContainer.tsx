import { FC } from "react";

import { useSearch } from "@tanstack/react-router";

import TSTable from "../../../common/components/TSTable/TSTable";
import { useGetItems } from "../../../common/hooks/queries/items/useGetItems";
import { useItemsTableColumns } from "../../../common/hooks/utils/useItemsTableColumns";
import { Item } from "../../../common/models/item/Item";
import { SearchParams } from "../../../common/models/SearchParams";
import { AllITEMSRoute } from "../../../common/routes/common/items/allItems/allItemsRoute";
import { createQueryParams } from "../../../common/utils/queryParams";

interface ItemsTableContainerProps {
  tableHeight: string;
  includeDiscarded: boolean;
}

const ItemsTableContainer: FC<ItemsTableContainerProps> = ({
  tableHeight,
  includeDiscarded,
}) => {
  const columns = useItemsTableColumns();

  const search: SearchParams = useSearch({ from: AllITEMSRoute.id });

  const { data: itemsData, isLoading: isLoadingItems } = useGetItems({
    ...createQueryParams(search, {
      includeDiscarded,
    }),
  });

  return (
    <TSTable<Item>
      route={AllITEMSRoute.id}
      columns={columns}
      data={itemsData?.content ?? []}
      isLoading={isLoadingItems}
      pageable={itemsData}
      tableHeight={tableHeight}
    />
  );
};

export default ItemsTableContainer;
