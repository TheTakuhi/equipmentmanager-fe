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
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  requestedPageable: RequestedPageable;
  size: number;
  totalElements: number;
  totalPages: number;
}

interface RequestedPageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: Sort;
  unpaged: boolean;
}

interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
