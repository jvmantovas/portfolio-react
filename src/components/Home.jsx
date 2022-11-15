import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full md:ml-8 lg:ml-16">
        <p className="text-pink-600">Olá, meu nome é</p>
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
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-800">
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
