interface PaginationPropsType {
  total: number;
  defaultCurrent: number;
  defaultPageSize: number;
  pageSizeOptions: number[];
  onChange?: (page: number, pageSize: number) => void;
}

export type { PaginationPropsType };
