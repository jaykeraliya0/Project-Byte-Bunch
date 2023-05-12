"use client";
import React, { useEffect, useState } from "react";
import { useWallet } from "@/context/WalletContext";
import { ethers } from "ethers";
import { sepolia } from "@/utils/networks";
import { toast } from "react-hot-toast";

type Props = {
  className?: string;
};

declare let window: any;

const ConnectButton = ({ className }: Props) => {
  const { setAddress } = useWallet();

  const [account, setAccount] = useState<string>();

  const switchNetwork = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: sepolia.chainId }],
      });
    } catch (error) {
      toast.error("Please switch to Sepolia Network");
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast.error("Please install MetaMask to use this dApp");
      return;
    }
    await switchNetwork();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const chainId = await provider.getNetwork();

    const signer = await provider.getSigner();
    const account = await signer.getAddress();
    setAddress(account);
    setAccount(account);
  };

  useEffect(() => {
    const getAccount = async () => {
      if (!window.ethereum) return;
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      switchNetwork();
      if (accounts.length > 0) {
        setAddress(accounts[0]);
        setAccount(accounts[0]);
      }
    };
    getAccount();
  }, [setAddress]);

  return (
    <button onClick={connectWallet} className={className}>
      Connect to MetaMask
    </button>
  );
};

export default ConnectButton;
