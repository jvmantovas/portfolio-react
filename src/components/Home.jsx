import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#081425]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full md:ml-8 lg:ml-16">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          João Mantovaneli
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#979aa3]">
          Desenvolvedor Front-End
        </h2>
        <p className="text-[#b4b4b4] py-4 max-w-[700px]">
          Trabalho no desenvolvimento front-end com ênfase nas stacks
          <span className="text-[#F4B325]"> HTML</span>,
          <span className="text-[#F4B325]"> CSS</span>,
          <span className="text-[#F4B325]"> JavaScript</span>,
          <span className="text-[#F4B325]"> TypeScript</span> e
          <span className="text-[#F4B325]"> React</span>.<br /> Adoro aprender
          coisas novas e não nego um desafio.
        </p>
        <div>
          <a
            href="https://docs.google.com/document/d/1Julge9Yxbr5_EL3ellBDy5cTcgbphF94/edit?usp=sharing&ouid=113305056471814256385&rtpof=true&sd=true"
            rel="noreferrer"
            target="_blank"
          >
            <button className="md:hidden text-white group w-[170px] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F4B325] hover:border-[#e09a03]">
              Curriculum
              <span className="group-hover:animate-bounce">
                <HiOutlineDocumentArrowDown className="ml-4" />
              </span>
            </button>
          </a>
        </div>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F4B325] hover:border-[#e09a03]">
            <Link
              className="flex items-center"
              to="work"
              smooth={true}
              duration={2000}
            >
              Ver trabalhos
              <span className="group-hover:rotate-90 duration-200">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
