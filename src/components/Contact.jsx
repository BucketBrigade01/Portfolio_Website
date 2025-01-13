import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto px-40">
      <div className="flex justify-center items-center">
        <form 
          action="https://getform.io/f/azyyxwmb"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input 
            type="text" 
            name="name" 
            placeholder="Name"
            className="autofill!:bg-cyan-800 my-4 p-2 bg-cyan-800 border-2 border-cyan-800 rounded-md focus:outline-none placeholder-cyan-600"
          />

          <input 
            type="text" 
            name="email" 
            placeholder="Email"
            className="autofill!:bg-cyan-800 my-4 p-2 bg-cyan-800 border-2 border-cyan-800 rounded-md focus:outline-none placeholder-cyan-600"
          />
          <textarea 
            name="message" 
            placeholder="Message"
            rows="10"
            className="placeholder-cyan-600 my-4 mb-4 p-2 bg-cyan-800 border-2 border-cyan-800 text-cyan-300 rounded-md focus:outline-none"
          />
          <button type="submit" class="text-center inline-block px-8 py-3 w-max text-base font-md rounded-md
                     text-cyan-300 bg-cyan-600 drop-shadow-md border-transparent
                      hover:border-cyan-100 border-2">
            Contact Me
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact