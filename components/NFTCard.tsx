import { NFT } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: NFT;
};

const NFTCard = ({ data }: Props) => {
  return (
    <Link href={`/nfts/${data.name}`}>
      <div className="max-w-sm mx-auto bg-gradient-to-l from-cyan-900 to-cyan-900 bg-black/70 bg-blend-multiply border border-cyan-950 rounded-lg shadow hover:shadow-md group transition-all duration-300 ease-in-out">
        <div className="w-full h-80 overflow-hidden rounded-t-lg shadow">
          <Image
            className="h-full w-full object-cover rounded-t-lg group-hover:scale-110 transition-all duration-300 ease-in-out"
            src={data.image}
            alt={data.name}
            width={500}
            height={500}
          />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-50">
            {data.name}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
