import React from 'react';
import tiktok from 'assets/img/tiktok.png'
import ws from 'assets/img/ws.png'
import gmail from 'assets/img/gmail2.png'
import ig from 'assets/img/ig.png'

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/dentalcenter.ve/profilecard/?igsh=ZDJya21meTRoenB3",
    image: ig,
    alt: "Instagram",
    description: "Síguenos para ver nuestros casos de éxito",
    color: "from-pink-500 to-purple-500",
    bg: "bg-pink-50"
  },
  {
    name: "WhatsApp",
    href: "https://wa.link/oljswz",
    image: ws,
    alt: "WhatsApp",
    description: "Atención inmediata Barquisimeto",
    color: "from-green-400 to-green-600",
    bg: "bg-green-50"
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@dentalcenter.ve?_t=8qTBylFag3q&_r=1",
    image: tiktok,
    alt: "TikTok",
    description: "Aprende tips dentales con nosotros",
    color: "from-slate-700 to-slate-900",
    bg: "bg-slate-100"
  }, 
  {
    name: "Gmail",
    href: "mailto:odontologia.anticanceroso@gmail.com",
    image: gmail,
    alt: "Gmail",
    description: "Contáctanos por correo para consultas",
    color: "from-red-400 to-red-600",
    bg: "bg-red-50"
  }
];

function Redes() {
  return (
    <div className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 sm:text-5xl">
            Conecta con nosotros
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Estamos disponibles en todas las plataformas para brindarte la mejor atención.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group flex items-center p-6 bg-white rounded-3xl shadow-premium ring-1 ring-slate-100 hover:ring-2 hover:ring-primary-500 transition-all duration-300 hover:-translate-y-1 overflow-hidden relative`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${link.color} opacity-10 rounded-bl-full transition-transform duration-500 group-hover:scale-150`}></div>
              
              <div className={`flex items-center justify-center h-20 w-20 rounded-2xl ${link.bg} shadow-inner shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <img src={link.image} alt={link.alt} className="w-10 h-10 object-contain drop-shadow-sm" />
              </div>
              
              <div className="ml-6 z-10">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{link.name}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Redes;