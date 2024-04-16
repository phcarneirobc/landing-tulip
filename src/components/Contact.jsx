import React from 'react';

const Contact = () => {


  const handleClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=5585981301218&text=Ol%C3%A1,%20vim%20do%20instagram%20e%20gostaria%20de%20realizar%20um%20or%C3%A7amento`, '_blank');
  };

  return (
    <section className="mt-10 bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Entre em contato conosco pelo Whatsapp</h2>
        <div className="flex justify-center">
          <button onClick={handleClick} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Enviar mensagem
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;