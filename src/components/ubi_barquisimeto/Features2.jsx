import { CheckIcon } from '@heroicons/react/24/outline'
import riolamasintextokids from 'assets/img/riolamasintextokids.png'


const features = [
  {
    name: 'Adaptación Infantil',
    description: '',
  },
  { name: 'Consulta Pediátrica', description: '' },
  {
    name: 'Limpieza Dental',
    description: '',
  },
  { name: 'Profilaxis', description: '' },
  { name: 'Ortopedia Funcional', description: '' },
  { name: 'Restauración Dental', description: '' },
  { name: 'Extracción Dental', description: '' },
  { name: 'Terapia Pulpar', description: '' },
  
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <p className="mt-2 text-3xl font-semibold text-indigo-600">SEDE ESTE KIDS</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">C.C Rio Lama</p>
          <img src={riolamasintextokids} width={250} height={10} className=""/>
          <p className="mt-4 text-lg text-gray-500">
          Av. Lara con Av. Terepaima 
Centro Comercial Rio Lama.  Nivel Planta - Estacionamiento. 
Local #13


          </p>
          <p className="mt-4 text-lg text-gray-500">Punto de referencia: Detrás de Cachapas del Este.</p>
          
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