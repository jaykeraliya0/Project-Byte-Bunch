import Image from "next/image";
import React from "react";

type Props = {};

const NFTs = (props: Props) => {
  return (
    <div className="relative h-[28rem] overflow-hidden bg-gradient-to-l from-cyan-900 to-cyan-900 bg-black/70 bg-blend-multiply">
      <div className="absolute overflow- whitespace-nowrap animate-[banner-move_100s_linear_infinite] left-0 top-0">
        <div className="flex flex-shrink-0 h-[28rem] w-full">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="border border-amber-950/40 bg-gradient-to-tr from-amber-950 to-cyan-950 bg-black/50 bg-blend-multiply shadow-xl shadow-cyan-400/20 h-80 w-80 m-5 rounded-lg p-5">
              <Image
                className="h-full w-full object-cover rounded-lg border border-cyan-950 shadow-inner"
                src={`/images/NFTs/${i}.jpg`}
                alt={`NFT-${i}`}
                width={512}
                height={512}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTs;
