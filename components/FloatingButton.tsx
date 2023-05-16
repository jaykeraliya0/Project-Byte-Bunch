"use client";
import { useWallet } from "@/context/WalletContext";
import Image from "next/image";
import Link from "next/link";

const FloatingButton = () => {
  const { address } = useWallet();
  if (!address) return null;
  return (
    <div className="fixed z-20 bottom-0 right-[50%] left-[50%] m-auto py-10 flex justify-center itc">
      {/* view nfts circle button with image inside */}
      <Link href={`/nfts/${address}`}>
        <div className="relative h-16 w-16 rounded-full bg-amber-600/40 flex justify-center items-center group">
          {/* tooltip */}
          <div className="absolute hidden group-hover:block bg-white/80 w-fit rounded-md p-2 -top-[60%] transition-all duration-300">
            <p className="text-black text-xs w-14 text-center">View NFTs</p>
          </div>
          <Image
            src="/images/logo-transparent.png"
            alt="Byte Bunch Logo"
            width={50}
            height={50}
            className="h-full w-full object-cover object-center rounded-full"
          />
        </div>
      </Link>
    </div>
  );
};

export default FloatingButton;
