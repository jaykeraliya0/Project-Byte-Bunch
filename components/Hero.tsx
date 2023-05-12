import Image from "next/image";
import React from "react";
import Mint from "./Mint";
import NFTNumber from "./NFTNumber";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 bg-[url('/images/background.jpg')] min-h-screen bg-cover bg-center bg-black/50 bg-blend-multiply">
      <div className="relative flex justify-center items-center">
        {/* <div className="absolute h-full w-full bg-green-500/20" /> */}
        <div className="relative h-full w-full flex flex-col justify-center items-center p-5 mb-16">
          <h1 className="text-white text-5xl lg:text-6xl text-center font-bold w-2/3">
            <span className="text-cyan-500">Byte</span>{" "}
            <span className="text-amber-500">Bunch</span> NFT Collection
          </h1>
          <Mint />
        </div>
      </div>
      <div className="relative h-full py-10 w-full flex justify-center items-center">
        <div className="absolute md:h-full md:w-full md:bg-cyan-500/20" />
        <div className="relative h-4/6 w-1/2 md:w-2/3 md:h-2/6 lg:h-3/6 xl:h-2/3 lg:w-1/2 m-auto p-3 bg-white">
          <Image
            priority
            src="/images/logo.jpg"
            alt="Byte Bunch Logo"
            height={1024}
            width={1024}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
