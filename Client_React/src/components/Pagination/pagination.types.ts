interface PaginationPropsType {
  current?: number;
  total?: number;
  onChange?: (page: number, pageSize: number) => void;
}

export type { PaginationPropsType };
