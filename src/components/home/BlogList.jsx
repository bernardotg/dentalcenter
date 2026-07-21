const posts = [
    {
      title: 'Paciente de Ortodoncia',
      href: '#',
      category: { name: 'Ortodoncia', href: '#', color: 'bg-green-100 text-green-800' },
      description: 'Ana llegó a la clínica dental con mucha inseguridad debido a sus dientes desalineados. Desde la primera consulta, Dental Center y su equipo la hicieron sentir cómoda y escucharon todas sus inquietudes. Durante el tratamiento de ortodoncia, se le brindó atención personalizada y el equipo se aseguró de explicarle cada paso del proceso. Ana se sintió muy bien cuidada, ya que siempre respondían a sus preguntas y la animaban en su camino hacia una sonrisa más alineada. Después de unos meses, Ana no solo notó una gran mejora en su sonrisa, sino que también disfrutó de la experiencia en la clínica, donde el ambiente era amigable y acogedor. Su confianza creció y ahora recomienda a Dental Center a sus amigos.',
      date: '15 años',
      datetime: '2020-02-12',
      author: {
        name: 'Ana',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: 'hace 1 semana',
    },
    {
      title: 'Paciente de Exodoncia',
      href: '#',
      category: { name: 'Exodoncia', href: '#', color: 'bg-pink-100 text-pink-800' },
      description:
        'María se presentó en la clínica para una extracción dental, temerosa del procedimiento y de lo que podría sentir. Dental Center la recibió con una sonrisa y le explicó detalladamente cada etapa de la exodoncia, lo que le dio tranquilidad. Durante la intervención, Dental Center y sus asistentes se aseguraron de que María estuviera cómoda, y utilizaron técnicas que minimizaron el malestar. Al finalizar, el equipo de Dental Center proporcionó instrucciones claras sobre el cuidado posterior y se mostró disponible para resolver cualquier duda que pudiera surgir. María salió de la clínica sintiéndose aliviada y agradecida por el cuidado y la atención que recibió. Días después, se dio cuenta de que había sido mucho más fácil de lo que había imaginado y ahora recomienda la clínica a todos sus amigos..',
      date: '32 años',
      datetime: '2020-03-10',
      author: {
        name: 'María',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: 'hace 2 días',
    },
    {
      title: 'Paciente de Endodoncia',
      href: '#',
      category: { name: 'Ortodoncia', href: '#', color: 'bg-indigo-100 text-indigo-800' },
      description:
        'Roberto llegó a la consulta con un dolor dental intenso y temía que fuera necesario extraer su diente. Sin embargo, el equipo de Dental Center lo recibió con amabilidad y profesionalismo. Tras una revisión detallada, decidió realizar un tratamiento de endodoncia. Durante el procedimiento, el equipo de Dental Center explicó cada etapa y se aseguró de que Roberto estuviera cómodo en todo momento. Gracias a su destreza y a un equipo comprometido, la intervención fue rápida y prácticamente indolora. Después del tratamiento, Roberto se sintió muy agradecido por la atención recibida y por el alivio del dolor. Ahora, siempre que necesita cuidados dentales, vuelve a la clínica con confianza..',
      date: '45 años',
      datetime: '2020-03-16',
      author: {
        name: 'Roberto',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: 'hace 1 día',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function BlogList() {
    
    return (
      <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto lg:mx-12 max-w-lg divide-y-2 divide-gray-200 lg:max-w-full">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Casos Recientes</h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Pacientes que se han atendido en Dental Center y compartieron su experiencia.
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <div>
                  <a href={post.category.href} className="inline-block">
                    <span
                      className={classNames(
                        post.category.color,
                        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                      )}
                    >
                      {post.category.name}
                    </span>
                  </a>
                </div>
                <a href={post.href} className="mt-4 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href}>{post.author.name}</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} leído</span>
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