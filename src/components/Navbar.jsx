import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo.gif";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#081425] text-gray-300 z-10">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img src={logo} alt="Logo" style={{ width: "180px" }} />
        </Link>
      </div>
      {/* menu */}
      <ul className="hidden md:flex text-[#F4B325]">
        <li className="rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#fdc752] hover:shadow-md hover:shadow-[#040c16]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#fdc752] hover:shadow-md hover:shadow-[#040c16]">
          <Link to="about" smooth={true} duration={500}>
            Sobre
          </Link>
        </li>
        <li className="rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#fdc752] hover:shadow-md hover:shadow-[#040c16]">
          <Link to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li className="rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#fdc752] hover:shadow-md hover:shadow-[#040c16]">
          <Link to="work" smooth={true} duration={500}>
            Trabalho
          </Link>
        </li>
        <li className="rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#fdc752] hover:shadow-md hover:shadow-[#040c16]">
          <Link to="contact" smooth={true} duration={500}>
            Contato
          </Link>
        </li>
      </ul>
      {/*Hamburguer*/}
      <div
        onClick={handleClick}
        className="md:hidden z-10 scale-150 text-[#F4B325]"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#081425] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:scale-110 duration-300">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:scale-110 duration-300">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Sobre
          </Link>
        </li>
        <li className="py-6 text-4xl hover:scale-110 duration-300">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li className="py-6 text-4xl hover:scale-110 duration-300">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Trabalho
          </Link>
        </li>
        <li className="py-6 text-4xl hover:scale-110 duration-300">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contato
          </Link>
        </li>
        <li className="py-6 text-4xl hover:scale-110 duration-300">
          <a
            href="https://docs.google.com/document/d/1Julge9Yxbr5_EL3ellBDy5cTcgbphF94/edit?usp=sharing&ouid=113305056471814256385&rtpof=true&sd=true"
            rel="noreferrer"
            target="_blank"
          >
            Curriculum
          </a>
        </li>
      </ul>
      {/*social icons*/}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/joaomantovaneli/"
              rel="noreferrer"
              target="_blank"
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
              href="https://github.com/jvmantovas"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
              <FaGithub className="mr-[-10px] lg:mr-0 duration-300" size={30} />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EA4335]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:vmsjoao@gmail.com"
            >
              E-Mail
              <HiOutlineMail
                className="mr-[-10px] lg:mr-0 duration-300"
                size={30}
              />
            </a>
          </li>
          <li className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://docs.google.com/document/d/1Julge9Yxbr5_EL3ellBDy5cTcgbphF94/edit?usp=sharing&ouid=113305056471814256385&rtpof=true&sd=true"
              rel="noreferrer"
              target="_blank"
            >
              Curriculum
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
