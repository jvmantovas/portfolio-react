import React from "react";
import Pokedex from "../assets/projects/pokedex.png";
import Quickpay from "../assets/projects/quickpay.png";
import Portfolio from "../assets/projects/web-home.png";
import Calculator from "../assets/projects/calculator-react.png";

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
          {/* project card */}
          <div
            style={{ backgroundImage: `url(${Portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative hover:scale-105 duration-300"
          >
            <div className="absolute w-full h-full bg-fixed rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-[#102747d3] border-2 border-[#F4B325] text-center pt-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                Portfólio
              </span>
              <div className="font-semibold text-sm py-4 px-2">
                <p>
                  Este é o projeto deste portfólio que você está navegando,
                  construido de forma responsiva e acessível. Acessando o código
                  você pode encontrar mais informações.
                  <p className="font-bold text-blue-400">
                    #html #css #tailwind #javascript #react
                  </p>
                </p>
              </div>
              <div className="absolute bottom-3 left-16 text-center max-h-10 flex space-x-4 pt-2">
                <a
                  href="https://joaomantovaneli.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="text-center h-full px-4 rounded-lg bg-[#F4B325] text-gray-700 font-bold text-lg hover:scale-110 duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jvmantovas/portfolio-react"
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
          {/* project card */}
          <div
            style={{ backgroundImage: `url(${Calculator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative hover:scale-105 duration-300"
          >
            <div className="absolute w-full h-full bg-fixed rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-[#102747d3] border-2 border-[#F4B325] text-center pt-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                Calculadora React
              </span>
              <div className="font-semibold text-sm py-4 px-2">
                <p>
                  Este web app de calculadora com visual retrô foi construido
                  com React, utilizando os hooks useState, useEffect e
                  useCallback e estilizada com styled-components.
                  <p className="font-bold text-blue-400">
                    #html #css #javascript #react #styled-components #hooks
                  </p>
                </p>
              </div>
              <div className="absolute bottom-3 left-16 text-center max-h-10 flex space-x-4 pt-2">
                <a
                  href="https://calculatora-react.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="text-center h-full px-4 rounded-lg bg-[#F4B325] text-gray-700 font-bold text-lg hover:scale-110 duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jvmantovas/calculator-react/"
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
          {/* project card */}
          <div
            style={{ backgroundImage: `url(${Pokedex})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative hover:scale-105 duration-300"
          >
            <div className="absolute w-full h-full bg-fixed rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-[#102747d3] border-2 border-[#F4B325] text-center pt-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                PokéDex Web App
              </span>
              <div className="font-semibold text-sm py-4 px-2">
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
              <div className="absolute bottom-3 left-16 text-center max-h-10 flex space-x-4 pt-2">
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
          {/* project card */}
          <div
            style={{ backgroundImage: `url(${Quickpay})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative hover:scale-105 duration-300"
          >
            <div className="absolute w-full h-full bg-fixed rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-[#102747d3] border-2 border-[#F4B325] text-center pt-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                Quickpay CC Validator
              </span>
              <div className=" font-semibold text-sm py-4 px-2">
                <p>
                  O Quickpay é um componente que simula o formulário de
                  preenchimento de cartão de crédito, onde é possível adicionar
                  máscara (Imask regex) aos inputs e atualizar elementos HTML
                  via DOM.
                  <p className="font-bold text-blue-400">
                    #html #css #javascript #node #vite #imask
                  </p>
                </p>
              </div>
              <div className="absolute bottom-3 left-16 text-center max-h-10 flex space-x-4 pt-2">
                <a
                  href="http://quickpay-cc-checker-js.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="text-center h-full px-4 rounded-lg bg-[#F4B325] text-gray-700 font-bold text-lg hover:scale-110 duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jvmantovas/quickpay-cc-checker-js"
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
