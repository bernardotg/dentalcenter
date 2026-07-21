import treinta from 'assets/img/30years.png';
import garantia from 'assets/img/garantia.png';
import cliente from 'assets/img/cliente.png';

const incentives = [
  {
    name: '30 años de experiencia',
    imageSrc: treinta,
    description: "Contamos con más de 30 años de trayectoria impecable, garantizando seguridad y conocimiento en cada tratamiento.",
  }, 
  {
    name: 'Atención al Cliente',
    imageSrc: cliente,
    description: "Un servicio excepcional y personalizado donde el bienestar y la comodidad del paciente son nuestra principal misión.",
  },
  {
    name: 'Garantía Total',
    imageSrc: garantia,
    description: "Calidad respaldada. Ofrecemos garantía en todos nuestros servicios y tratamientos odontológicos.",
  },
];

export default function Incentives() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 sm:text-5xl">
            Atención Odontológica de Excelencia
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Bienvenidos a Dental Center, donde la salud y la sonrisa de nuestros pacientes son nuestra máxima prioridad. 
            Con un equipo de profesionales altamente capacitados, nos dedicamos a brindar atención dental de vanguardia en un ambiente cálido y moderno. 
            Tu sonrisa es nuestra pasión. ¡Descubre cómo podemos cuidar de ti!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-premium hover:-translate-y-2 transition-transform duration-300 ring-1 ring-slate-100">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-50">
                  <img src={incentive.imageSrc} alt="" className="h-12 w-12 object-contain" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-slate-900">
                  {incentive.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{incentive.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}