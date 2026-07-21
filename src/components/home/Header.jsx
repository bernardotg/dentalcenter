import { Typewriter } from "react-simple-typewriter";
import { Link } from 'react-router-dom';
import dentalcenter_lado from 'assets/img/dentalcenter_lado.png';

function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#38bdf8] to-[#0ea5e9] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:flex lg:px-8 lg:py-16 items-center">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 animate-fade-in-up">
          <div className="mt-8 sm:mt-12 lg:mt-4">
            <span className="inline-flex items-center space-x-2 rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700 ring-1 ring-inset ring-primary-500/20">
              <span>Más de 30 años de experiencia</span>
            </span>
          </div>
          <h1 className="mt-8 text-4xl font-display font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
            Sonrisas perfectas en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-cyan-500">
              <Typewriter
                words={['C.C Rio Lama', 'Anticanceroso', 'Centro']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Especialistas en ortodoncia, implantes y estética dental. Transforma tu sonrisa con la tecnología más avanzada y un equipo humano de primera.
          </p>
          <div className="mt-8 flex items-center gap-x-6">
            <a
              href="#contacto"
              className="rounded-full bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/30 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Reserva tu cita hoy
            </a>
            <div className="flex gap-4 items-center text-sm font-semibold leading-6 text-slate-900">
              <a href="#sedes" className="flex items-center hover:text-primary-700 transition-colors">
                Explorar sedes <span aria-hidden="true" className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right side image/composition */}
        <div className="hidden lg:flex mx-auto mt-10 max-w-2xl lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl bg-slate-900/5 p-4 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="overflow-hidden rounded-2xl bg-white shadow-2xl flex items-center justify-center p-4">
                <img
                  src={dentalcenter_lado}
                  alt="Clínica Dental"
                  className="w-[28rem] rounded-xl object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;