import { Link } from 'react-router-dom';
import logodental from 'assets/img/logodental.png';
import ig from 'assets/img/ig.png';
import tiktok from 'assets/img/tiktok.png';
import gmail2 from 'assets/img/gmail2.png';
import ws from 'assets/img/ws.png';

const navigation = {
  main: [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sedes', href: '#sedes' },
    { name: 'Casos', href: '#casos' },
    { name: 'Contacto', href: '#contacto' },
  ],
  social: [
    { name: 'WhatsApp', href: 'https://wa.link/oljswz', icon: ws },
    { name: 'Instagram', href: 'https://www.instagram.com/dentalcenter.ve/profilecard/?igsh=ZDJya21meTRoenB3', icon: ig },
    { name: 'TikTok', href: 'https://www.tiktok.com/@dentalcenter.ve?_t=8qTBylFag3q&_r=1', icon: tiktok },
    { name: 'Correo', href: 'mailto:odontologia.anticanceroso@gmail.com', icon: gmail2 },
  ],
};

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white p-2">
              <img src={logodental} alt="Logo" className="w-10 h-10 object-contain" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-white">
              Dental<span className="text-primary-500">Center</span>
            </span>
          </div>
        </div>
        
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-slate-400 hover:text-white transition-colors">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        
        <div className="mt-16 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-transform hover:scale-110 duration-300">
              <span className="sr-only">{item.name}</span>
              <img src={item.icon} alt={item.name} className="h-7 w-7 opacity-70 hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
        
        <p className="mt-10 text-center text-xs leading-5 text-slate-500">
          &copy; {new Date().getFullYear()} Dental Center. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;