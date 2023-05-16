"use client";
import { useWallet } from "@/context/WalletContext";
import { MetaMaskAvatar } from "react-metamask-avatar";

type Props = {};

const ProfileIcon = (props: Props) => {
  const { address } = useWallet();
  return <MetaMaskAvatar address={address} className="rounded-full" size={36} />;
};

export default ProfileIcon;
