import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="Logo" style={{ width: "50px" }} />
      </div>
      <div>{/* menu */}</div>
      <div>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Habilidades</li>
          <li>Trabalho</li>
          <li>Contato</li>
        </ul>
      </div>

      {/*Hamburguer*/}
      <div>
        <FaBars />
      </div>
      {/*mobile menu*/}
      <div></div>
      {/*social icons*/}
      <div></div>
    </div>
  );
};

export default Navbar;
