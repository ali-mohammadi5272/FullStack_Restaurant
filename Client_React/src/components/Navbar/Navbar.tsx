import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/Logo Delizioso.png";
import mobileSizeMenu from "./../../assets/images/Home.svg";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CustomButton from "../CustomButton/CustomButton";
import Container from "../Container/Container";
import { NavbarLinkType } from "./navbar.types";
import { memo } from "react";

const Navbar = (): React.ReactNode => {
  const links: NavbarLinkType[] = [
    {
      id: 1,
      title: "Home",
      to: "/",
    },
    {
      id: 2,
      title: "Menu",
      to: "/menu",
    },
    {
      id: 3,
      title: "About us",
      to: "/about",
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

  return (
    <nav>
      <Container>
        <div className="flex justify-between items-center px-5">
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
              title="Log in"
              className="bg-secondary px-9 hidden lg:inline-block"
            />
            <img
              className="lg:hidden"
              src={mobileSizeMenu}
              alt="mobileSizeMenu"
            />
          </section>
        </div>
      </Container>
    </nav>
  );
};

export default memo(Navbar);
