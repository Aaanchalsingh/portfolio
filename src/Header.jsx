import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [anchor, setAnchor] = useState(null);

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
  };

  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-2xl md:text-3xl ml-5 text-slate-900">
        <div className="flex pl-12 pt-6">
          <h1 style={{ fontFamily: "Bungee Spice" }}>Aanchal</h1>
        </div>
      </h1>
      <ul className="flex font-bold justify-evenly text-1xl">
        <li className="mr-5 md:mr-16 md:text-2xl pb-5 hover:text-yellow-500 bg-red-600 text-white p-5">
          <Link
            className="nav-link active ml-auto"
            aria-current="page"
            to="/"
          >
            Home
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
        <li className="mr-5  hover:text-yellow-500 md:mr-16 pt-6 md:text-2xl  ">
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
    </div>
  );
}

export default Header;
