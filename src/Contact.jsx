import React from "react";
import {FaHeadset} from 'react-icons/fa';

function Contact() {
  return (
    <div className="bg-blue-200 flex flex-col items-center justify-center mb-12 pb-12 shadow-lg rounded-lg shadow-black overflow-hidden" id="Contact">
      <h1 className="text-5xl font-bold mt-12  mb-12 flex animate-bounce"data-aos="zoom-in-up" >
        <FaHeadset className="favicon"/> &nbsp; Get in <span className="italic text-purple-900
      "> Touch</span></h1>
      <div className="flex shadow-lg rounded-lg overflow-hidden shadow-black w-half p-20 bg-white"data-aos="zoom-in-up">
        <img
          src="contact.png"
          alt=""
          height={250}
          width={400}
          className="hidden md:flex mr-12"
        />
        <form action="/" method="POST" className="flex flex-col m-5 pl-5 w-[85%]">
          <input
            type="text"
            placeholder="Name"
            className="rounded-md mb-6 p-3 border border-black placeholder:text-black bg-blue-200"
          />
          <input
            type="text"
            placeholder="Email"
            className="rounded-md mb-6 placeholder:text-black bg-blue-200 p-3 border border-black"
          />
          <input
            type="text"
            placeholder="Phone"
            className="rounded-lg  placeholder:text-black bg-blue-200 mb-6  p-3 border border-black"
          />
          <textarea
            name="Message"
            id="Message"
            cols="30"
            rows="5"
            className="p-3 mb-5 rounded-md border placeholder:text-black bg-blue-200 border-black"
            placeholder-glow
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            style={{ backgroundColor: "#2506ad" ,boxShadow:"0px 5px 10px rgba(48, 68, 247, 0.6)",transition:"0.3s ease"}}
            className="text-white  ml-[70%] text-center  rounded-lg pr-0 m-0 p-2"
          >
          Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
