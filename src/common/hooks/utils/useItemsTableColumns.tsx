import { createColumnHelper } from "@tanstack/react-table";

import ItemActionMenu from "../../../manager/components/ItemActionMenu";
import Badge from "../../components/Badge";
import { handleBadgeVariant } from "../../components/Badge/utils";
import { Item } from "../../models/item/Item";

export const useItemsTableColumns = () => {
  const columnHelper = createColumnHelper<Item>();

  return [
    columnHelper.accessor("serialCode", {
      header: "Item",
      cell: (info) => info.getValue(),
      enableColumnFilter: false,
    }),
    columnHelper.accessor("type", {
      header: "Type",
      cell: (info) => info.getValue(),
      enableColumnFilter: false,
    }),
    columnHelper.accessor("qualityState", {
      header: "Quality state",
      cell: (info) => info.getValue(),
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
      enableColumnFilter: false,
    }),
    columnHelper.accessor("owner.fullName", {
      header: "Owner",
      cell: (info) => info.getValue(),
      sortingFn: (rowA, rowB) => {
        const value1 = rowA.original.owner.fullName;
        const value2 = rowB.original.owner.fullName;
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
