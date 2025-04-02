interface PaginationPropsType {
  total: number;
  defaultCurrent: number;
  defaultPageSize: number;
  pageSizeOptions: number[];
  disabled: boolean;
  onChange?: (page: number, pageSize: number) => void;
}

export type { PaginationPropsType };
