import { useState } from "react";
import { Link as Anchor } from "react-router-dom";

export default function WebApp() {
  const [hoveredVtas, setHoveredVtas] = useState(false);
  const [hoveredAppMovil, setHoveredAppMovil] = useState(false);
  const [hoveredWeb, setHoveredWeb] = useState(false);
  return (
    <div className="h-full mt-10">
      <div className="flex justify-evenly relative w-full flex-wrap">
        <Anchor
          to="https://bug-1wmh25i6o-maxigartners-projects.vercel.app/"
          className="flex flex-col pt-5 mx-2 "
        >
          <div
            className={`w-full max-w-sm rounded-xl min-h-16 sm:min-h-auto h-[8rem] relative ${
              hoveredVtas
                ? "translate-y-[-2.3rem] tablet:translate-y-0 z-40"
                : ""
            } , transition-transform duration-300`}
          >
            <h1
              className={`text-black text-3xl p-5 text-center 
                                  ${
                                    hoveredVtas
                                      ? "tablet:text-transparent tablet:transition-colors tablet:duration-300"
                                      : ""
                                  }`}
            >
              Bug Fix
            </h1>
            <h1
              className={`text-black text-3xl text-center 
                                  ${
                                    hoveredVtas
                                      ? "tablet:text-transparent tablet:transition-colors tablet:duration-300"
                                      : ""
                                  }`}
            >
              E-comerce Informatico
            </h1>
          </div>
          <div
            className={`w-full max-w-sm bg-white rounded-xl min-h-96 sm:min-h-auto h-[35rem] border-4 border-black relative mb-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
                                  ${
                                    hoveredVtas
                                      ? "scale-125 tablet:translate-x-14 z-40"
                                      : ""
                                  } , transition-transform duration-300 overflow-auto 
                                  scrollbar scrollbar-thumb-fuchsia-800 scrollbar-track-black`}
            onMouseEnter={() => setHoveredVtas(true)}
            onMouseLeave={() => setHoveredVtas(false)}
          >
            <img src="public/bug-fix.png" className="object-cover" alt="" />
            <div className="w-full h-full bg-black absolute top-0 left-0 flex justify-center items-center bg-opacity-40 hover:bg-opacity-0">
              <div className="flex flex-col justify-center items-center p-10 pb-16">
                <h2 className="text-white text-xl">{/* Texto */}</h2>
              </div>
            </div>
          </div>
        </Anchor>
        <Anchor to="/mobileApp" className="flex flex-col pt-5">
          <div
            className={`w-full max-w-sm rounded-xl min-h-16 sm:min-h-auto h-[8rem] relative ${
              hoveredAppMovil
                ? "translate-y-[-2.3rem] tablet:translate-y-0 z-40"
                : ""
            } , transition-transform duration-300`}
          >
            <h1
              className={`text-black text-3xl p-5 text-center 
                                  ${
                                    hoveredAppMovil
                                      ? "tablet:text-transparent tablet:transition-colors tablet:duration-300"
                                      : ""
                                  }`}
            >
              Aplicaciones<br></br> móviles
            </h1>
          </div>
          <div
            className={`w-full max-w-sm bg-white rounded-xl min-h-96 sm:min-h-auto h-[35rem] border-4 border-black relative mb-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
                                  ${
                                    hoveredAppMovil
                                      ? "scale-125 z-40 tablet:translate-x-[-4rem] laptop:translate-x-0"
                                      : ""
                                  } transition-transform duration-300`}
            onMouseEnter={() => setHoveredAppMovil(true)}
            onMouseLeave={() => setHoveredAppMovil(false)}
          >
            <img
              src="https://i.pinimg.com/originals/15/ea/80/15ea804cbed52b3c9e4f7119bf50ebb4.png"
              className="w-full h-full object-cover rounded-xl"
              alt=""
            />
            <div className="w-full h-full bg-black absolute top-0 left-0 flex justify-center items-center bg-opacity-40 hover:bg-opacity-0">
              <div className="flex flex-col justify-center items-center p-10 pb-16">
                <h2 className="text-white text-xl">{/* Texto */}</h2>
              </div>
            </div>
          </div>
        </Anchor>
        <Anchor to="/webApp" className="flex flex-col pt-5 mx-2">
          <div
            className={`w-full max-w-sm rounded-xl min-h-16 sm:min-h-auto h-[8rem] relative ${
              hoveredWeb
                ? "translate-y-[-2.3rem] tablet:translate-y-0 z-40"
                : ""
            } , transition-transform duration-300`}
          >
            <h1
              className={`text-black text-3xl p-5 text-center 
                                          ${
                                            hoveredWeb
                                              ? "tablet:text-transparent tablet:transition-colors tablet:duration-300"
                                              : ""
                                          }`}
            >
              Desarrollos <br></br> web
            </h1>
          </div>
          <div
            className={`w-full max-w-sm bg-white rounded-xl min-h-96 sm:min-h-auto h-[35rem] border-4 border-black relative mb-24 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
                                  ${
                                    hoveredWeb
                                      ? "scale-125 laptop:translate-x-[-4rem] z-40"
                                      : ""
                                  } transition-transform duration-300`}
            onMouseEnter={() => setHoveredWeb(true)}
            onMouseLeave={() => setHoveredWeb(false)}
          > 
            <img
              src="https://i.pinimg.com/originals/15/ea/80/15ea804cbed52b3c9e4f7119bf50ebb4.png"
              className="w-full h-full object-cover rounded-xl"
              alt=""
            />
            <div className="w-full h-full bg-black absolute top-0 left-0 flex justify-center items-center bg-opacity-40 hover:bg-opacity-0">
              <div className="flex flex-col justify-center items-center p-10 pb-16">
                <h2 className="text-white text-xl">{/* Texto */}</h2>
              </div>
            </div>
          </div>
        </Anchor>
      </div>
    </div>
  );
}
