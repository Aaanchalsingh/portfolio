import React from "react";

function Project() {
  return (
    <>
      <div className="bg-blue-500 pb-5 shadow-lg shadow-black">
        <h1 className="text-7xl  text-purple-990 font-sans-serrif font-bold  text-center pt-4 mb-12 animate-bounce">
          Projects
        </h1>
        <div className="text-center flex bg-blue-950 rounded-lg shadow-lg shadow-black justify-evenly p-[5%] pt-[5%] ml-[20%] mr-[20%] mb-12 flex-wrap gap-[20px]">
          <div className="h-[350px] w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer  hover:animate-bounce ">
            <img
              src="resume.png"
              alt=""
              height={250}
              width={250}
              className="m-5 ml-12 mb-2 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Resume Builder
            </span>
          </div>
          <div className="h-[350px] w-[370px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer  hover:animate-bounce ">
            <img
              src="Portfolio.png"
              alt=""
              height={340}
              width={340}
              className="m-12 ml-4 mb-10 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold  text-center text-4xl ">
              Portfolio
            </span>
          </div>
        </div>
        <div className="text-center flex bg-blue-950 rounded-lg shadow-lg shadow-black justify-evenly p-[5%] pt-[5%] ml-[20%] mr-[20%] mb-12 flex-wrap gap-[20px]">
          <div className="h-[350px] w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer pb-5  hover:animate-bounce ">
            <img
              src="id.png"
              alt=""
              height={300}
              width={300}
              className="m-12 ml-6 mb-5 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white mt-6 font-bold  text-center text-4xl ">
              ID Card Maker
            </span>
          </div>

          <div className="h-[350px] w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer hover:animate-bounce ">
            <img
              src="dog.png"
              alt=""
              height={300}
              width={300}
              className="m-12 ml-6 mb-6 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              TinDog
            </span>
          </div>
        </div>
        <div className="text-center flex bg-blue-950 rounded-lg shadow-lg shadow-black justify-evenly p-[5%] pt-[5%] ml-[20%] mr-[20%] mb-12 flex-wrap gap-[20px]">
          <div className="h-[300px] w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer  hover:animate-bounce ">
            <img
              src="quote.png"
              alt=""
              height={270}
              width={270}
              className="m-10 mt-6 mb-2 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Quote Engine
            </span>
          </div>

          <div className="h-[300px] w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer  hover:animate-bounce ">
            <img
              src="developerolio.png"
              alt=""
              height={300}
              width={300}
              className="m-12 ml-6 mb-2 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Developer Folio
            </span>
          </div>
        </div>
        <div className="text-center flex bg-blue-950 rounded-lg shadow-lg shadow-black justify-evenly p-[5%] pt-[5%] ml-[20%] mr-[20%] mb-12 flex-wrap gap-[20px]">
          <div className="h-[300px] w-[350px] bg-slate-900 rounded-lg shadow-lg  shadow-black  cursor-pointer hover:animate-bounce">
            <img
              src="secret.png"
              alt=""
              height={350}
              width={300}
              className="m-6 mb-2  rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Secret
            </span>
          </div>
          <div className="h-[300px] w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer hover:animate-bounce ">
            <img
              src="drum.png"
              alt=""
              height={300}
              width={300}
              className="m-12 ml-6 mb-2 rounded-xl  shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Drum Game
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
