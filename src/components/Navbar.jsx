import { Bars3Icon,} from '@heroicons/react/24/outline'
import logo from '../assets/Logo-GSI-CORTO.jpg'
import { useState } from 'react'
import { Link as Anchor } from 'react-router-dom'

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

  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }


  return (
    <div>
          <nav className="text-black h-16 w-full bg-[#F2F2F2] fixed z-40">
            <div className="absolute w-full py-2 flex justify-end px-4 tablet:justify-center tablet:mx-0">
              <Anchor to={"/"} className="flex items-center z-50">
                <img className="h-12 w-auto rounded-full" src={logo} alt="G-S-I Company"/>
              </Anchor>
            </div>

            <div className="mx-auto w-full px-2 sm:px-6 lg:px-8 z-30" style={{zIndex: open ? '0' : '50'}}>
              <div className="flex h-16 items-center justify-between relative">
                <div className="flex items-center sm:hidden pr-4 pb-4">
                  {/* Mobile menu button */}
                  <button className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={handleClick}>
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex items-center h-12">
                      {navigation.map((item) => (
                        <Anchor
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-black hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium mx-2'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Anchor>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="items-center pr-2 sm:static sm:ml-6 sm:pr-0 hidden tablet:flex">
                  <p className='mr-5 font-semibold'>Nombre de usuario</p>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            
            {/* Menu de navegación */}
            <div className=' w-full  h-full bg-black bg-opacity-80 z-40 px-2 fixed' style={{display: open ? 'none' : 'block'}}>
              <div className="bg-[#F2F2F2] text-black w-64 min-h-[50%] fixed top-0 left-0 overflow-y-auto pt-1 rounded-r-xl">
                <button className="relative inline-flex items-center justify-center rounded-md p-2 ml-2  hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={handleClick}>
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  </button>
                <div className="border-t-2 mt-5 border-black">
                  <h1 className=" py-4 px-6 text-lg font-semibold">Mi Aplicación</h1>
                </div>
                
                {/* Lista de enlaces */}
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <Anchor to={"/"} className="block py-2 px-4" onClick={handleClick}>Inicio</Anchor> 
                    </li>
                    <li>
                      <Anchor to={"/sistemas"} className="block py-2 px-4" onClick={handleClick}>Sistemas de Ventas</Anchor> 
                    </li>
                    <li>
                      <Anchor to={"/mobileApp"} className="block py-2 px-4" onClick={handleClick}>Desarrollos Web</Anchor> 
                    </li>
                    <li>
                      <Anchor to={"/webApp"} className="block py-2 px-4" onClick={handleClick}>App Moviles</Anchor> 
                    </li>
                    <li>
                      <Anchor href="#" className="block py-2 px-4" onClick={handleClick}>Perfil</Anchor>
                    </li>
                    <li>
                      <Anchor href="#" className="block py-2 px-4" onClick={handleClick}>Configuración</Anchor>
                    </li>
                    {/* Agrega más enlaces según sea necesario */}
                  </ul>
                </nav>
              </div>
            </div>
          </nav>
    </div>
  )
}
