import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#081425]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full md:ml-8 lg:ml-16">
        <p className="text-[#F4B325]">Olá, meu nome é</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          João Mantovaneli
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892B0]">
          Front-End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Sou um desenvolvedor com ênfase em Front-End nas stacks HTML, CSS,
          JavaScript, TypeScript e React. Busco evoluir profissionalmente,
          agregando conhecimento e utilidade para os projetos em que trabalho.
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
              Ver trabalho
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
