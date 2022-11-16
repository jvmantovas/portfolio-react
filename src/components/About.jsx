import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#081425] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full px-8 lg:pl-16">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#F4B325]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pl-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Obrigado pela visita.{" "}
              <p className="text-3xl">
                Fique a vontade para explorar o site e conhecer meu trabalho.
              </p>
            </p>
          </div>
          <div>
            <p>
              Me chamo João Mantovaneli, tenho 26 anos, gosto muito de música,
              café e de me manter informado. Através da tecnologia, busco
              agregar valor, desenvolvendo soluções funcionais que mitiguem
              problemas reais.
            </p>
            <p>
              {" "}
              Minha meta é agregar conhecimento e utilidade para os projetos em
              que trabalho e aprender com eles. Me mantenho sempre disposto a
              aprender coisas novas e me adaptar a mudanças.
              <p>
                Sou movido a desafios, superação de problemas e entrega de
                resultados dia após dia.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
