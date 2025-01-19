import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";

const MainLayout = (): React.ReactNode => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
