import { logo, logoRed } from "../constants";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const navLinkClass = ({ isActive }) => (isActive ? "text-black md:text-black bg-red-dark md:bg-transparent" : "");
  const liClass = " md:border-none border-b-2 border-dashed border-black";

  return (
    <div className="nav max-w-full card-shadow flex text-red-dark justify-between items-center padding-responsive nav-link-text bg-navbar py-1 overflow-hidden sticky top-0 z-200 bg-green-600">
      <div className="w-50 lg:w-60  flex justify-center">
        <img
          src={logoRed}
          alt="logo"
          className="w-full h-auto"
        />
      </div>

      <div className="navlinks font-heading tracking-wider">
        <ul
          className={`fixed top-0 left-0 w-[70%] h-screen md:static md:h-full md:w-full md:bg-transparent md:translate-x-0 md:flex md:gap-[5vw] md:px-0 md:pt-0  bg-offwhite/50 backdrop-blur-xl transform transition-transform duration-200 z-10 ${
            isOpen ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="md:hidden">
            <h1 className="text-black text-xl tracking-wider  italic pl-4 py-6 bg-white">Navigator</h1>
          </div>

          <li className={liClass} onClick={() => setIsOpen(true)}>
            <NavLink to="/" className={({ isActive }) => ` py-4 pl-5 block w-full ${navLinkClass({ isActive })}`}>
              Home
            </NavLink>
          </li>
          <li className={liClass} onClick={() => setIsOpen(true)}>
            <NavLink to="/store" className={({ isActive }) => `py-4 pl-5  block w-full ${navLinkClass({ isActive })}`}>
              Stores
            </NavLink>
          </li>
          <li className={liClass} onClick={() => setIsOpen(true)}>
            <NavLink to="/menu" className={({ isActive }) => `py-4 pl-5 block w-full ${navLinkClass({ isActive })}`}>
              Menu
            </NavLink>
          </li>
          <li className={liClass} onClick={() => setIsOpen(true)}>
            <NavLink to="/aboutus" className={({ isActive }) => `py-4 pl-5 block w-full ${navLinkClass({ isActive })}`}>
              About Us
            </NavLink>
          </li>
          <li className={liClass} onClick={() => setIsOpen(true)}>
            <NavLink to="/contact" className={({ isActive }) => `py-4 pl-5 block w-full ${navLinkClass({ isActive })}`}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div onClick={toggleMenu} className="hamburger flex items-center md:hidden relative z-12">
        {isOpen ? <Menu size={32} /> : <X size={32} />}
      </div>
    </div>
  );
};

export default Navbar;
