import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pl-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Olá, sou o João, prazer em conhece-lo. Por favor dê uma conferida
              no meu trabalho
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati deserunt reiciendis ex blanditiis consequuntur possimus
              adipisci voluptatum nihil, aut non quasi ipsum quisquam ullam
              doloribus temporibus, dolorum odio provident minima?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;