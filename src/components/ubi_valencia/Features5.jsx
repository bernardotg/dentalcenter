import { CheckIcon } from '@heroicons/react/24/outline'
import centrosintexto from 'assets/img/centrosintexto.png'
import valencia_direc from 'assets/img/valenciadirec.jpg'


const features = [
  {
    name: 'Consulta',
    description: '',
  },
  { name: 'Limpieza Dental', description: '' },
  {
    name: 'Restauración',
    description: '',
  },
  { name: 'Carilla Estética', description: '' },
  { name: 'Extracción Simple', description: '' },
  { name: 'Extracción De Cordal Simple', description: '' },
  
  { name: 'Retiro De Ortodoncia', description: '' },
  { name: 'Profilaxis + Flúor', description: '' },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <p className="mt-2 text-3xl font-semibold text-indigo-600">SEDE VALENCIA</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900"></p>
          <img src={valencia_direc} width={250} height={10} className=""/>
          <p className="mt-4 text-lg text-gray-500">
          Carrera 19, Esquina-Calle 17. Piso 1 Local #2.


          </p>
          <p className="mt-4 text-lg text-gray-500">Punto de referencia: Al frente del Bodegón Adelino.</p>
          
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}