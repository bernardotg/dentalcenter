const posts = [
    {
      title: 'Paciente de Ortodoncia',
      href: '#',
      category: { name: 'Ortodoncia', href: '#', color: 'bg-green-100 text-green-800' },
      description: '',
      date: '',
      datetime: '2020-02-12',
      author: {
        name: '',
        href: '#',
        imageUrl:
          '',
      },
      readingTime: 'hace 1 semana',
    },
    {
      title: 'Paciente de Exodoncia',
      href: '#',
      category: { name: 'Exodoncia', href: '#', color: 'bg-pink-100 text-pink-800' },
      description:
        '',
      date: '',
      datetime: '2020-03-10',
      author: {
        name: '',
        href: '#',
        imageUrl:
          '',
      },
      readingTime: 'hace 2 días',
    },
    {
      title: 'Paciente de Endodoncia',
      href: '#',
      category: { name: 'Ortodóncia', href: '#', color: 'bg-indigo-100 text-indigo-800' },
      description:
        '',
      date: '',
      datetime: '2020-03-16',
      author: {
        name: '',
        href: '#',
        imageUrl:
          '',
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