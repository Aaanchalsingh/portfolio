import React from "react";
import ReactTyped from "react-typed";

function Page1() {
  return (
    <div>
      <div className="c1 h-[150px] w-[150px] bg-red-600 rounded-full" style={{position:"absolute",top:"79%",left:"5%",zIndex:"-2" }}></div>
      <div className="h-[150px] w-[150px] bg-red-600 rounded-full" style={{position:"absolute",top:"6%",left:"84%",zIndex:"-2" }}></div>
    <div className="shadow-lg mb-[7%]  shadow-black border-lg  h-[600px] m-5 rounded-lg flex justify-between  ml-[10%] mr-[10%] mt-[3%] border-violet-900" style={{backgroundColor:"rgb(20, 2, 44)"}}>

      <div className="mt-[10%] ml-[15%] w-[30%] " >
        <h1 className="text-2xl text-white mb-5 font-sans ">
          Hello, I am
        </h1>
        <h1 className="text-7xl text-white font-sans font-bold ">
          Aanchal
        </h1>
        <h1 className="text-7xl text-white font-sans font-bold ">
          Singh
        </h1>
        <div>
          <h1 className="text-xl mt-5  text-white font-sans font-bold ">
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
        <div className="flex">
        <button className=" text-white p-3 w-[60%] h-[13%] text-xl m-5 mt-12 ml-0  rounded-[30px]" style={{backgroundColor:"rgb(244, 18, 18)"}}>Hire me</button>
        <button className=" text-white p-3 w-[60%] h-[13%] border border-red-700 text-xl m-5 mt-12 ml-0 after:marker:mt-12 rounded-[30px] hover:bg-[#f41212]">Explore</button>
        </div>
      </div>
      <img src="hero.png"  alt="" />
    </div>

    </div>
  );
}

export default Page1;
