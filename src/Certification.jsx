import "./skills.css";
import React, { useState, useEffect } from "react";

function Certification() {
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
      <div className="pb-5 shadow-lg shadow-black skills text-white text-center flex flex-col">
        <div className={`${fadeIn ? 'zoom-in-left' :'zoom-in-left'} animate-on-scroll`}>
        <h1 className="text-7xl  text-purple-990 font-sans-serrif font-bold  text-center pt-4 mb-[5%] mt-[5%]">
          Certification
        </h1>
        </div>
        <div className="flex flex-wrap justify-evenly md:ml-5 mb-12">
          <div className={`h-auto w-auto bg-slate-900 mb-12 rounded-lg shadow-lg shadow-black cursor-pointer ${fadeIn ? 'zoom-in-left' :'zoom-in-left'} animate-on-scroll`}>
            <img
              src="hackncrack.jpg"
              alt=""
              height={250}
              width={250}
              className="md:m-5 md:ml-12 md:mb-2 mb-5 rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              HackaThon
            </span>
          </div>
          <div className={`h-auto w-auto bg-slate-900 rounded-lg shadow-lg shadow-black mb-12 cursor-pointer ${fadeIn ? 'zoominup' :'zoominup'} animate-on-scroll`}>
            <img
              src="coders.png"
              alt=""
              height={250}
              width={250}
              className="md:m-5 md:ml-12 md:mb-2 mb-5  rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Coders Combat
            </span>
          </div>
          <div className={`h-auto w-auto bg-slate-900 rounded-lg shadow-lg shadow-black cursor-pointer ${fadeIn ? 'zoom-in-right' :'zoom-in-right'} animate-on-scroll`}>
            <img
              src="mern.png"
              alt=""
              height={250}
              width={250}
              className="md:m-5 md:ml-12 md:mb-2 mb-5  rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Mern Stack
            </span>
          </div>
        </div>
        <div className="flex flex-wrap ml-5 justify-evenly">
          <div className={`h-auto w-auto bg-slate-900 mb-12 rounded-lg shadow-lg shadow-black cursor-pointer ${fadeIn ? 'zoom-in-left' :'zoom-in-left'} animate-on-scroll`}>
            <img
              src="webd.png"
              alt=""
              height={250}
              width={250}
              className="md:m-5 md:ml-12 md:mb-2 mb-5  rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              Full Stack
            </span>
          </div>
          <div className={`h-auto w-auto bg-slate-900 rounded-lg shadow-lg shadow-black mb-12 cursor-pointer ${fadeIn ? 'zoominup' :'zoominup'} animate-on-scroll`}>
            <img
              src="ibm.png"
              alt=""
              height={250}
              width={250}
              className="md:m-5 md:ml-12 md:mb-2 mb-5  rounded-xl shadow-lg shadow-black"
            />
            <span className="text-white font-bold text-center text-4xl ">
              OS
            </span>
          </div>
          <div className={`h-auto w-auto bg-slate-900 mb-12 rounded-lg shadow-lg shadow-black cursor-pointer ${fadeIn ? 'zoom-in-right' :'zoom-in-right'} animate-on-scroll`}>
            <img
              src="upgrad.png"
              alt=""
              height={250}
              width={250}
              className="md:m-5 md:ml-12 md:mb-2 mb-5  rounded-xl shadow-lg shadow-black"
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
