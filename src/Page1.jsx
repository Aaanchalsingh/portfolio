import React from "react";
import ReactTyped from "react-typed";
import "./media.css"

function Page1() {
  return (
    <div className="overflow-hidden h-auto">
      <div
        className="c1 h-[50px]  w-[50px] md:h-[150px] md:w-[150px]  bg-red-600 rounded-full overflow-hidden absolute left-[5%] top-[80%] md:left-[6%] md:top-[79%] "
        style={{zIndex: "-1" }}
      ></div>
      <div
        className="h-[50px]  w-[50px] md:h-[150px] md:w-[150px]  bg-red-600 rounded-full overflow-hidden absolute left-[80%] md:left-[83%] md:top-[8%] "
        style={{zIndex: "-1" }}
      ></div>
      <div
        className="shadow-lg mb-[7%] overflow-hidden shadow-black border-lg h-[600px] m-5 rounded-lg md:flex justify-between ml-[10%] mr-[10%] mt-[3%] border-violet-900 "
        style={{ backgroundColor: "rgb(20, 2, 44)" }}
      >
        <div className="md:m-[7%]">
          <h1 className=" mt-[10%] ml-[15%] w-[90%] md:w-[50%] overflow-hidden md:text-2xl text-xl text-white flex mb-5 font-sans">Hello, I am</h1>
          <h1 className=" mt-[10%] md:mt-5 ml-[15%] w-[90%] md:w-[30%] md:text-7xl text-5xl text-white font-sans font-bold ">Aanchal</h1>
          <h1 className=" mt-[10%] md:mt-0 ml-[15%] w-[100%] md:w-[30%]  md:text-7xl text-5xl text-white font-sans font-bold md:mb-[10%]">Singh</h1>
          <div className="ml-[0%] md:ml-[10%]">
            <h1 className="text-xl md:text-2xl mt-12 text-white font-sans font-bold overflow-hidden ml-[15%] ">
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
          <div className="flex ml-0  overflow-hidden w-full mt-12 ">
            <button
              className=" text-white p-3 w-[100%] md:w-[150px] h-[13%] md:h-auto text-xl md:text-2xl m-5 mt-4 md:mt-12 md:mr-5 overflow-hidden rounded-[30px] md:p-5 "
              style={{ backgroundColor: "rgb(244, 18, 18)" }}
            >
              Hire me
            </button>
            <button
              className="text-white p-3 w-[100%] md:w-[155px] h-[13%] border overflow-hidden md:mt-12 border-red-700 text-xl md:text-2xl m-5   md:ml-5 mt-4 rounded-[30px] md:p-5 hover:bg-[#f41212] "
            >
              Explore
            </button>
          </div>
        </div>
        <img
          src="act.png"
          className="w-full h-[35%] md:w-[50%] md:h-auto md:mt-0"
          alt=""
        />
      </div>
    </div>
  );
}

export default Page1;
