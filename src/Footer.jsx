import React from "react";

function Footer() {
  return (
    <div>
      <section className="footer bg-blue-900 text-white">
        <div className="box-container flex justify-center flex-wrap">
          <div className="box flex-1 p-10">
            <h3 className="text-3xl font-semibold">Aanchal's Portfolio</h3>
            <p>
              Thank you for visiting my personal portfolio website. Connect
              with me over socials.<br /> <br /> Keep Rising 🚀. Connect with
              me over live chat!
            </p>
          </div>
          <div className="box flex-1 p-10">
            <h3 className="text-3xl font-semibold">quick links</h3>
            <a href="#home" className="text-white hover:text-yellow-500">
              <i className="fas fa-chevron-circle-right"></i> home
            </a>
            <a href="#about" className="text-white hover:text-yellow-500">
              <i className="fas fa-chevron-circle-right"></i> about
            </a>
            <a href="#skills" className="text-white hover:text-yellow-500">
              <i className="fas fa-chevron-circle-right"></i> skills
            </a>
            <a href="#education" className="text-white hover:text-yellow-500">
              <i className="fas fa-chevron-circle-right"></i> education
            </a>
            <a href="#work" className="text-white hover:text-yellow-500">
              <i className="fas fa-chevron-circle-right"></i> work
            </a>
            <a href="#experience" className="text-white hover:text-yellow-500">
              <i className="fas fa-chevron-circle-right"></i> experience
            </a>
          </div>

          <div className="box flex-1 p-10">
            <h3 className="text-3xl font-semibold">contact info</h3>
            <p>
              {" "}
              <i className="fas fa-phone"></i>+91 XXX-XXX-XXXX
            </p>
            <p>
              {" "}
              <i className="fas fa-envelope"></i>aanchalsinghuk@gmail.com
            </p>
            <p>
              {" "}
              <i className="fas fa-map-marked-alt"></i>Bihar, India-144411
            </p>
            <div className="share flex p-4">
              <a
                href="https://www.linkedin.com/in/Aanchal-sable"
                className="fab fa-linkedin w-12 h-12 rounded-full text-3xl text-white bg-gray-300 flex items-center justify-center mr-4"
                aria-label="LinkedIn"
                target="_blank"
              ></a>
              <a
                href="https://github.com/Aanchal-sable"
                className="fab fa-github w-12 h-12 rounded-full text-3xl text-white bg-gray-300 flex items-center justify-center mr-4"
                aria-label="GitHub"
                target="_blank"
              ></a>
              <a
                href="mailto:aanchalsinghuk@gmail.com"
                className="fas fa-envelope w-12 h-12 rounded-full text-3xl text-white bg-gray-300 flex items-center justify-center mr-4"
                aria-label="Mail"
                target="_blank"
              ></a>
              <a
                href="https://twitter.com/Aanchal_sable"
                className="fab fa-twitter w-12 h-12 rounded-full text-3xl text-white bg-gray-300 flex items-center justify-center mr-4"
                aria-label="Twitter"
                target="_blank"
              ></a>
              <a
                href="https://t.me/lifecode5"
                className="fab fa-telegram-plane w-12 h-12 rounded-full text-3xl text-white bg-gray-300 flex items-center justify-center"
                aria-label="Telegram"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>

        <h1 className="credit pt-4 text-3xl font-semibold text-white border-t-2 border-white">
          Designed with{" "}
          <i className="fa fa-heart pulse text-red-600"></i> by{" "}
          <a
            href="https://www.linkedin.com/in/Aanchal-sable"
            className="text-yellow-500"
          >
            Aanchal Singh
          </a>
        </h1>
      </section>
    </div>
  );
}

export default Footer;
