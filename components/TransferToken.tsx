"use client";
import { goerli } from "@/utils/networks";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { ethers } from "ethers";
import { useState } from "react";
import { toast } from "react-hot-toast";
import abi from "@/artifacts/contracts/ByteBunch.sol/ByteBunch.json";
import { useRouter } from "next/navigation";

type Props = {
  tokenId: string;
};

declare let window: any;

const TransferToken = ({ tokenId }: Props) => {
  const router = useRouter();

  const [address, setAddress] = useState<string>();
  const [loading, setLoading] = useState(false);

  const switchNetwork = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: goerli.chainId }],
      });
    } catch (error) {
      toast.error("Please switch to goerli Network");
    }
  };

  const transferToken = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const notification = toast.loading("Transferring token...");
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();
      const chainId = Number(ethers.formatUnits(network.chainId)) * 10e17;

      if (chainId !== parseInt(goerli.chainId)) {
        switchNetwork();
        throw new Error("Please switch to goerli Network and try again");
      }

      if (ethers.isAddress(address) === false) {
        throw new Error("Please enter a valid address");
      }

      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
        abi.abi,
        signer
      );
      const transaction = await contract.transferFrom(
        signer.getAddress(),
        address,
        tokenId
      );
      await transaction.wait();

      toast.success("Token transferred successfully", {
        id: notification,
      });
    } catch (error: any) {
      toast.error(error.message.split("(")[0], {
        id: notification,
      });
    }
    setLoading(false);
    router.refresh();
  };

  return (
    <div className="bg-[#111827] rounded-lg w-full border-2 border-gray-800 shadow-lg overflow-hidden mt-5">
      <div className="border-b border-gray-800 font-medium p-3">
        <ArrowsRightLeftIcon className="h-5 w-5 inline-block mr-2" />
        Transfer Token
      </div>
      <div className="p-3">
        <form className="flex flex-col" onSubmit={transferToken}>
          <label htmlFor="to" className="text-sm sr-only">
            To
          </label>
          <input
            type="text"
            name="to"
            id="to"
            placeholder="Address of the recipient"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border-2 border-gray-800 p-2 bg-[#111827] focus:outline-none focus:border-amber-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 mt-4 text-white py-3 px-6 font-bold shadow-inner transition-all duration-300 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransferToken;
