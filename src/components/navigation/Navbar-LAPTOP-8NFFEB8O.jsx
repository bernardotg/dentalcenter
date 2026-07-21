
import {connect} from 'react-redux'
import {NavLink,Link} from 'react-router-dom'
import { Popover, PopoverPanel, PopoverButton, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {useState, Fragment } from 'react'
import loading_dots from 'assets/img/loading-dots.gif'
import logo_scacademy from 'assets/img/scacademy.jpg'
import logo_lara from 'assets/img/lara.jpg'
import logo_dental from 'assets/img/logodental.png'
import DotLoader from 'react-spinners/DotLoader'
import diente from 'assets/img/diente.png'

const solutions = [
  {
    name: 'Inicio',
    description: '',
    href: '/',
    icon: IconOne,
  },
  {
    name: 'Servicios',
    description: '',
    href: '/Servicios',
    icon: IconTwo,
  },
  {
    name: 'Contacto',
    description: '',
    href: '/Contacto',
    icon: IconThree,
  },
  {
    name: 'Ubicaciones',
    description: '',
    href: '/Barquisimeto',
    icon: IconThree,
  },
  
  
]



function Navbar(){
  
  const {loading,setLoading}=useState(true)

  window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if(document.getElementById('navbar')){
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    const [open, setOpen] = useState(false)

  return(
    <nav data-scroll data-scroll-id="hey" id='navbar' className='w-full py-2 top-0 z-40 transition duration-300 ease-in-out shadow-md fixed'>
      <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link to='/' className="ml-4 mt-2">
            <img src={logo_dental} width={180} height={10} className=""/>
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
          <NavLink to="/" className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-700 transition duration-300 ease-in-out mx-4">Inicio</NavLink>
          <NavLink to="../Servicios" className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-700 transition duration-300 ease-in-out mx-4">Servicios</NavLink>
          <NavLink to="../Contacto" className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-700 transition duration-300 ease-in-out mx-4">Contacto</NavLink>
          <NavLink to="../Barquisimeto" className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-700 transition duration-300 ease-in-out mx-4">Ubicaciones</NavLink>
          
            
          
                
          </div>
        </div>
        <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link to='/' className="ml-4 mt-2">
            <img src={logo_dental} width={110} height={10} className=""/>
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
          
          
          <Popover className="relative">
                        {({ open }) => (
                        <>
                            <PopoverButton
                            className={`
                                ${open ? '' : 'text-opacity-90'}
                                focus:ring-none focus:outline-none`}
                            >
                            {
                                open ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                                //<i  className='bx bx-x text-4xl'></i>
                                //:
                                //<i  className='bx bx-menu text-4xl'></i>
                            }
                            </PopoverButton>

                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                            >
                            <PopoverPanel className="absolute -left-32 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                    {solutions.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-700 focus-visible:ring-opacity-50"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                        <item.icon aria-hidden="true" />
                                        </div>
                                        <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-900">
                                            {item.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {item.description}
                                        </p>
                                        </div>
                                    </Link>
                                    ))}
                                </div>
                                <div className="bg-gray-50 p-4">
                                    <a
                                    href="##"
                                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-700 focus-visible:ring-opacity-50"
                                    >
                                    <span className="flex items-center">
                                        <span className="text-sm font-medium text-gray-900">
                                        Dental Center
                                        </span>
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                        Compartiendo Sonrisas
                                    </span>
                                    </a>
                                </div>
                                </div>
                            </PopoverPanel>
                            </Transition>
                        </>
                        )}
                    </Popover>
          
                
          </div>
        </div>
      </div>
    </nav>
  )
}

    

const mapStateToProps=state=>({

})

export default connect(mapStateToProps, {

}) (Navbar)

function IconOne() {
  return (
    <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#FFEDD5', overflow: 'hidden' }}>
      <img
        src={diente} // Si estás usando una imagen local
        alt="Descripción de la imagen"
        style={{ width: '70%', height: '100%', objectFit: 'cover' }} // Este estilo asegura que la imagen llena el contenedor
      />
    </div>
  )
}

function IconTwo() {
  return (
    <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#FFEDD5', overflow: 'hidden' }}>
      <img
        src={diente} // Si estás usando una imagen local
        alt="Descripción de la imagen"
        style={{ width: '70%', height: '100%', objectFit: 'cover' }} // Este estilo asegura que la imagen llena el contenedor
      />
    </div>
  )
}

function IconThree() {
  return (
    <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#FFEDD5', overflow: 'hidden' }}>
      <img
        src={diente} // Si estás usando una imagen local
        alt="Descripción de la imagen"
        style={{ width: '70%', height: '100%', objectFit: 'cover' }} // Este estilo asegura que la imagen llena el contenedor
      />
    </div>
  )
}
