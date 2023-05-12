"use client";
import React, { useEffect, useState } from "react";
import { useWallet } from "@/context/WalletContext";
import { ethers } from "ethers";
import { toast } from "react-hot-toast";

type Props = {
  className?: string;
};

declare let window: any;

const ConnectButton = ({ className }: Props) => {
  const { setAddress } = useWallet();

  const [account, setAccount] = useState<string>();

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast.error("MetaMask not installed");
      return;
    }
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const account = await signer.getAddress();
    setAddress(account);
    setAccount(account);
  };

  useEffect(() => {
    const getAccount = async () => {
      if (!window.ethereum) {
        return;
      }
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
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
