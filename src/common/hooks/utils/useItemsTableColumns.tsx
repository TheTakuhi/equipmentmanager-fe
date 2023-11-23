import { createColumnHelper } from "@tanstack/react-table";

import ItemActionMenu from "../../../manager/components/ItemActionMenu";
import Badge from "../../components/Badge";
import { Item } from "../../models/item/Item";
import { ItemState } from "../../models/item/ItemState";

export const useItemsTableColumns = () => {
  const columnHelper = createColumnHelper<Item>();
  const handleBadgeVariant = (state: ItemState) => {
    switch (state) {
      case ItemState.BORROWED:
        return "info";
      case ItemState.AVAILABLE:
        return "success";
      case ItemState.DISCARDED:
        return "danger";
      default:
        return "info";
    }
  };

  return [
    columnHelper.accessor("serialCode", {
      header: "Item",
      cell: (info) => info.getValue(),
      enableColumnFilter: false,
    }),
    columnHelper.accessor("type", {
      header: "Type",
      cell: (info) => info.getValue(),
      sortingFn: (rowA, rowB) => {
        const value1 = rowA.original.type;
        const value2 = rowB.original.type;
        return value1.localeCompare(value2, "cs");
      },
      enableColumnFilter: false,
    }),
    columnHelper.accessor("qualityState", {
      header: "Quality state",
      cell: (info) => info.getValue(),
      sortingFn: (rowA, rowB) => {
        const value1 = rowA.original.qualityState;
        const value2 = rowB.original.qualityState;
        return value1.localeCompare(value2, "cs");
      },
      enableColumnFilter: false,
    }),
    columnHelper.accessor("state", {
      header: "State",
      cell: (info) => (
        <Badge
          variant={handleBadgeVariant(info.getValue())}
          label={info.getValue()}
        />
      ),
      sortingFn: (rowA, rowB) => {
        const value1 = rowA.original.state;
        const value2 = rowB.original.state;
        return value1.localeCompare(value2, "cs");
      },
      enableColumnFilter: false,
    }),
    columnHelper.accessor((row) => row, {
      id: "actions",
      header: "",
      cell: (info) => <ItemActionMenu item={info.row.original} />,
      enableColumnFilter: false,
      enableSorting: false,
    }),
  ];
};
