"use client";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { ethers } from "ethers";
import abi from "@/artifacts/contracts/ByteBunch.sol/ByteBunch.json";

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
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
        abi.abi,
        provider
      );
      const transaction = await contract.totalSupply();
      const num = Number(ethers.formatUnits(transaction)) * 10e17;

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
        <></>
      ) : (
        <h3 className="text-white text-2xl text-center font-bold w-2/3 mt-4">
          {nftNumber} / 41 <span className="text-">Minted</span>
        </h3>
      )}
    </>
  );
};

export default NFTNumber;
