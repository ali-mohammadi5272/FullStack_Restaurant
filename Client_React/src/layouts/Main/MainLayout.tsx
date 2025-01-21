import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import OuterContainer from "../../components/OuterContainer/OuterContainer";

const MainLayout = (): React.ReactNode => {
  return (
    <>
      <Navbar />
      <OuterContainer>
        <Outlet />
      </OuterContainer>
      <Footer />
    </>
  );
};

export default MainLayout;
