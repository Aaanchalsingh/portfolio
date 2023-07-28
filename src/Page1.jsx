import React from "react";
import ReactTyped from "react-typed";

function Page1() {
  return (
    <div className="overflow-hidden">
      <div
        className="c1 h-[150px] w-[150px] bg-red-600 rounded-full overflow-hidden"
        style={{ position: "absolute", top: "79%", left: "6%", zIndex: "-1" }}
      ></div>
      <div
        className="h-[150px] w-[150px] bg-red-600 rounded-full overflow-hidden"
        style={{ position: "absolute", top: "8%", left: "83%", zIndex: "-1" }}
      ></div>
      <div
        className="shadow-lg mb-[7%] overflow-hidden shadow-black border-lg h-[600px] m-5 rounded-lg md:flex justify-between ml-[10%] mr-[10%] mt-[3%] border-violet-900 "
        style={{ backgroundColor: "rgb(20, 2, 44)" }}
      >
        <div className="">
          <h1 className=" mt-[10%] ml-[15%] w-[90%] md:w-[50%] overflow-hidden md:text-2xl text-xl text-white flex mb-5 font-sans">Hello, I am</h1>
          <h1 className=" mt-[10%] ml-[15%] w-[90%] md:w-[30%] md:text-7xl text-5xl text-white font-sans font-bold overflow-hidden">Aanchal</h1>
          <h1 className=" mt-[10%] ml-[15%] w-[90%] md:w-[30%]  md:text-7xl text-5xl text-white font-sans font-bold">Singh</h1>
          <div className="ml-[0%]">
            <h1 className="text-xl mt-5 text-white font-sans font-bold overflow-hidden ml-[10%]">
              A{" "}
              <ReactTyped
                strings={[
                  "Web Developer",
                  "BackEnd Developer",
                  "FrontEnd Developer",
                  "Tech Enthusiast",
                ]}
                typeSpeed={100}
                loop
              />
            </h1>
          </div>
          <div className="flex flex-wrap md:flex-nowrap overflow-hidden">
            <button
              className="text-white p-3 w-full md:w-[60%] h-[13%] md:h-auto text-xl m-5 mt-12 md:mt-0 md:mr-5 overflow-hidden rounded-[30px]"
              style={{ backgroundColor: "rgb(244, 18, 18)" }}
            >
              Hire me
            </button>
            <button
              className="text-white p-3 w-full md:w-[60%] h-[13%] md:h-auto border overflow-hidden border-red-700 text-xl m-5  md:mt-0 md:ml-5 after:marker:mt-12 rounded-[30px] hover:bg-[#f41212]"
            >
              Explore
            </button>
          </div>
        </div>
        <img
          src="act.png"
          className="w-full h-[50%] md:w-[60%] md:h-auto md:mt-0"
          alt=""
        />
      </div>
    </div>
  );
}

export default Page1;
