import React from "react";
import {FaHeadset} from 'react-icons/fa';

function Contact() {
  return (
    <div className="bg-blue-200 flex flex-col items-center justify-center mb-12 pb-12 shadow-lg rounded-lg shadow-black" id="box4">
      <h1 className="text-5xl font-bold mt-5 mb-12 flex animate-bounce" >
        <FaHeadset className="favicon"/> &nbsp; Get in <span className="italic text-purple-900
      "> Touch</span></h1>
      <div className="flex shadow-lg rounded-lg shadow-black w-half p-20 bg-white">
        <img
          src="contact.png"
          alt=""
          height={250}
          width={400}
          className="mr-12 hover:animate-spin"
        />
        <form action="/" method="POST" className="flex flex-col">
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
            className="text-white flex w-
            30 p-2 ml-[70%] animate-bounce rounded-lg "
          >
          Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
