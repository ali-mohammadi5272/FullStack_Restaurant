import { Pagination } from "antd";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import { PaginationPropsType } from "./pagination.types";
import "./pagination.scss";

const PaginationComponent: React.FC<PaginationPropsType> = ({
  current,
  total,
  onChange,
}) => {
  return (
    <div className="pagination-component">
      <Pagination
        onChange={onChange}
        align="center"
        current={current}
        total={total}
        prevIcon={<FontAwesomeIcon icon="faAngleLeft" />}
        nextIcon={<FontAwesomeIcon icon="faAngleRight" />}
      />
    </div>
  );
};
export default PaginationComponent;
