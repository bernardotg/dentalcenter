import odontologos1 from 'assets/img/odontologos1.jpg'
import odontologos2 from 'assets/img/odontologos2.jpg'
import odontologos3 from 'assets/img/odontologos3.jpg'
import horario from 'assets/img/horario.png'
import treinta from 'assets/img/30years.png'

const posts = [
    {
      title: 'Ortodoncia',
      href: '#',
      category: { name: 'Recupera tu sonrisa', href: '#' },
      description:
        'La ortodoncia es una especialidad de la odontología que se encarga de todo el estudio, prevención, diagnóstico y tratamiento de las anomalías de forma, posición, relación y función de las estructuras dentomaxilofaciales.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        odontologos2,
      readingTime: '6 min',
      author: {
        name: 'Odontologo Profesional',
        href: '#',
        imageUrl:
          treinta,
      },
    },
    {
      title: 'Endodoncia',
      href: '#',
      category: { name: 'Tratamiento de conducto', href: '#' },
      description:
        'Se llama endodoncia, de endo y odontos, a un tratamiento que consiste en la remoción del tejido pulpar que se encuentra inflamado o infectado para su posterior relleno tridimensional y así regresar la funcionalidad mediante la permanencia del orgado dentario respecto a su alveolo.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        odontologos1,
      readingTime: '4 min',
      author: {
        name: 'Odontologo Profesional',
        href: '#',
        imageUrl:
          treinta,
      },
    },
    {
      title: 'Exodoncia Cordal',
      href: '#',
      category: { name: 'Saca tus cordales', href: '#' },
      description:
        'La exodoncia es aquella parte de la cirugía oral que se ocupa de practicar la avulsión o extracción de un diente o porción del mismo, mediante unas técnicas e instrumental adecuado, del lecho óseo que lo alberga. Es el acto quirúrgico mediante el cual se extraen los dientes de sus alvéolos con el menor trauma posible.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        odontologos3,
      readingTime: '11 min',
      author: {
        name: 'Odontologo Profesional',
        href: '#',
        imageUrl:
          treinta,
      },
    },
  ]
  
  export default function Example() {
    return (
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestros Servicios</h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Aqui puedes ver nuestros servicios.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }