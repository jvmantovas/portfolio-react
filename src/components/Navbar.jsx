import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="Logo" style={{ width: "50px" }} />
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Sobre</li>
        <li>Habilidades</li>
        <li>Trabalho</li>
        <li>Contato</li>
      </ul>
      {/*Hamburguer*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">Sobre</li>
        <li className="py-6 text-4xl">Habilidades</li>
        <li className="py-6 text-4xl">Trabalho</li>
        <li className="py-6 text-4xl">Contato</li>
      </ul>
      {/*social icons*/}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
