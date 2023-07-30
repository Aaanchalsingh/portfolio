import "./skills.css";
import React from "react";

function Project() {

  return (
    <>
      <div
        className="bg-blue-500 skills text-white pb-5 shadow-lg shadow-black"
        id="Project"
      >
        <div data-aos="zoom-in-up">
          <h1 className="text-5xl md:text-7xl  text-purple-990 font-sans-serrif font-bold  text-center pt-4 mb-12 ">
            Projects
          </h1>
        </div>
        <div className="w-[80%]  md:w-auto text-center flex bg-blue-950 rounded-lg shadow-lg shadow-black justify-evenly p-[5%] pt-[5%] ml-[10%] md:ml-[20%]  mr-[20%] mb-12 flex-wrap gap-[20px]">
          <div
            className="h-auto w-auto md:h-[350px] md:w-[350px] bg-slate-900 mb-12 rounded-lg shadow-lg shadow-black cursor-pointer"
            data-aos="zoom-in-right"
          >
            <img
              src="resume.png"
              alt=""
              height={250}
              width={250}
              className="md:m-5 md:ml-12 mb-5 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Resume Builder
            </span>
          </div>
          <div
            className="h-auto w-auto md:h-[350px] md:w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer"
            data-aos="zoom-in-left"
          >
            <img
              src="Portfolio.png"
              alt=""
              height={340}
              width={340}
              className="md:m-12 md:ml-4 md:mb-10 mb-5 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold  text-center text-4xl ">
              Portfolio
            </span>
          </div>
        </div>
        <div className="text-center w-[80%] md:w-auto flex bg-blue-950 rounded-lg shadow-lg shadow-black justify-evenly p-[5%] pt-[5%] ml-[10%] md:ml-[20%] mr-[20%] mb-12 flex-wrap gap-[20px]">
          <div
            className="h-auto w-auto md:h-[350px] md:w-[350px] bg-slate-900 mb-12 rounded-lg shadow-lg shadow-black cursor-pointer pb-5"
            data-aos="zoom-in-right"
          >
            <img
              src="id.png"
              alt=""
              height={300}
              width={300}
              className="md:m-12 md:ml-6  mb-5 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white mt-6 font-bold  text-center text-4xl ">
              ID Card Maker
            </span>
          </div>

          <div
            className="h-auto w-auto md:h-[350px] md:w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer "
            data-aos="zoom-in-left"
          >
            <img
              src="dog.png"
              alt=""
              height={300}
              width={300}
              className="md:m-12 md:ml-6 mb-6 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white md:mb-12 font-bold text-center text-4xl ">
              TinDog
            </span>
          </div>
        </div>
        <div className="text-center w-[80%] md:w-auto flex bg-blue-950 rounded-lg shadow-lg shadow-black justify-evenly p-[5%] pt-[5%] ml-[10%] md:ml-[20%] mr-[20%] mb-12 flex-wrap gap-[20px]">
          <div
            className="h-auto w-auto md:h-[300px] md:w-[350px] bg-slate-900 rounded-lg mb-12 shadow-lg shadow-black cursor-pointer "
            data-aos="zoom-in-right"
          >
            <img
              src="quote.png"
              alt=""
              height={270}
              width={270}
              className="md:m-10 md:mt-6 md:mb-2 mb-5 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Quote Engine
            </span>
          </div>

          <div
            className="h-auto w-auto md:h-[300px] md:w-[350px] bg-slate-900 mb-12 rounded-lg shadow-lg  shadow-black  cursor-pointer"
            data-aos="zoom-in-left"
          >
            <img
              src="secret.png"
              alt=""
              height={350}
              width={300}
              className="md:m-6 md:mb-2  rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Secret
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
