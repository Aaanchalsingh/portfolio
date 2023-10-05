import React, { useState } from "react";
import { FaHeadset } from "react-icons/fa";
import "./media.css";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
const appSetting = {
  databaseURL:
    "https://portfolio-55003-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSetting);
const database = getDatabase(app);
const data1 = ref(database, "Portfolio");

function Contact() {
  const [data, setdata] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const inputChange = (event) => {
    const { name, value } = event.target;
    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formsubmit = (event) => {
    event.preventDefault();

    push(data1, data)
      .then(() => {
        console.log("Data sent to Firebase Database:", data);
        setdata({
          name: "",
          phone: "",
          email: "",
          message: "",
        });

        alert("Data Sent");

      })
      .catch((error) => {
        console.error("Error sending data to Firebase Database:", error);
        alert("Error sending data to Firebase Database.");
      });
  };

  return (
    <div
      className="bg-blue-200 flex flex-col items-center justify-center mb-12 pb-12 shadow-lg rounded-lg shadow-black overflow-hidden contact"
      id="Contact"
    >
      <h1
        className="text-5xl font-bold mt-12  mb-12 flex animate-bounce heading "
        data-aos="zoom-in-up"
      >
        <FaHeadset className="favicon" /> &nbsp; Get in{" "}
        <span className="italic text-purple-900"> Touch</span>
      </h1>
      <div
        className="flex shadow-lg rounded-lg overflow-hidden shadow-black w-half  md:w-[50%] p-20 bg-white container"
        data-aos="zoom-in-up"
      >
        <img
          src="contact.png"
          alt=""
          height={250}
          width={400}
          className="hidden md:flex mr-12"
        />
        <form
          action="/"
          method="POST"
          className="flex flex-col m-5 pl-5 w-[85%] md:w-[100%]"
          onSubmit={formsubmit}
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="rounded-md mb-6 p-3 border border-black placeholder:text-black bg-blue-200"
            value={data.name}
            onChange={inputChange}
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="rounded-md mb-6 placeholder:text-black bg-blue-200 p-3 border border-black"
            value={data.email}
            onChange={inputChange}
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone"
            className="rounded-lg  placeholder:text-black bg-blue-200 mb-6  p-3 border border-black"
            value={data.phone}
            onChange={inputChange}
          />
          <textarea
            name="message"
            id="Message"
            cols="30"
            rows="5"
            className="p-3 mb-5 rounded-md border placeholder:text-black bg-blue-200 border-black"
            placeholder-glow
            placeholder="Message"
            value={data.message}
            onChange={inputChange}
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: "#2506ad",
              boxShadow: "0px 5px 10px rgba(48, 68, 247, 0.6)",
              transition: "0.3s ease",
            }}
            className="text-white  ml-[70%] text-center  rounded-lg pr-0 m-0 p-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
