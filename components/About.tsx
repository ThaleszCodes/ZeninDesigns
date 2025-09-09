import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="mb-8 lg:mb-0 text-center">
            <img 
              src="https://i.imgur.com/fGzGshq.png" 
              alt="Logo Zenin Designs" 
              className="w-64 h-64 mx-auto rounded-full object-cover border-4 border-purple-500"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Sobre a Zenin Designs</h2>
            <p className="text-gray-400 text-lg mb-6">
              A Zenin Designs nasceu da minha paixão por design e pela cultura vibrante das comunidades online. Com anos de experiência em design digital, meu foco é criar peças que não sejam apenas bonitas, mas que também fortaleçam a identidade e o engajamento da sua comunidade.
            </p>
            <p className="text-gray-400 text-lg">
              Minha abordagem é colaborativa e focada no cliente. Eu mergulho na visão de cada comunidade para desenvolver uma estética única que ressoa com seus membros. Acredito que um bom design é a chave para transformar um espaço comum em um espaço verdadeiramente memorável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;