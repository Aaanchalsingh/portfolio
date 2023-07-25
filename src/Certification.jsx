import React from "react";

function Certification() {
  return (
    <>
      <div className="pb-5 shadow-lg shadow-black text-center flex flex-col">
        <h1 className="text-7xl  text-purple-990 font-sans-serrif font-bold  text-center pt-4 mb-12 animate-bounce">
        Certification
        </h1>
        <div className="flex justify-evenly ml-5 mb-12">
          <div className="h-[350px] w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer  hover:animate-bounce ">
            <img
              src="hackncrack.jpg"
              alt=""
              height={250}
              width={250}
              className="m-5 ml-12 mb-2 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              HackaThon
            </span>
          </div>
          <div className="h-[350px] w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer  hover:animate-bounce ">
            <img
              src="coders.png"
              alt=""
              height={250}
              width={250}
              className="m-5 ml-12 mb-2 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Coders Combat
            </span>
          </div>
          <div className="h-[350px] w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer  hover:animate-bounce ">
            <img
              src="mern.png"
              alt=""
              height={250}
              width={250}
              className="m-5 ml-12 mb-2 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Mern Stack
            </span>
          </div>

          </div>
          <div className="flex ml-5 justify-evenly">
          <div className="h-[350px] w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer  hover:animate-bounce ">
            <img
              src="ibm.png"
              alt=""
              height={250}
              width={250}
              className="m-5 ml-12 mb-2 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Full Stack
            </span>
          </div>
          <div className="h-[350px] w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer  hover:animate-bounce ">
            <img
              src="ibmm.png"
              alt=""
              height={250}
              width={250}
              className="m-5 ml-12 mb-2 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Operating System
            </span>
          </div>
          <div className="h-[350px] w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer  hover:animate-bounce ">
            <img
              src="upgrad.png"
              alt=""
              height={250}
              width={250}
              className="m-5 ml-12 mb-2 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Cyber Security
            </span>
          </div>

          </div>
      </div>
    </>
  );
}

export default Certification;
