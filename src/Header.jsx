import React from "react";

function Header() {
  return (
    <div className="flex justify-between m-4">
      <h1 className="font-bold text-2xl md:text-3xl ml-5 text-slate-900">

      <img
              src="lo.png"
              alt=""
              height={70}
              width={70}
              className=""
            />
            Aanchal
        </h1>
      <ul className="flex font-bold justify-evenly text-1xl">
        <li className="mr-5 md:mr-16 md:text-2xl pb-5 hover:text-blue-900">Home</li>
        <li className="mr-5  hover:text-blue-900 md:mr-16 md:text-2xl ">About</li>
        <li className="mr-5 md:mr-16 md:text-2xl hover:text-blue-900 ">Skills</li>
        <li className="mr-5  hover:text-blue-900 md:mr-16 md:text-2xl ">Projects</li>
        <li className="mr-5  hover:text-blue-900 md:mr-16 md:text-2xl  ">Contact</li>
      </ul>
    </div>
  );
}

export default Header;
