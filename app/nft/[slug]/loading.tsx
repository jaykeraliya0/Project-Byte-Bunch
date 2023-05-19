import { ethers } from "ethers";
import abi from "@/artifacts/contracts/ByteBunch.sol/ByteBunch.json";
import { NFT } from "@/typings";
import Image from "next/image";
import {
  Bars3BottomLeftIcon,
  TagIcon,
  CodeBracketIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import TransferToken from "@/components/TransferToken";
import TransferTokenSkeleton from "@/components/TransferTokenSkeleton";

const NFTLoading = async () => {
  return (
    <div className="py-24 min-h-screen text-white px-8 lg:px-24 xl:px-48">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div>
          <div className="bg-[#111827] rounded-lg w-full border-2 border-gray-800 shadow-lg overflow-hidden">
            <img
              width={1000}
              height={1000}
              className="w-full h-full bg-gray-800 animate-pulse"
            />
          </div>
          {/* transfer token */}
          <div className="hidden md:block">
            <TransferTokenSkeleton />
          </div>
        </div>

        <div className="bg-red-5 space-y-4 mt-7 md:mt-0">
          <h1 className="text-2xl font-bold w-full bg-gray-800 animate-pulse rounded-full my-2">
            &nbsp;
          </h1>

          <div className="w-full border-2 rounded-lg border-gray-800 bg-[#111827] px-3">
            <div className="border-b border-gray-800 font-medium p-3">
              <Bars3BottomLeftIcon className="h-5 w-5 inline-block mr-2" />
              Description
            </div>
            <p className="w-full bg-gray-800 animate-pulse rounded-full my-2">
              &nbsp;
            </p>
            <p className="w-full bg-gray-800 animate-pulse rounded-full my-2">
              &nbsp;
            </p>
            <p className="w-full bg-gray-800 animate-pulse rounded-full my-2">
              &nbsp;
            </p>
          </div>

          <div className="w-full border-2 rounded-lg border-gray-800 bg-[#111827]">
            <div className="border-b border-gray-800 font-medium p-3">
              <TagIcon className="h-5 w-5 inline-block mr-2" />
              Attributes
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="border bg-cyan-950/30 border-gray-800 shadow p-3 flex flex-col rounded-lg"
                >
                  <span className="text-gray-400 text-sm w-full bg-gray-800 animate-pulse rounded-full my-2">
                    &nbsp;
                  </span>
                  <span className="text-gray-100 text-lg w-full bg-gray-800 animate-pulse rounded-full my-2">
                    &nbsp;
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full border-2 rounded-lg border-gray-800 bg-[#111827]">
            <div className="border-b border-gray-800 font-medium p-3">
              <CodeBracketIcon className="h-5 w-5 inline-block mr-2" />
              Metadata
            </div>
            <ul className="p-3 space-y-2">
              <li className="text-gray-400 flex justify-between">
                <span className="text-gray-200">&nbsp;</span>
                <p className="text-amber-500 hover:text-amber-600 w-full bg-gray-800 animate-pulse rounded-full my-2">
                  &nbsp;
                </p>
              </li>
              <li className="text-gray-400 flex justify-between">
                <span className="text-gray-200">&nbsp;</span>
                <p className="text-amber-500 hover:text-amber-600 w-full bg-gray-800 animate-pulse rounded-full my-2">
                  &nbsp;
                </p>
              </li>
              <li className="text-gray-400 flex justify-between">
                <span className="text-gray-200">&nbsp;</span>
                <p className="text-amber-500 hover:text-amber-600 w-full bg-gray-800 animate-pulse rounded-full my-2">
                  &nbsp;
                </p>
              </li>
              <li className="text-gray-400 flex justify-between">
                <span className="text-gray-200">&nbsp; </span>
                <span className="text-gray-100 w-full bg-gray-800 animate-pulse rounded-full my-2">
                  &nbsp;
                </span>
              </li>
              <li className="text-gray-400 flex justify-between">
                <span className="text-gray-200">&nbsp;</span>
                <span className="text-gray-100 w-full bg-gray-800 animate-pulse rounded-full my-2">
                  &nbsp;
                </span>
              </li>
            </ul>
          </div>

          <div className="block md:hidden">
            <TransferTokenSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTLoading;
