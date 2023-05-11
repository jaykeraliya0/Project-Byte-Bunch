"use client";
import React, { useEffect, useState } from "react";
import { useWallet } from "@/context/WalletContext";
import { ethers } from "ethers";

type Props = {
  className?: string;
};

declare let window: any;

const ConnectButton = ({ className }: Props) => {
  const { setAddress } = useWallet();

  const [account, setAccount] = useState<string>();

  const connectWallet = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const account = await signer.getAddress();
    setAddress(account);
    setAccount(account);
  };

  const getAccount = async () => {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length > 0) {
      setAddress(accounts[0]);
      setAccount(accounts[0]);
    }
  };

  useEffect(() => {
    getAccount();
  }, [getAccount]);

  return (
    <button onClick={connectWallet} className={className}>
      Connect to MetaMask
    </button>
  );
};

export default ConnectButton;
