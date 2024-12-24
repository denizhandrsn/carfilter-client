import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid rounded className="bg-cyan-600">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibol text-white">
          CAR FILTER
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" className="text-white">
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/about" className="text-white">
          About
        </NavbarLink>
        <NavbarLink as={Link} to="/contact" className="text-white">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
