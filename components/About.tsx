import React from "react";

type Props = {
  data: {
    title: string;
    description: string;
  }[];
};

const About = ({ data }: Props) => {
  return (
    <div className="relative bg-gradient-to-l from-cyan-900 to-cyan-900 bg-black/70 bg-blend-multiply px-12 sm:px-8 md:px-16 lg:px-24 xl:px-48 pt-16">
      <svg
        className="hidden md:flex absolute -top-36 left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#07171e"
          fill-opacity="1"
          d="M0,64L60,64C120,64,240,64,360,64C480,64,600,64,720,74.7C840,85,960,107,1080,117.3C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="relative md:-mt-10 mb-16">
        <h1 className="text-white text-4xl text-center font-bold mb-8">
          What is <span className="text-cyan-600">Byte Bunch</span>?
        </h1>
        <p className="text-amber-500/70 font-semibold w-full sm:w-5/6 md:w-4/6 lg:w-3/6 text-center m-auto">
          Byte Bunch is a collection of unique characters NFTs, each with their
          own individual traits and personalities.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto text-white">
        {data.map((item, index) => (
          <div key={index} className="relative group h-full">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-600 to-amber-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
            <div className="relative space-y-5 px-7 h-full py-6 bg-cyan-950 ring-cyan-600 rounded-lg">
              <h1 className="text-3xl font-bold">
                {item.title.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={`${
                      index % 2 !== 0 ? "text-cyan-600" : "text-amber-600"
                    }`}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="text-gray-400 leading-6 font-medium text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
