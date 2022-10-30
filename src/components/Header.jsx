import { FaRegUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Works from "./sections/Works";
import Contact from "./sections/Contact";
import { useState } from "react";

const headItem =
  "h-20 w-20 flex flex-col items-center justify-center bg-dark-bg rounded-[10px] text-dark-text hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white cursor-pointer transition-all font-medium text-sm";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  const links = document.querySelectorAll("nav ul li a");
  const nav = document.querySelector("nav");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      setIsActive((current) => !current);
    });
  });

  return (
    <>
      <div className="lg:w-[456px] h-[144px] hidden lg:block  p-[30px] ml-auto mb-10  rounded-[16px] bg-primary-bg ">
        <div className="flex justify-between header">
          <NavLink to="/about" className={headItem}>
            <FaRegUser className="mb-1 text-xl" />
            About
          </NavLink>
          <NavLink to="/resume" className={headItem}>
            <CgNotes className="mb-1 text-xl" />
            <p>Resume</p>
          </NavLink>
          <NavLink to="/works" className={headItem}>
            <FiCodesandbox className="mb-1 text-xl" />
            <p>Works</p>
          </NavLink>
          <NavLink to="/contact" className={headItem}>
            <RiContactsBookLine className="mb-1 text-xl" />
            <p>Contact</p>
          </NavLink>
        </div>
      </div>
      <header className="lg:hidden h-20 bg-black flex flex-col justify-center relative">
        <div className="w-full px-4 flex justify-end">
          <div className="burger-menu cursor-pointer" onClick={handleClick}>
            <GiHamburgerMenu className="text-3xl" />
          </div>
        </div>
        <nav className={isActive ? "active" : ""}>
          <ul className="absolute z-[1] w-full bg-[#1d1d1d] left-0 top-20 rounded-b-[20px]">
            <li>
              <NavLink
                to="/about"
                className="flex pl-4 cursor-pointer text-white hover:text-[#FA5252] items-center py-3 gap-2 text-sm font-semibold w-full h-full"
              >
                <FaRegUser className="text-xl" />
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className="flex pl-4 cursor-pointer text-white hover:text-[#FA5252] items-center py-3 gap-2 text-sm font-semibold w-full h-full"
              >
                <CgNotes className="text-xl" />
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/works"
                className="flex pl-4 cursor-pointer text-white hover:text-[#FA5252] items-center py-3 gap-2 text-sm font-semibold w-full h-full"
              >
                <FiCodesandbox className="text-xl" />
                Works
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="flex pl-4 cursor-pointer text-white hover:text-[#FA5252] items-center py-3 gap-2 text-sm font-semibold w-full h-full"
              >
                <RiContactsBookLine className="text-xl" />
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Navigate to="/about" />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/works" element={<Works />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default Header;
