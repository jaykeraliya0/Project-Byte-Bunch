"use client";
import { useWallet } from "@/context/WalletContext";
import ConnectButton from "./ConnectButton";
import { ethers } from "ethers";

type Props = {};

const Mint = (props: Props) => {
  const { address } = useWallet();

  const mintNFT = async () => {
    alert("This is not implemented yet");
  };

  return (
    <>
      {address && (
        <p className="text-white mt-4 font-medium text-xs drop-shadow text-center">
          Connected to <span className="text-cyan-500">{address}</span>
        </p>
      )}
      <div className="">
        {address ? (
          <button
            onClickCapture={mintNFT}
            className="bg-amber-500 mt-4 text-white py-3 px-6 font-bold shadow-inner transition-all duration-300 hover:bg-amber-600"
          >
            Mint an NFT
          </button>
        ) : (
          <ConnectButton className="bg-amber-500 mt-12 text-white py-3 px-6 font-bold shadow-inner transition-all duration-300 hover:bg-amber-600" />
        )}
      </div>
    </>
  );
};

export default Mint;
