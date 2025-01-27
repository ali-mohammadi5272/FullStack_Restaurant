interface PaginationPropsType {
  total?: number;
  change?: (page: number, pageSize: number) => void;
  current: number;
}

export type { PaginationPropsType };
