import React from "react";
import Pokedex from "../assets/projects/pokedex.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-fit md:h-full lg:pl-16 pt-20 px-8 text-gray-300 bg-[#081425]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#F4B325]">
            Trabalhos
          </p>
          {/*eslint-disable-next-line react/jsx-no-comment-textnodes*/}
          <p className="py-6">
            // Confira alguns projetos recentes em que trabalhei
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Pokedex})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative hover:scale-105 duration-300"
          >
            <div className="absolute w-full h-full bg-fixed rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-[#102747d3] border-2 border-[#F4B325] text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                PokéDex Web App
              </span>
              <div className="max-h-[170px] font-semibold">
                <p>
                  A PokéDex é um aplicativo web que consome a{" "}
                  <a
                    href="https://pokeapi.co/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-blue-500"
                  >
                    pokeAPI
                  </a>{" "}
                  para gerar os cards com os pokemons. Neste projeto utilizei o
                  método fetch API do JavaScript para buscar os dados e gerar os
                  cards HTML dinamicamente.
                  <p className="font-bold text-blue-400">
                    #html #css #bootstrap #javascript
                  </p>
                </p>
              </div>
              <div className="text-center max-h-10 flex space-x-4 justify-center pt-2">
                <a
                  href="https://pokedex-js-jvmantovas.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="text-center h-full px-4 rounded-lg bg-[#F4B325] text-gray-700 font-bold text-lg hover:scale-110 duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jvmantovas/pokedex-js"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="text-center h-full px-4 rounded-lg bg-[#F4B325] text-gray-700 font-bold text-lg hover:scale-110 duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Pokedex})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative hover:scale-105 duration-300"
          >
            <div className="absolute w-full h-full bg-fixed rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-[#102747d3] border-2 border-[#F4B325] text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                PokéDex Web App
              </span>
              <div className="max-h-[170px] font-semibold">
                <p>
                  A PokéDex é um aplicativo web que consome a{" "}
                  <a
                    href="https://pokeapi.co/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-blue-500"
                  >
                    pokeAPI
                  </a>{" "}
                  para gerar os cards com os pokemons. Neste projeto utilizei o
                  método fetch API do JavaScript para buscar os dados e gerar os
                  cards HTML dinamicamente.
                  <p className="font-bold text-blue-400">
                    #html #css #bootstrap #javascript
                  </p>
                </p>
              </div>
              <div className="text-center max-h-10 flex space-x-4 justify-center pt-2">
                <a
                  href="https://pokedex-js-jvmantovas.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="text-center h-full px-4 rounded-lg bg-[#F4B325] text-gray-700 font-bold text-lg hover:scale-110 duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jvmantovas/pokedex-js"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="text-center h-full px-4 rounded-lg bg-[#F4B325] text-gray-700 font-bold text-lg hover:scale-110 duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Pokedex})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative hover:scale-105 duration-300"
          >
            <div className="absolute w-full h-full bg-fixed rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-[#102747d3] border-2 border-[#F4B325] text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                PokéDex Web App
              </span>
              <div className="max-h-[170px] font-semibold">
                <p>
                  A PokéDex é um aplicativo web que consome a{" "}
                  <a
                    href="https://pokeapi.co/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-blue-500"
                  >
                    pokeAPI
                  </a>{" "}
                  para gerar os cards com os pokemons. Neste projeto utilizei o
                  método fetch API do JavaScript para buscar os dados e gerar os
                  cards HTML dinamicamente.
                  <p className="font-bold text-blue-400">
                    #html #css #bootstrap #javascript
                  </p>
                </p>
              </div>
              <div className="text-center max-h-10 flex space-x-4 justify-center pt-2">
                <a
                  href="https://pokedex-js-jvmantovas.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="text-center h-full px-4 rounded-lg bg-[#F4B325] text-gray-700 font-bold text-lg hover:scale-110 duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jvmantovas/pokedex-js"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="text-center h-full px-4 rounded-lg bg-[#F4B325] text-gray-700 font-bold text-lg hover:scale-110 duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
