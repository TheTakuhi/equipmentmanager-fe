import { SearchBarParams } from "../components/SearchBar/SearchBar";
import { PaginationSearchParams } from "../components/TSTable/Pagination/TSPagination";
import { TableSearchParams } from "../components/TSTable/TSTable";

export type SearchParams = {
  search: SearchBarParams;
  pagination: PaginationSearchParams;
  table: TableSearchParams;
};
