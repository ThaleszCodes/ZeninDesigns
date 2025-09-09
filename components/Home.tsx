import React from 'react';

const Home: React.FC = () => {

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 pt-20">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Zenin Designs - <span className="text-purple-400">Elevando sua Presença</span> Digital
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Designs Exclusivos para Projetos Únicos
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Na Zenin Designs, transformamos ideias em identidades visuais impactantes. Seja para sua comunidade online, marca pessoal ou projeto, criamos banners, avatares e emblemas que capturam sua essência e a fazem se destacar.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            type="button"
            onClick={() => handleScrollTo('portfolio')}
            className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition-all duration-300 text-lg transform hover:scale-105"
          >
            Veja Meu Portfólio
          </button>
          <button
            type="button"
            onClick={() => handleScrollTo('contact')}
            className="bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-600 transition-all duration-300 text-lg transform hover:scale-105"
          >
            Faça um Pedido
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;