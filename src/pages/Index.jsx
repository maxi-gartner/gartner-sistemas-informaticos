import { useState } from 'react';

export default function Index() {
    const [hoveredVtas, setHoveredVtas] = useState(false);
    const [hoveredAppMovil, setHoveredAppMovil] = useState(false);
    const [hoveredWeb, setHoveredWeb] = useState(false);
    return (
    <div>
        <body className="h-full">
            <div className="flex justify-evenly h-screen relative w-full flex-wrap">
                <div className="flex flex-col pt-5">
                    <div className="w-full max-w-sm rounded-xl shadow  min-h-16 sm:min-h-auto h-[8rem] relative">
                        <h1 className="text-white text-4xl p-5 text-center" style={{ color: hoveredVtas ? 'transparent' : '', transition: 'color 0.3s' }}>Tipos de Software de gestión empresarial</h1>
                    </div>
                    <div className={`w-full max-w-sm bg-white rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 min-h-96 sm:min-h-auto h-[35rem] border-4 border-black relative mb-5 ${hoveredVtas ? 'scale-125' : ''} transition-transform duration-300`} onMouseEnter={() => setHoveredVtas(true)} onMouseLeave={() => setHoveredVtas(false)}>
                        <img src="https://i.pinimg.com/originals/15/ea/80/15ea804cbed52b3c9e4f7119bf50ebb4.png" className="w-full h-full object-cover rounded-xl" alt="" />
                        <div className='w-full h-full bg-black absolute top-0 left-0 flex justify-center items-center bg-opacity-40 hover:bg-opacity-0'>
                            <div className="flex flex-col justify-center items-center p-10 pb-16">
                                <h2 className="text-white text-xl">
                                    {/* Texto */}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pt-5">
                    <div className="w-full max-w-sm rounded-xl shadow  min-h-16 sm:min-h-auto h-[8rem] relative">
                        <h1 className="text-white text-4xl p-5 text-center" style={{ color: hoveredAppMovil ? 'transparent' : '', transition: 'color 0.3s' }}>Tipos de Aplicaciones móviles</h1>
                    </div>
                    <div className={`w-full max-w-sm bg-white rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 min-h-96 sm:min-h-auto h-[35rem] border-4 border-black relative mb-5 ${hoveredAppMovil ? 'scale-125' : ''} transition-transform duration-300`} onMouseEnter={() => setHoveredAppMovil(true)} onMouseLeave={() => setHoveredAppMovil(false)}>
                        <img src="https://i.pinimg.com/originals/15/ea/80/15ea804cbed52b3c9e4f7119bf50ebb4.png" className="w-full h-full object-cover rounded-xl" alt="" />
                        <div className='w-full h-full bg-black absolute top-0 left-0 flex justify-center items-center bg-opacity-40 hover:bg-opacity-0'>
                            <div className="flex flex-col justify-center items-center p-10 pb-16">
                                <h2 className="text-white text-xl">
                                    {/* Texto */}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pt-5">
                    <div className="w-full max-w-sm rounded-xl shadow  min-h-16 sm:min-h-auto h-[8rem] relative">
                        <h1 className="text-white text-4xl p-5 text-center" style={{ color: hoveredWeb ? 'transparent' : '', transition: 'color 0.3s' }}>Tipos de Desarrollos web</h1>
                    </div>
                    <div className={`w-full max-w-sm bg-white rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 min-h-96 sm:min-h-auto h-[35rem] border-4 border-black relative mb-5 ${hoveredWeb ? 'scale-125' : ''} transition-transform duration-300`} onMouseEnter={() => setHoveredWeb(true)} onMouseLeave={() => setHoveredWeb(false)}>
                        <img src="https://i.pinimg.com/originals/15/ea/80/15ea804cbed52b3c9e4f7119bf50ebb4.png" className="w-full h-full object-cover rounded-xl" alt="" />
                        <div className='w-full h-full bg-black absolute top-0 left-0 flex justify-center items-center bg-opacity-40 hover:bg-opacity-0'>
                            <div className="flex flex-col justify-center items-center p-10 pb-16">
                                <h2 className="text-white text-xl">
                                    {/* Texto */}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </div>
    )
}
