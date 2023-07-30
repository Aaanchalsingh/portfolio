import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./head.css";

function Header() {
  const [anchor, setAnchor] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const Skills = document.getElementById("Skills");
    const Project = document.getElementById("Project");
    const Contact = document.getElementById("Contact");
    const Certification = document.getElementById("Certification");
    setAnchor({
      Skills,
      Project,
      Contact,
      Certification,
    });
  }, []);

  const handleclick = (event, target) => {
    event.preventDefault();
    if (anchor && anchor[target]) {
      anchor[target].scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsNavOpen(false);
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Add an event listener to handle clicks outside the navigation menu
  useEffect(() => {
    const closeMenuOnOutsideClick = (event) => {
      const menuElement = document.getElementById("menu");
      const navbarElement = document.querySelector(".navbar");

      if (menuElement && !menuElement.contains(event.target) && isNavOpen) {
        setIsNavOpen(false);
      }

      if (navbarElement && !navbarElement.contains(event.target) && isNavOpen) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isNavOpen]);

  return (
    <header className="flex justify-between navbar mt-5 md:mt-0">


      <h1 className="font-bold text-2xl md:text-3xl ml-5 text-slate-900">
        <div className="flex m-5 mt-2 md:pl-12 md:pt-6">
          <h1 style={{ fontFamily: "Bungee Spice" }}>Aanchal</h1>
        </div>
      </h1>
      <div
        id="menu"
        className={`fas flex md:hidden fa-bars font-bold text-5xl m-5 mt-2 cursor-pointer text-slate-700 ${
          isNavOpen ? "fa-times" : ""
        }`}
        onClick={handleNavToggle}
      >
        &#8801;
      </div>

        <ul
          className={`${
            isNavOpen ? "flex" : "hidden"
          } md:flex font-bold justify-evenly text-1xl `}
        >
          <li className="home mr-5 md:mr-16 md:text-2xl pb-5 hover:text-yellow-500 bg-red-600 text-white p-5">
            <Link
              className="nav-link active ml-auto"
              aria-current="page"
              to="/"
            >
              Home
            </Link>
          </li>

          <li className="mr-5 md:mr-16 pt-6 md:text-2xl hover:text-yellow-500 ">
            <Link
              className="nav-link active ml-auto"
              aria-current="page"
              to="/Skills"
              onClick={(event) => handleclick(event, "Skills")}
            >
              Skills
            </Link>
          </li>
          <li className="mr-5  hover:text-yellow-500 md:mr-16  pt-6 md:text-2xl ">
            <Link
              className="nav-link active ml-auto"
              aria-current="page"
              to="/Project"
              onClick={(event) => handleclick(event, "Project")}
            >
              Projects
            </Link>
          </li>
          <li className="mr-5  hover:text-yellow-500 md:mr-16 md:text-2xl pt-6">
            <Link
              className="nav-link active ml-auto"
              aria-current="page"
              to="/Certification"
              onClick={(event) => handleclick(event, "Certification")}
            >
              Certifications
            </Link>
          </li>
          <li className="mr-5  hover:text-yellow-500 md:mr-16 pt-6 md:text-2xl">
            <Link
              className="nav-link active ml-auto"
              aria-current="page"
              to="/Contact"
              onClick={(event) => handleclick(event, "Contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
    </header>
  );
}

export default Header;
