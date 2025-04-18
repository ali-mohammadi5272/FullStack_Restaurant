import logo from "./../../assets/images/Logo Delizioso.png";
import mobileSizeMenu from "./../../assets/images/Home.svg";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CustomButton from "../CustomButton/CustomButton";
import InnerContainer from "../InnerContainer/InnerContainer";
import { NavbarLinkType } from "./navbar.types";
import { NavigateFunction, NavLink, useNavigate } from "react-router-dom";
import { memo, useState } from "react";
import { Drawer, Modal } from "antd";
import { requestWithHeader } from "../../services/axios/axios";
import {
  CookieEnum,
  LocalStorageEnum,
} from "../../utils/helperFuncs/helperFuncs.type";
import { toast } from "react-toastify";
import {
  getCookie,
  isUserLogin,
  removeCookie,
  removeFromLocalStorage,
} from "../../utils/helperFuncs/helperFuncs";

const Navbar = (): React.ReactNode => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
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

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const loginBtnOnClick = () => {
    navigate("/auth/login");
  };
  const logoutBtnOnClick = () => {
    openModal();
  };

  const onOk = async () => {
    await logout();
  };
  const onCancel = () => {
    closeModal();
  };
  const authBtnClickHandler = () => {
    isLogin ? logoutBtnOnClick() : loginBtnOnClick();
  };

  const logout = async (): Promise<void> => {
    try {
      const accessToken = getCookie(CookieEnum.ACCESS_TOKEN);
      if (!accessToken) {
        toast.success("Log out successfully");

        return;
      }

      await requestWithHeader.POST<null, {}>({
        url: "/auth/logout",
        body: {},
        configs: {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      });
    } catch (error) {
    } finally {
      removeCookie(CookieEnum.REFRESH_TOKEN);
      removeCookie(CookieEnum.ACCESS_TOKEN);
      removeFromLocalStorage(LocalStorageEnum.USER);
      setIsLogin(false);
      closeModal();
    }
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
                onClick={openDrawer}
                className="lg:hidden cursor-pointer"
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
      <Drawer onClose={closeDrawer} open={isDrawerOpen}>
        <nav className="h-full flex flex-col justify-between">
          <section className="flex flex-col">
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
          <section>
            <CustomButton
              title={isLogin ? "Log out" : "Log in"}
              onClick={authBtnClickHandler}
              className="bg-secondary w-full"
            />
          </section>
        </nav>
      </Drawer>
    </>
  );
};

export default memo(Navbar);
