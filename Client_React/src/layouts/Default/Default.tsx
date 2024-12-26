import { Outlet } from "react-router-dom";

const DefaultLayout = (): React.ReactNode => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
