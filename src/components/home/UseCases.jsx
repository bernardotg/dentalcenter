import logo_dental from 'assets/img/logodental.png';
import valencia_direc from 'assets/img/valenciadirec.jpg';
import vargas_direc from 'assets/img/vargasdirec.jpg';
import riolama_direc from 'assets/img/riolamadirec.jpg';
import horario from 'assets/img/horario.png';
import { Link } from 'react-router-dom';

const sedes = [
  {
    title: 'Sede Este - Rio Lama',
    href: '/Barquisimeto',
    category: { name: 'Barquisimeto', color: 'bg-primary-100 text-primary-800' },
    description: 'AV. LARA CON AV. TEREPAIMA CENTRO COMERCIAL RIO LAMA, QUINTA ETAPA TORRE DE OFICINAS. PISO 4 CONSULTORIO 4-6.',
    image: riolama_direc,
    schedule: 'Lunes a Sábado: 8:00am - 4:00pm',
  },
  {
    title: 'Sede Sociedad Anticancerosa',
    href: '/Barquisimeto',
    category: { name: 'Barquisimeto', color: 'bg-primary-100 text-primary-800' },
    description: 'AV. VARGAS ENTRE CARRERAS 32 Y 33. EDIFICIO DE LA SOCIEDAD ANTICANCEROSA DEL ESTADO LARA. PB.',
    image: vargas_direc,
    schedule: 'Lunes a Sábado: 8:00am - 4:00pm',
  },
  {
    title: 'Sede Valencia',
    href: '/Valencia',
    category: { name: 'Valencia', color: 'bg-indigo-100 text-indigo-800' },
    description: 'CALLE CANTAURA 94 ENTRE AV. PRINCIPAL LAS FERIAS Y URDANETA. SANTA ROSA.',
    image: valencia_direc,
    schedule: 'Lunes a Sábado: 8:00am - 4:00pm',
  },
];

export default function UseCases() {
  return (
    <div className="relative bg-slate-50 py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 sm:text-4xl">Nuestras Sedes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Te esperamos en tu sede de preferencia. Contamos con instalaciones modernas y cómodas.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl gap-8 lg:max-w-none lg:grid-cols-3">
          {sedes.map((sede) => (
            <div key={sede.title} className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-premium ring-1 ring-slate-200 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex-shrink-0 relative overflow-hidden group">
                <img className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" src={sede.image} alt={sede.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${sede.category.color}`}>
                    {sede.category.name}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div className="flex-1">
                  <Link to={sede.href} className="block mt-2">
                    <p className="text-2xl font-semibold text-slate-900 hover:text-primary-600 transition-colors">{sede.title}</p>
                    <p className="mt-4 text-base text-slate-500 leading-relaxed">{sede.description}</p>
                  </Link>
                </div>
                <div className="mt-8 flex items-center gap-x-4 border-t border-slate-100 pt-6">
                  <img src={horario} alt="Horario" className="h-10 w-10 rounded-full bg-slate-50 p-2 ring-1 ring-slate-200" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-slate-900">Horario de Atención</p>
                    <p className="text-slate-600">{sede.schedule}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}