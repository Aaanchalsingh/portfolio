import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="">
      <section className="footer bg-black text-white">
        <div className="box-container flex justify-center flex-wrap">
          <div className="box flex-1 p-10">
            <h3 className="text-3xl font-semibold mb-3">Aanchal's Portfolio</h3>
            <p>
              Thank you for visiting my personal portfolio website. Connect
              with me over socials.<br /> <br /> Keep Rising 🚀. Connect with
              me over live chat!
            </p>
          </div>
          <div className="box flex flex-col p-10 mr-[10%]">
            <h3 className="text-3xl font-semibold mb-3">Quick links</h3>
            <a href="#home" className="text-white hover:text-yellow-500">
              <FontAwesomeIcon icon={faChevronCircleRight} /> home
            </a>
            <a href="#about" className="text-white hover:text-yellow-500">
              <FontAwesomeIcon icon={faChevronCircleRight} /> about
            </a>
            <a href="#skills" className="text-white hover:text-yellow-500">
              <FontAwesomeIcon icon={faChevronCircleRight} /> skills
            </a>
            <a href="#education" className="text-white hover:text-yellow-500">
              <FontAwesomeIcon icon={faChevronCircleRight} /> education
            </a>
            <a href="#work" className="text-white hover:text-yellow-500">
              <FontAwesomeIcon icon={faChevronCircleRight} /> work
            </a>
            <a href="#experience" className="text-white hover:text-yellow-500">
              <FontAwesomeIcon icon={faChevronCircleRight} /> experience
            </a>
          </div>

          <div className="box flex-1 p-8 pl-5" >
            <h3 className="text-3xl font-semibold mb-3">Contact Info</h3>
            <p>
              {" "}
              <FontAwesomeIcon icon={faPhone} /> +91 XXX-XXX-XXXX
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faEnvelope} /> aanchalsinghuk@gmail.com
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faMapMarkedAlt} /> Punjab, India-144411
            </p>
            <div className="share flex mt-4">
              <a
                href="https://www.linkedin.com/in/Aanchalsingh2003/"
                className="w-12 h-12 rounded-full text-3xl text-white bg-gray-300 flex items-center justify-center mr-4"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} color="black" />
              </a>
              <a
                href="https://github.com/Aaanchalsingh"
                className="w-12 h-12 rounded-full text-3xl text-white bg-gray-300 flex items-center justify-center mr-4"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub}  color="black"/>
              </a>
              <a
                href="mailto:aanchalsinghuk@gmail.com"
                className="w-12 h-12 rounded-full text-3xl text-white bg-gray-300 flex items-center justify-center mr-4"
                aria-label="Mail"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope}  color="black" />
              </a>
              <a
                href="https://twitter.com/Aanchal98654594"
                className="w-12 h-12 rounded-full text-3xl text-white bg-gray-300 flex items-center justify-center mr-4"
                aria-label="Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter}  color="black"/>
              </a>
              <a
                href="https://t.me/aanchal_Singhh"
                className="w-12 h-12 rounded-full text-3xl text-white bg-gray-300 flex items-center justify-center"
                aria-label="Telegram"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTelegramPlane} color="black" />
              </a>
            </div>
          </div>
        </div>

        <h1 className="credit pt-4 text-xl font-semibold text-white border-t-2 border-white text-center pb-3">
          All Right &copy; Reserved By  Aanchal Singh
        </h1>
      </section>
    </div>
  );
}

export default Footer;
