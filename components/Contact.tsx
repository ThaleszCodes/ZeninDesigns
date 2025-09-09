import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const recipientEmail = 'thalesdev01@gmail.com';
  const subject = `Contato do Portfólio - ${name}`;
  const body = `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`;
  
  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Entre em Contato</h2>
          <p className="mt-4 text-lg text-gray-400">Vamos criar algo incrível juntos. Faça um pedido ou tire suas dúvidas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Nome</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required 
                className="block w-full px-4 py-3 rounded-md bg-gray-800 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" 
                placeholder="Seu Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                className="block w-full px-4 py-3 rounded-md bg-gray-800 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" 
                placeholder="Seu Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Mensagem</label>
              <textarea 
                name="message" 
                id="message" 
                rows={5} 
                required 
                className="block w-full px-4 py-3 rounded-md bg-gray-800 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" 
                placeholder="Sua Mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div>
              <a 
                href={mailtoLink} 
                className="w-full block text-center bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition-all duration-300 text-lg"
              >
                Enviar Mensagem
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:items-start">
             <h3 className="text-2xl font-bold text-white mb-4">Ou me encontre aqui:</h3>
             <p className="text-gray-400 mb-6 text-center md:text-left">A maneira mais rápida de fazer um pedido é através do meu sistema de tickets no Discord.</p>
             <a href="https://discord.gg/F4wxDhb4x6" target="_blank" rel="noopener noreferrer" className="bg-indigo-500 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-600 transition-all duration-300 text-lg mb-8 inline-flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.21,2.9,3.79,2.9A2.43,2.43,0,0,0,1.5,5.13V18.37A2.43,2.43,0,0,0,3.79,20.6H17.43l3.87,2.83a.47.47,0,0,0,.7-.4V5.13A2.43,2.43,0,0,0,20.21,2.9ZM8.2,13.62a1.71,1.71,0,1,1,1.71-1.71A1.71,1.71,0,0,1,8.2,13.62Zm7.6,0a1.71,1.71,0,1,1,1.71-1.71A1.71,1.71,0,0,1,15.8,13.62Z"></path></svg>
                Abrir um Ticket no Discord
             </a>
             <div className="flex space-x-6">
                <a href="https://www.instagram.com/thalesdsg2k25?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 4.11c.636-.247 1.363-.416 2.427-.465C9.791 2.013 10.145 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd"></path></svg>
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;