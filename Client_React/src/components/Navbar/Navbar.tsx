import logo from "./../../assets/images/Logo Delizioso.png";
import mobileSizeMenu from "./../../assets/images/Home.svg";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CustomButton from "../CustomButton/CustomButton";
import InnerContainer from "../InnerContainer/InnerContainer";
import { NavbarLinkType } from "./navbar.types";
import { NavigateFunction, NavLink, useNavigate } from "react-router-dom";
import { memo, useState } from "react";
import {
  getCookie,
  isUserLogin,
  removeCookie,
} from "../../utils/helperFuncs/helperFuncs";
import { Modal } from "antd";
import { request } from "../../services/axios/axios";
import { CookieEnum } from "../../utils/helperFuncs/helperFuncs.type";

const Navbar = (): React.ReactNode => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(isUserLogin());
  const navigate: NavigateFunction = useNavigate();
  const links: NavbarLinkType[] = [
    {
      id: 1,
      title: "Home",
      to: "/",
    },
    {
      id: 2,
      title: "Menu",
      to: "/menus",
    },
    {
      id: 3,
      title: "About us",
      to: "/about-us",
    },
    {
      id: 4,
      title: "Order Online",
      to: "/order-online",
    },
    {
      id: 5,
      title: "Reservation",
      to: "/reservation",
    },
    {
      id: 6,
      title: "Contact us",
      to: "/contact-us",
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const loginBtnOnClick = () => {
    navigate("/auth/login");
  };

  const logoutBtnOnClick = () => {
    openModal();
  };

  const onOk = async () => {
    const token = getCookie(CookieEnum.ACCESS_TOKEN);
    //TODO if(!token){
    //
    // }
    try {
      await request.POST<unknown, null>({
        url: "/auth/logout",
        body: null,
      });
    } catch (error) {
    } finally {
      removeCookie(CookieEnum.REFRESH_TOKEN);
      removeCookie(CookieEnum.ACCESS_TOKEN);
      setIsLogin(false);
      closeModal();
    }
  };
  const onCancel = () => {
    closeModal();
  };

  const authBtnClickHandler = () => {
    isLogin ? logoutBtnOnClick() : loginBtnOnClick();
  };

  return (
    <>
      <nav>
        <InnerContainer>
          <div className="flex justify-between items-center">
            <section className="w-[30%]">
              <img src={logo} alt="logo" />
            </section>
            <section className="hidden lg:flex justify-between w-[65%]">
              {links.map((link) => (
                <NavLink
                  key={link.id}
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  to={link.to}
                >
                  {link.title}
                </NavLink>
              ))}
            </section>
            <section className="flex items-center justify-end w-[35%]">
              <ShoppingCart />
              <CustomButton
                title={isLogin ? "Log out" : "Log in"}
                onClick={authBtnClickHandler}
                className="bg-secondary px-9 hidden lg:inline-block"
              />
              <img
                className="lg:hidden"
                src={mobileSizeMenu}
                alt="mobileSizeMenu"
              />
            </section>
          </div>
        </InnerContainer>
      </nav>
      <Modal
        open={isModalOpen}
        title="Confirmation"
        onOk={onOk}
        onCancel={onCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        Log out ?
      </Modal>
    </>
  );
};

export default memo(Navbar);
