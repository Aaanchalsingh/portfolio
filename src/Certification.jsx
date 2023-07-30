import "./skills.css";
import React from "react";

function Certification() {
  return (
    <>
      <div
        className="pb-5 shadow-lg shadow-black skills text-white text-center flex flex-col"
        id="Certification"
      >
        <div data-aos="zoom-in-up">
          <h1 className="text-5xl md:text-7xl  text-purple-990 font-sans-serrif font-bold  text-center pt-4 mb-[5%] mt-[2%]">
            Certifications
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly md:ml-5 mb-12">
          <div
            className="h-auto w-auto md:h-[270px] md:w-[300px] bg-slate-900 grid place-items-center mb-12 rounded-lg shadow-lg shadow-black cursor-pointer "
            data-aos="zoom-in-right"
          >
            <img
              src="hackncrack.jpg"
              alt=""
              height={250}
              width={250}
              className="mb-5 md:mb-0 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              HackaThon
            </span>
          </div>
          <div
            className="h-auto w-auto md:h-[270px] md:w-[300px] bg-slate-900 rounded-lg shadow-lg shadow-black mb-12 cursor-pointer grid place-items-center "
            data-aos="zoom-in-up"
          >
            <img
              src="coders.png"
              alt=""
              height={250}
              width={250}
              className=" mb-5 md:mb-0  rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Coders Combat
            </span>
          </div>
          <div
            className="h-auto w-auto md:h-[270px] md:w-[300px] bg-slate-900 rounded-lg grid place-items-center  shadow-lg shadow-black cursor-pointer "
            data-aos="zoom-in-left"
          >
            <img
              src="mern.png"
              alt=""
              height={250}
              width={250}
              className=" mb-5 md:mb-0  rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Mern Stack
            </span>
          </div>
        </div>
        <div className="flex flex-wrap ml-5 justify-evenly">
          <div
            className="h-auto w-auto md:h-[270px] md:w-[300px] bg-slate-900 mb-12 grid place-items-center  rounded-lg shadow-lg shadow-black cursor-pointer "
            data-aos="zoom-in-right"
          >
            <img
              src="webd.png"
              alt=""
              height={250}
              width={250}
              className=" mb-5 md:mb-0  rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Full Stack
            </span>
          </div>
          <div
            className="h-auto w-auto md:h-[270px] md:w-[300px] bg-slate-900 rounded-lg grid place-items-center shadow-lg shadow-black mb-12 cursor-pointer "
            data-aos="zoom-in-up"
          >
            <img
              src="ibm.png"
              alt=""
              height={250}
              width={250}
              className=" mb-5 md:mb-0  rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              OS
            </span>
          </div>
          <div
            className="h-auto w-auto md:h-[270px] md:w-[300px] bg-slate-900 mb-12 grid place-items-center rounded-lg shadow-lg shadow-black cursor-pointer "
            data-aos="zoom-in-left"
          >
            <img
              src="upgrad.png"
              alt=""
              height={250}
              width={250}
              className=" mb-5 md:mb-0  rounded-xl shadow-lg shadow-black"
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
