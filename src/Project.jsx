import "./skills.css";
import React, { useState, useEffect } from "react";

function Project() {
  const [fadeIn, setFadeIn] = useState(false);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setFadeIn(true);
      } else {
        setFadeIn(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    const elementsToObserve = document.querySelectorAll(".animate-on-scroll");
    elementsToObserve.forEach((element) => observer.observe(element));

    return () => {
      elementsToObserve.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <div className="bg-blue-500 skills text-white pb-5 shadow-lg shadow-black" id="Project">
        <div className={`${fadeIn ? 'zoom-in-right' :'zoom-in-right'} animate-on-scroll`}>
        <h1 className="text-5xl md:text-7xl  text-purple-990 font-sans-serrif font-bold  text-center pt-4 mb-12 ">
          Projects
        </h1>
        </div>
        <div className="w-[80%]  md:w-auto text-center flex bg-blue-950 rounded-lg shadow-lg shadow-black justify-evenly p-[5%] pt-[5%] ml-[10%] md:ml-[20%]  mr-[20%] mb-12 flex-wrap gap-[20px]">
          <div className={`h-auto w-auto md:h-[350px] md:w-[350px] bg-slate-900 mb-12 rounded-lg shadow-lg shadow-black cursor-pointer ${fadeIn ? 'zoom-in-left' :''} animate-on-scroll`}>
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
          <div className={`h-auto w-auto md:h-[350px] md:w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer ${fadeIn ? 'zoom-in-right' :''} animate-on-scroll`}>
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
          <div className={`h-auto w-auto md:h-[350px] md:w-[350px] bg-slate-900 mb-12 rounded-lg shadow-lg shadow-black cursor-pointer pb-5 ${fadeIn ? 'zoom-in-left' :''} animate-on-scroll`}>
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

          <div className={`h-auto w-auto md:h-[350px] md:w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer ${fadeIn ? 'zoom-in-right' :''} animate-on-scroll`}>
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
          <div className={`h-auto w-auto md:h-[300px] md:w-[350px] bg-slate-900 rounded-lg mb-12 shadow-lg shadow-black cursor-pointer ${fadeIn ? 'zoom-in-left' :''} animate-on-scroll`}>
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


          <div className={`h-auto w-auto md:h-[300px] md:w-[350px] bg-slate-900 mb-12 rounded-lg shadow-lg  shadow-black  cursor-pointer ${fadeIn ? 'zoom-in-right' :''} animate-on-scroll`}>
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
        <div className="text-center w-[80%] md:w-auto flex bg-blue-950 rounded-lg shadow-lg shadow-black justify-evenly p-[5%] pt-[5%] ml-[10%] md:ml-[20%] mr-[20%] mb-12 flex-wrap gap-[20px]">
        <div className={`h-auto w-auto md:h-[250px] md:w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer  ${fadeIn ? 'zoom-in-left' :''} animate-on-scroll`}>
            <img
              src="developerolio.png"
              alt=""
              height={300}
              width={300}
              className="md:m-12 md:ml-6  mb-5 md:mb-7 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Developer Folio
            </span>
          </div>

          <div className={`h-auto w-auto md:h-[250px] md:w-[350px] bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer ${fadeIn ? 'zoom-in-right' :''} animate-on-scroll`}>
            <img
              src="drum.png"
              alt=""
              height={300}
              width={300}
              className="md:m-12 md:ml-6  mb-5 md:mb-7 rounded-xl  shadow-lg shadow-black"
            />
            <span className="text-white font-bold mt-12 text-center text-4xl ">
              Drum Game
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
