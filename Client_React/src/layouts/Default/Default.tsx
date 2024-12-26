import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Container from "../../components/Container/Container";

const DefaultLayout = (): React.ReactNode => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default DefaultLayout;
