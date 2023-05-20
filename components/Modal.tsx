"use client";
import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment, useState } from "react";

type Props = {
  txHash: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ open, setOpen, txHash }: Props) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-950 backdrop-blur-sm bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-cyan-950/50 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-cyan-950/50 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-50"
                      >
                        NFT Minted Successfully!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-400">
                          Your NFT has been minted successfully. You can view
                          your transaction on the etherscan by clicking the
                          button below.
                          <br />
                          <span className="text-cyan-500 mt-3 text-xs">
                            Transaction Hash: {txHash}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#07171e] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <a
                    href={`https://goerli.etherscan.io/tx/${txHash}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:ring-offset-1 sm:ml-3 sm:w-auto sm:text-sm my-2"
                  >
                    View on Etherscan
                  </a>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:ring-offset-1 sm:ml-3 sm:w-auto sm:text-sm my-2"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
