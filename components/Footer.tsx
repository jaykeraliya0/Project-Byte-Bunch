import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-gradient-to-t from-cyan-900 to-cyan-900 bg-black/70 bg-blend-multiply bg-cover bg-center text-white">
      <div className="mx-16">
        <h1 className="text-4xl font-bold text-center py-10">
          Have a question?{" "}
          <span className="text-cyan-500 underline decoration-amber-600">
            Contact us!
          </span>
        </h1>
        <form className="flex flex-col space-y-2 w-full md:w-fit mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="email" />
          </div>
          <input placeholder="Subject" className="contactInput" type="text" />
          <textarea placeholder="Message" className="contactInput" />
          <button className="bg-cyan-600 transition-all py-5 px-10 text-black font-bold text-lg hover:bg-cyan-500">
            Send Message
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center py-10">
        <p className="text-gray-300 font-medium">
          © 2021 Byte Bunch. All rights reserved.
        </p>
      </div>
      <div className="flex justify-center pb-10">
        <a href="#top">
          <svg
            className="animate-pulse w-10 h-10 text-white hover:text-cyan-600 transition-all duration-300"
            fill="currentColor"
            height="800px"
            width="800px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
          >
            <path
              id="XMLID_224_"
              d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
