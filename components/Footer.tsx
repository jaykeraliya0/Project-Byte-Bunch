import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="relative bg-gradient-to-t from-cyan-900 to-cyan-900 bg-black/70 bg-blend-multiply bg-cover bg-center text-white">
      <div className="flex justify-center items-center py-10">
        <p className="text-gray-300 font-medium">
          <span className="text-cyan-500">Byte</span>{" "}
          <span className="text-amber-500">Bunch</span> Made by{" "}
          <Link
            href="https://github.com/jaykeraliya0"
            target="_blank"
            className="text-cyan-500 hover:text-cyan-600 transition-all duration-300"
          >
            Jay Keraliya
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
