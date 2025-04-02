import { Pagination } from "antd";
import { PaginationPropsType } from "./pagination.types";

const PaginationComponent: React.FC<PaginationPropsType> = ({
  total,
  defaultCurrent,
  defaultPageSize,
  pageSizeOptions,
  disabled,
  onChange,
}) => {
  return (
    <div className="pagination-component">
      <Pagination
        onChange={onChange}
        align="center"
        total={total}
        defaultPageSize={defaultPageSize}
        defaultCurrent={defaultCurrent}
        pageSizeOptions={pageSizeOptions}
        disabled={disabled}
      />
    </div>
  );
};
export default PaginationComponent;
