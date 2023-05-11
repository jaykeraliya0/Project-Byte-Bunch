import React from "react";

const Steps = () => {
  return (
    <div className="bg-gradient-to-l from-cyan-900 to-cyan-900 bg-black/70 bg-blend-multiply py-10">
      <h1 className="text-center text-4xl capitalize text-white font-bold my-10">
        How to mint
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-20 gap-x-5 gap-y-16">
        <div className="flex gap-7 items-center">
          <h1
            style={{
              textShadow:
                "-1px -1px 0 #00ffa3, 1px -1px 0 #00ffa3,-1px 1px 0 #00ffa3,1px 1px 0 #00ffa3",
            }}
            className="font-bold text-7xl text-[#07171e] outline-4"
          >
            1
          </h1>
          <p className="font-bold text-white text-3xl w-4/6">
            Connect Your Wallet
          </p>
        </div>
        <div className="flex gap-7 items-center">
          <h1
            style={{
              textShadow:
                "-1px -1px 0 #5865f2, 1px -1px 0 #5865f2,-1px 1px 0 #5865f2,1px 1px 0 #5865f2",
            }}
            className="font-bold text-7xl text-[#07171e] outline-4"
          >
            2
          </h1>
          <p className="font-bold text-white text-3xl w-4/6">
            Click the mint button
          </p>
        </div>
        <div className="flex gap-7 items-center">
          <h1
            style={{
              textShadow:
                "-1px -1px 0 #ffe600, 1px -1px 0 #ffe600,-1px 1px 0 #ffe600,1px 1px 0 #ffe600",
            }}
            className="font-bold text-7xl text-[#07171e] outline-4"
          >
            3
          </h1>
          <p className="font-bold text-white text-3xl w-4/6">
            Confirm the transaction
          </p>
        </div>
        <div className="flex gap-7 items-center">
          <h1
            style={{
              textShadow:
                "-1px -1px 0 #ff004c, 1px -1px 0 #ff004c,-1px 1px 0 #ff004c,1px 1px 0 #ff004c",
            }}
            className="font-bold text-7xl text-[#07171e] outline-4"
          >
            4
          </h1>
          <p className="font-bold text-white text-3xl w-4/6">
            Receive Your NFTs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
