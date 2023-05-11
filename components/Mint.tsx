"use client";
import { useWallet } from "@/context/WalletContext";
import ConnectButton from "./ConnectButton";
import { ethers } from "ethers";
import { toast } from "react-hot-toast";
import { useState } from "react";
import abi from "../artifacts/contracts/ByteBunch.sol/ByteBunch.json";

type Props = {};

declare let window: any;

const Mint = (props: Props) => {
  const { address } = useWallet();

  const [loading, setLoading] = useState(false);

  const mintNFT = async () => {
    toast.loading("Minting NFT...");
    setLoading(true);
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
        abi.abi,
        signer
      );
      const transaction = await contract.mint(1, {
        value: ethers.parseEther("0.05"),
      });
      await transaction.wait();
      toast.success("NFT Minted!");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
            className="bg-amber-500 mt-4 text-white py-3 px-6 font-bold shadow-inner transition-all duration-300 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Mint an NFT (0.05 ETH)
          </button>
        ) : (
          <ConnectButton className="bg-amber-500 mt-12 text-white py-3 px-6 font-bold shadow-inner transition-all duration-300 hover:bg-amber-600" />
        )}
      </div>
    </>
  );
};

export default Mint;
