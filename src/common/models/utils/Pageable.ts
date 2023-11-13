export type PageableParam = {
  page: number;
  size: number;
  sort: string;
  [sortType: string]: any;
};

export interface Pageable<T> extends PageableProps {
  content: T[];
}

export interface PageableProps {
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: CustomPageable;
  size: number;
  sort: SortProps;
  totalElements: number;
  totalPages: number;
}

interface CustomPageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: SortProps;
  unpaged: boolean;
}

interface SortProps {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
