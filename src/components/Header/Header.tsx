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
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" className="text-white">
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#" className="text-white">
          About
        </NavbarLink>
        <NavbarLink href="#" className="text-white">
          Services
        </NavbarLink>

        <NavbarLink href="#" className="text-white">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
