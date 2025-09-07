import {logo} from "../constants"
import { NavLink } from "react-router-dom";
import { Menu,X} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(true);

  // helper functions
  const toggleMenu = () =>{
    setIsOpen(isOpen => !isOpen)
  }
  const navLinkClass = ({ isActive }) =>
  isActive ? (`text-yellow-light`): "";

  return(
    <>
      <div className=" nav max-w-full bg-red-dark flex justify-between items-center padding-responsive nav-link-text font-subheading font-extrabold text-white py-1 relative">

        {/* logo image */}
        <div className="logo-container w-22 md:w-28 h-auto">
          <img src={logo} alt="page-logo" className="logo-image w-full" />
        </div>

          {/* nav links */}
          <div className="navlinks">

            <ul className={`md:gap-[5vw] bg-black/90 backdrop-blur-xl absolute md:static top-0 left-0 w-[70%] px-4 md:px-0 h-screen ${isOpen ? "-translate-x-full" : "translate-x-0"} pt-13 md:pt-0 duration-200 md:h-full md:w-full md:bg-transparent md:translate-x-0 md:flex`}>

              <li className="border-b-2  border-dashed md:border-none py-3"><NavLink to="/" className={navLinkClass}onClick={()=>setIsOpen(true)}>Home</NavLink></li>
              <li  className="border-b-2 md:border-none border-dashed py-3"><NavLink to="/store" className={navLinkClass} onClick={()=>setIsOpen(true)}>Stores</NavLink></li>
              <li  className="border-b-2 md:border-none border-dashed py-3"><NavLink to="/menu" className={navLinkClass} onClick={()=>setIsOpen(true)}>Menu</NavLink></li>
              <li  className="border-b-2 md:border-none border-dashed py-3"><NavLink to="/aboutus" className={navLinkClass} onClick={()=>setIsOpen(true)}>About Us</NavLink></li>
              <li  className="border-b-2 md:border-none border-dashed py-3"><NavLink to="/contact" className={navLinkClass} onClick={()=>setIsOpen(true)}>Contact</NavLink></li>
            </ul>
          </div>

          <div onClick={toggleMenu} className="hamburger flex items-center md:hidden">
            {isOpen ?<Menu size={32}/>:<X/>}
          </div>

      </div>
    </>
  )
};

export default Navbar;
