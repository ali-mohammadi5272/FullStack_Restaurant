import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { requestWithHeader } from "../../services/axios/axios";
import { UserType } from "../../entities/user.entity";
import { getCookie } from "../../utils/helperFuncs/helperFuncs";
import { CookieEnum } from "../../utils/helperFuncs/helperFuncs.type";

const MainLayout = (): React.ReactNode => {
  const { setUser } = useContext(AuthContext);

  const getMe = async () => {
    const response = await requestWithHeader.GET<UserType>({
      url: "/auth/me",
    });

    setUser(response.data.data);
  };

  useEffect(() => {
    const isLogin = getCookie(CookieEnum.REFRESH_TOKEN);
    if (isLogin) {
      getMe();
    }
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
