import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

const TransferTokenSkeleton = () => {
  return (
    <div className="bg-[#111827] rounded-lg w-full border-2 border-gray-800 shadow-lg overflow-hidden mt-5">
      <div className="border-b border-gray-800 font-medium p-3">
        <ArrowsRightLeftIcon className="h-5 w-5 inline-block mr-2" />
        Transfer Token
      </div>
      <div className="p-3">
        <form className="flex flex-col animate-pulse">
          <label htmlFor="to" className="text-sm sr-only">
            To
          </label>
          <input
            type="text"
            disabled
            name="to"
            id="to"
            placeholder="Address of the recipient"
            className="w-full border-2 border-gray-800 p-2 bg-[#111827] focus:outline-none focus:border-amber-500"
          />
          <button
            type="submit"
            disabled
            className="w-full bg-amber-500 mt-4 text-white py-3 px-6 font-bold shadow-inner transition-all duration-300 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed animate-pulse"
          >
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransferTokenSkeleton;
