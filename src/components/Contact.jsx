import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#081425] flex justify-center items-center p-4 px-8"
    >
      <form
        method="POST"
        action="https://getform.io/f/99b41737-dd76-4ff3-8e20-f3359c670f55"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#F4B325] text-gray-300">
            Contato
          </p>
          {/*eslint-disable-next-line react/jsx-no-comment-textnodes*/}
          <p className="text-gray-300 py-4">
            // Envie o formulário abaixo ou mande um e-mail - vmsjoao@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Nome"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="E-Mail"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Mensagem"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#F4B325] hover:border-[#e09a03] px-4 py-3 my-8 mx-auto flex items-center">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
