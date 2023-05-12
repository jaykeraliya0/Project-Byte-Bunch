"use client";
import { ethers } from "ethers";
import abi from "../artifacts/contracts/ByteBunch.sol/ByteBunch.json";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

type Props = {
  minted?: string;
};

declare let window: any;

const NFTNumber = ({ minted }: Props) => {
  const [loading, setLoading] = useState(true);
  const [nftNumber, setNFTNumber] = useState(0);

  const getNFTNumber = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/nft-number", {
        cache: "no-store",
      });
      const num = await res.json();

      setNFTNumber(Number(num));
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNFTNumber();
  }, [minted]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <h3 className="text-white text-2xl text-center font-bold w-2/3 mt-4">
          {nftNumber} / 41 <span className="text-">Minted</span>
        </h3>
      )}
    </>
  );
};

export default NFTNumber;
