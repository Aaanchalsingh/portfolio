import React from "react";
import ReactTyped from "react-typed";
import "./media.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import "./media.css";
import { Link } from "react-scroll";

function Page1() {
  const [anchor, setAnchor] = useState(null);

  useEffect(() => {
    const Skills = document.getElementById("Skills");
    const Contact = document.getElementById("Contact");
    setAnchor({
      Skills,
      Contact
    });
  }, []);

  const handleclick = (event, target) => {
    event.preventDefault();
    if (anchor && anchor[target]) {
      anchor[target].scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="overflow-hidden h-auto md:mb-[7%]">
      <div
        className="c1 h-[50px] hidden md:flex w-[50px] md:h-[150px] md:w-[150px]  bg-red-600 rounded-full overflow-hidden absolute left-[5%] top-[80%] md:left-[6%] md:top-[79%] "
        style={{ zIndex: "-1" }}
      ></div>
      <div
        className="h-[50px] hidden md:flex  w-[50px] md:h-[150px] md:w-[150px]  bg-red-600 rounded-full overflow-hidden absolute left-[80%] md:left-[83%] md:top-[8%] "
        style={{ zIndex: "-1" }}
      ></div>
      <div
        className="mb-[7%] overflow-hidden  border-lg h-[50%] md:h-[600px] m-5 md:m-5 rounded-2xl md:flex justify-center md:ml-[10%] md:mr-[10%] mt-0  md:mt-[3%] border-violet-900 "
        style={{ backgroundColor: "rgb(20, 2, 44)" }}
      >
        <div className="md:m-[7%]">
          <h1 className=" mt-[10%] ml-[15%] w-[90%] md:w-[50%] overflow-hidden md:text-2xl text-xl text-white flex mb-5 font-sans">
            Hello, I am
          </h1>
          <h1 className=" mt-[5%] md:mt-5 ml-[15%] w-[90%] md:w-[30%] text-6xl md:text-7xl  text-white font-sans font-bold ">
            Aanchal
          </h1>
          <h1 className=" mt-[5%] md:mt-0 ml-[15%] w-[100%] md:w-[30%] text-6xl md:text-7xl  text-white font-sans font-bold md:mb-[10%]">
            Singh
          </h1>
          <div className="ml-[0%] md:ml-[10%]">
            <h1 className="text-xl md:text-2xl mt-12 font-sans font-bold overflow-hidden ml-[15%] md:ml-[6%] hi ">
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
          <div className="share flex md ml-[15%] mt-[8%]">
            <a
              href="https://www.linkedin.com/in/Aanchalsingh2003/"
              className="w-12 h-12 rounded-full text-3xl text-white  flex items-center justify-center mr-4 bg-red-600"
              style={{ backgroundColor: "white" }}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="ic" />
            </a>
            <a
              href="https://github.com/Aaanchalsingh"
              className="w-12 h-12 rounded-full text-3xl text-white bg-white flex items-center justify-center mr-4"
              style={{ backgroundColor: "white" }}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="ic" />
            </a>
            <a
              href="mailto:aanchalsinghuk@gmail.com"
              className="w-12 h-12 rounded-full text-3xl text-white bg-white flex items-center justify-center mr-4"
              style={{ backgroundColor: "white" }}
              aria-label="Mail"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="ic" />
            </a>
            <a
              href="https://twitter.com/Aanchal98654594"
              className="w-12 h-12 rounded-full text-3xl text-white bg-white flex items-center justify-center mr-4"
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: "white" }}
            >
              <FontAwesomeIcon icon={faTwitter} className="ic" />
            </a>
            <a
              href="https://t.me/aanchal_Singhh"
              className="w-12 h-12 ci rounded-full text-3xl text-white bg-white flex items-center justify-center"
              aria-label="Telegram"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: "white" }}
            >
              <FontAwesomeIcon icon={faTelegramPlane} className="ic" />
            </a>
          </div>
          <div className="flex ml-0 text-center overflow-hidden w-full mt-5 ">
            <Link
              className=" text-white p-3 w-[100%] md:w-[150px] h-[13%] md:h-auto text-xl md:text-2xl m-5 cursor-pointer mt-4 md:mt-12 md:mr-5 overflow-hidden rounded-[30px] md:p-5 "
              aria-current="page"
              to="/Contact"
              style={{ backgroundColor: "rgb(244, 18, 18)" }}
              onClick={(event) => handleclick(event, "Contact")}
            >
              Hire me
            </Link>
            <Link
              className="text-white p-3 w-[100%] md:w-[155px] h-[13%] border overflow-hidden md:mt-12 border-red-700 text-xl md:text-2xl m-5   md:ml-5 mt-4 rounded-[30px] md:p-5 hover:bg-[#f41212] cursor-pointer "
              aria-current="page"
              to="/Skills"
              onClick={(event) => handleclick(event, "Skills")}
            >
              Explore
            </Link>
          </div>
        </div>

        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/women-give-online-reviews-8714540-7017932.png?f=avif"
          className="w-full h-[35%] md:w-[50%] md:h-auto md:mt-0"
          alt=""
        />
      </div>
    </div>
  );
}

export default Page1;
