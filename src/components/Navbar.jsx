import { Bars3Icon,} from '@heroicons/react/24/outline'
import logo from '../assets/Logo-GSI-CORTO.jpg'
import { useState } from 'react'

export default function Navbar() {
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

    const [hidden, setHidden] = useState(false);
  
    const toggleVisibility = () => {
      setHidden(!hidden);
    };

  return (
    <div>
      {hidden ? (
        <nav className="text-black h-16">
            <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center sm:hidden min-w-60 bg-slate-500">
                  <button className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleVisibility}>
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  </button>
                  <div>
                    <p>links</p>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-12 w-auto rounded-full"
                      src={logo} alt="G-S-I Company"
                    />
                  </div>
                </div>
                <div className="flex items-center pr-2 sm:static sm:ml-6 sm:pr-0 lg: min-w-60 bg-slate-500">
                  <p className='mr-5 font-semibold'>Nombre de usuario</p>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </nav>
) 
: (
  <nav>
        <div className="flex">
  {/* Barra lateral */}
  <div className="fixed left-0 top-0 h-full bg-gray-900 text-white w-64 flex flex-col justify-between z-50">
    {/* Contenido de la barra lateral */}
    <div className="p-4">
      {/* Logo u otro contenido */}
      <div className="mb-4">
        <h1 className="text-xl font-bold">Mi Aplicación</h1>
        {/* Otras partes del logo o texto */}
      </div>
      {/* Links de la barra lateral */}
      <nav>
        <ul>
          <li className="py-2 hover:bg-gray-800">
            <a href="#" className="block px-4">Inicio</a>
          </li>
          <li className="py-2 hover:bg-gray-800">
            <a href="#" className="block px-4">Perfil</a>
          </li>
          <li className="py-2 hover:bg-gray-800">
            <a href="#" className="block px-4">Configuración</a>
          </li>
          {/* Agregar más elementos según sea necesario */}
        </ul>
      </nav>
    </div>
    {/* Pie de página de la barra lateral */}
    <div className="p-4">
      <p className="text-sm">© 2024 Mi Empresa</p>
    </div>
  </div>
  {/* Contenido de la página */}
  <div className="ml-64"> {/* Aquí ajustamos el margen izquierdo para dejar espacio para la barra lateral */}
    {/* Contenido de la página */}
  </div>
</div>
  </nav>
)}
    </div>
  )
}


{/* <div className="flex items-center h-12">
{navigation.map((item) => (
  <a
    key={item.name}
    href={item.href}
    className={classNames(
      item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-black hover:text-white',
      'rounded-md px-3 py-2 text-sm font-medium mx-2'
    )}
    aria-current={item.current ? 'page' : undefined}
  >
    {item.name}
  </a>
))}
</div> */}