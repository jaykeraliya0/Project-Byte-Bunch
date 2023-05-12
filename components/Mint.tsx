"use client";
import { useWallet } from "@/context/WalletContext";
import ConnectButton from "./ConnectButton";
import { ethers } from "ethers";
import { toast } from "react-hot-toast";
import { useState } from "react";
import abi from "../artifacts/contracts/ByteBunch.sol/ByteBunch.json";
import NFTNumber from "./NFTNumber";
import Modal from "./Modal";

type Props = {};

declare let window: any;

const Mint = (props: Props) => {
  const { address } = useWallet();

  const [loading, setLoading] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [open, setOpen] = useState(false);

  const mintNFT = async () => {
    const notification = toast.loading("Minting NFT...");
    setLoading(true);
    setOpen(false);
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
      setTransactionHash(transaction.hash);
      setOpen(true);

      toast.success("NFT Minted!", {
        id: notification,
      });
    } catch (error: any) {
      toast.error(error.message.split("(")[0], {
        id: notification,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal open={open} setOpen={setOpen} txHash={transactionHash} />
      <NFTNumber minted={transactionHash} />
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
