import React from "react";
import ReactTyped from "react-typed";

function Page1() {
  return (
    <div>
    <div className="mb-[7%] shadow-lg shadow-black border   h-[600px] m-5 rounded-lg flex justify-between  border-white">
      <div className="mt-[15%] ml-[15%] " style={{backgroundColor:"#29024E"}}>
        <h1 className="text-2xl text-white mb-5 font-sans ">
          Hello, I am
        </h1>
        <h1 className="text-5xl text-white font-sans font-bold ">
          Aanchal
        </h1>
        <h1 className="text-5xl text-white font-sans font-bold ">
          Singh
        </h1>
        <div>
          <h1 className="text-xl mt-5  text-green-600 font-sans font-bold ">
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
        <button className=" text-white p-3 text-2xl mt-12 rounded-2xl" style={{backgroundColor:"#E60023"}}>Hire me</button>
        <button className=" text-white p-3 text-2xl mt-12 rounded-2xl" style={{backgroundColor:"#E60023"}}>Explore</button>
      </div>
      <img src="hero.png"  alt="" />
    </div>

    </div>
  );
}

export default Page1;
