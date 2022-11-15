import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="Logo" style={{ width: "100px" }} />
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Trabalho
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contato
          </Link>
        </li>
      </ul>
      {/*Hamburguer*/}
      <div onClick={handleClick} className="md:hidden z-10 scale-150">
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
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Sobre
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Trabalho
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contato
          </Link>
        </li>
      </ul>
      {/*social icons*/}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin{" "}
              <FaLinkedin
                className="mr-[-10px] lg:mr-0 duration-300"
                size={30}
              />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              GitHub{" "}
              <FaGithub className="mr-[-10px] lg:mr-0 duration-300" size={30} />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EA4335]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              E-Mail{" "}
              <HiOutlineMail
                className="mr-[-10px] lg:mr-0 duration-300"
                size={30}
              />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Curriculum{" "}
              <BsFillPersonLinesFill
                className="mr-[-10px] lg:mr-0 duration-300"
                size={30}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
