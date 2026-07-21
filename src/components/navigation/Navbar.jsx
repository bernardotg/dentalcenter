import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'
import dentalcenter_lado from 'assets/img/dentalcenter_lado.png'

const navigation = [
  { name: 'Inicio', href: '#inicio', icon: HomeIcon },
  { name: 'Sedes', href: '#sedes', icon: MapPinIcon },
  { name: 'Contacto', href: '#contacto', icon: PhoneIcon },
  { name: 'Servicios', href: '#servicios', icon: SparklesIcon },
  { name: 'Casos', href: '#casos', icon: PhotoIcon },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Popover className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm py-2' : 'bg-transparent py-4'}`}>
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between">
              
              {/* Logo */}
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#inicio" className="flex items-center gap-3 group">
                  <span className="sr-only">Dental Center</span>
                  <div className="relative overflow-hidden rounded-full p-1 bg-white shadow-sm ring-1 ring-slate-100 group-hover:shadow-md transition-shadow">
                    <img
                      className="h-10 w-auto sm:h-12 transform group-hover:scale-105 transition-transform duration-300"
                      src={dentalcenter_lado}
                      alt="Logo Dental Center"
                    />
                  </div>
                  <span className={`text-xl font-display font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                    Dental<span className="text-primary-600">Center</span>
                  </span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className={`inline-flex items-center justify-center rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors ${scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-slate-800 hover:bg-white/50'}`}>
                  <span className="sr-only">Abrir menú</span>
                  <Bars3Icon className="h-7 w-7" aria-hidden="true" />
                </Popover.Button>
              </div>

              {/* Desktop Nav */}
              <Popover.Group as="nav" className="hidden md:flex space-x-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 relative group overflow-hidden ${scrolled ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-50' : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'}`}
                  >
                    <span className="relative z-10">{item.name}</span>
                  </a>
                ))}
              </Popover.Group>
              
              {/* Desktop CTA */}
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a
                  href="#contacto"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 hover:shadow-md transition-all duration-300"
                >
                  Agendar Cita
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50">
              <div className="divide-y-2 divide-slate-50 rounded-2xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        className="h-10 w-auto"
                        src={dentalcenter_lado}
                        alt="Dental Center"
                      />
                      <span className="text-lg font-display font-bold tracking-tight text-slate-900">
                        Dental<span className="text-primary-600">Center</span>
                      </span>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                        <span className="sr-only">Cerrar menú</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <nav className="grid gap-y-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => close()}
                          className="-m-3 flex items-center rounded-xl p-3 hover:bg-slate-50 transition-colors"
                        >
                          <item.icon className="h-6 w-6 flex-shrink-0 text-primary-600" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-slate-900">{item.name}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="space-y-6 py-6 px-5">
                  <a
                    href="#contacto"
                    onClick={() => close()}
                    className="flex w-full items-center justify-center rounded-xl border border-transparent bg-primary-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700"
                  >
                    Agendar Cita
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Navbar;
