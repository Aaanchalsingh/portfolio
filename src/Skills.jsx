import React, { useState, useEffect } from "react";
import "./media.css";

const skillsData = [
  {
    name: "ReactJS",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
  },
  {
    name: "ExpressJS",
    icon: "https://img.icons8.com/fluency/48/000000/node-js.png",
  },
  {
    name: "NodeJS",
    icon: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
  {
    name: "Redux",
    icon: "https://img.icons8.com/color/48/000000/redux.png",
  },
  {
    name: "Firebase",
    icon: "https://img.icons8.com/color/48/000000/firebase.png",
  },
  {
    name: "Android",
    icon: "https://img.icons8.com/fluency/48/000000/android-os.png",
  },
  {
    name: "MaterialUI",
    icon: "https://img.icons8.com/color/48/000000/material-ui.png",
  },
  {
    name: "ChakraUI",
    icon: "https://img.icons8.com/color/48/000000/chakra-ui.png",
  },
  {
    name: "TailwindCSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
  },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
  },
  {
    name: "Sass",
    icon: "https://img.icons8.com/color/48/000000/sass.png",
  },
  {
    name: "HTML5",
    icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
  },
  {
    name: "CSS3",
    icon: "https://img.icons8.com/color/48/000000/css3.png",
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
  },
  {
    name: "Java",
    icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
  },
  {
    name: "Kotlin",
    icon: "https://img.icons8.com/color/48/000000/kotlin.png",
  },
  {
    name: "PHP",
    icon: "https://img.icons8.com/offices/48/000000/php-logo.png",
  },
  {
    name: "Python",
    icon: "https://img.icons8.com/color/48/000000/python--v1.png",
  },
  {
    name: "C++",
    icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/color/48/000000/mongodb.png",
  },
  {
    name: "MySQL",
    icon: "https://img.icons8.com/color/48/000000/mysql-logo.png",
  },
  {
    name: "PostgreSQL",
    icon: "https://img.icons8.com/color/48/000000/postgreesql.png",
  },
  {
    name: "AWS",
    icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
  },
  {
    name: "Heroku",
    icon: "https://img.icons8.com/color/48/000000/heroku.png",
  },
  {
    name: "Netlify",
    icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
  },
  {
    name: "DigitalOcean",
    icon: "https://img.icons8.com/ios-filled/48/0080FF/digitalocean.png",
  },
  {
    name: "jQuery",
    icon: "https://img.icons8.com/ios-filled/48/1169ae/jquery.png",
  },
  {
    name: "Git VCS",
    icon: "https://img.icons8.com/color/48/000000/git.png",
  },
  {
    name: "GitHub",
    icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
  },
  {
    name: "WordPress",
    icon: "https://img.icons8.com/color/48/000000/wordpress.png",
  },
];

function Skills() {
  const [skills, setSkills] = useState([]);

  const [fadeIn, setFadeIn] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setFadeIn(true);
    } else {
      setFadeIn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setSkills(skillsData);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="skills" id="Skills">
        <div className={`${fadeIn ? "zoominup" : "fade-up"}`}>
          <h2 className="heading text-center text-7xl font-bold  pt-[5%]">Tech Stack</h2>
        </div>
        <div className="container flex flex-wrap">
          <div  className={`row ${fadeIn ? "zoominup" : ""}`}>
          {skills.map((skill, index) => (
              <div key={index} className="bar">
                <div className="info">
                  <img
                    src={skill.icon}
                    alt=""
                  />
                  <span >
                    {skill.name}
                  </span>
                </div>
              </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
