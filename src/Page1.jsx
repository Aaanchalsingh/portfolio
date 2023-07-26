import React from "react";
import ReactTyped from "react-typed";

function Page1() {
  return (
    <div className="mb-[7%] shadow-lg shadow-black border border-black h-[600px] m-5 bg-slate-900 rounded-lg flex">
      <div className="mt-[15%] ml-[15%] ">
        <h1 className="text-5xl text-white font-bold mb-5 font-sans ">
          Hi There,
        </h1>
        <h1 className="text-5xl text-yellow-400 font-sans font-bold ">
          I'm Aanchal Singh
        </h1>
        <div>
          <h1 className="text-4xl mt-5 text-blue-400 font-sans font-bold ">
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
      </div>
      <img src="hero.png" alt="" />
    </div>
  );
}

export default Page1;
