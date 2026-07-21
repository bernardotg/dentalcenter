import {connect} from 'react-redux'
import {NavLink,Link} from 'react-router-dom'
import logo_lara from 'assets/img/lara.jpg'
import logo_dental from 'assets/img/logodental.png'

import tiktok from 'assets/img/tiktok.png'
import ws from 'assets/img/ws.png'
import gmail from 'assets/img/gmail2.png'
import ig from 'assets/img/ig.png'

const navigation = {
  solutions: [
    { name: 'Dental Center', href: '/' },
    { name: '', href: '#' },
    { name: '', href: '#' },
    { name: '', href: '#' },
  ],
  support: [
    { name: 'Instagram', href: 'https://www.instagram.com/dentalcenter.ve/profilecard/?igsh=ZDJya21meTRoenB3' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@dentalcenter.ve?_t=8qTBylFag3q&_r=1' },
    { name: '', href: '#' },
    
  ],
  company: [
    
    
    { name: 'WhatsApp Barquisimeto', target:"_BLANK", href: 'https://wa.link/oljswz'},
    { name: 'WhatsApp Valencia', href: 'https://wa.link/xyvzpr' },
    { name: 'Gmail', href: 'mailto:odontologia.anticanceroso@gmail.com' },
    
    
  ],
  legal: [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/Servicios' },
    { name: 'Contacto', href: '/Contacto' },
    { name: 'Ubicaciones', href: '/Barquisimeto' },
    
    
  ],
  social: [
    {
      name: 'Ws Bqto',
      href: 'https://wa.link/oljswz',
      icon: (props) => <img src={ws} alt="Instagram Logo" {...props} style={{ width: '24px', height: '24px' }} />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/dentalcenter.ve/profilecard/?igsh=ZDJya21meTRoenB3',
      icon: (props) => <img src={ig} alt="Instagram Logo" {...props} style={{ width: '24px', height: '24px' }} />,
    },
    {
      name: 'Gmail',
      href: 'mailto:odontologia.anticanceroso@gmail.com',
      icon: (props) => <img src={gmail} alt="Instagram Logo" {...props} style={{ width: '24px', height: '24px' }} />,
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@dentalcenter.ve?_t=8qTBylFag3q&_r=1',
      icon: (props) => <img src={tiktok} alt="Instagram Logo" {...props} style={{ width: '24px', height: '24px' }} />,
    },
    {
      name: 'Ws Valencia',
      href: 'https://wa.link/xyvzpr',
      icon: (props) => <img src={ws} alt="Instagram Logo" {...props} style={{ width: '24px', height: '24px' }} />,
    },
  ],
}

function Footer(){
    return(
      <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
            <img src={logo_dental} width={190} height={90} className=""/>
              <p className="text-base text-gray-500">
                Compartiendo Sonrisas.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <NavLink key={item.name} to={item.href} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-gray-900">Nosotros</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <NavLink to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </NavLink>
                      </li> 
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-gray-900">Siguenos</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <NavLink to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-gray-900">Contáctanos</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <NavLink to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-gray-900">Menú</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <NavLink to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">&copy; 2024 Dental Center, Inc. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

    )
  }
const mapStateToProps=state=>({

})

export default connect(mapStateToProps, {

}) (Footer)