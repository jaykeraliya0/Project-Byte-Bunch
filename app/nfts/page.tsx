"use client";
import React, { use, useEffect, useState } from "react";
import { sepolia } from "@/utils/networks";
import { toast } from "react-hot-toast";
import { ethers } from "ethers";
import abi from "@/artifacts/contracts/ByteBunch.sol/ByteBunch.json";
import Image from "next/image";

type Props = {};

declare let window: any;

export type NFT = {
  dna: string;
  name: string;
  description: string;
  image: string;
  edition: number;
  date: number;
  attributes: Attribute[];
};

export type Attribute = {
  trait_type: string;
  value: string;
};

const NFTs = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<NFT[]>([]);

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

  const getSigner = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();
      const chainId = Number(ethers.formatUnits(network.chainId)) * 10e17;

      if (chainId !== parseInt(sepolia.chainId)) {
        switchNetwork();
        throw new Error("Please switch to Sepolia Network and try again");
      }

      const signer = await provider.getSigner();
      return signer;
    } catch (error: any) {
      throw new Error(error.message.split("(")[0]);
    }
  };

  const getContract = async () => {
    try {
      const signer = await getSigner();

      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
        abi.abi,
        signer
      );

      return contract;
    } catch (error: any) {
      throw new Error(error.message.split("(")[0]);
    }
  };

  const getTokenURI = async (tokenId: Number) => {
    try {
      const contract = await getContract();
      const tokenURI = await contract.tokenURI(tokenId);

      return tokenURI;
    } catch (error: any) {
      throw new Error(error.message.split("(")[0]);
    }
  };

  const getMetadata = async (tokenId: Number) => {
    try {
      const tokenURI = await getTokenURI(tokenId);
      const url = ipfsToHttps(tokenURI);

      const metadata = await fetch(url);
      const metadataJSON: NFT = await metadata.json();
      metadataJSON.image = ipfsToHttps(metadataJSON.image);

      return metadataJSON;
    } catch (error: any) {
      throw new Error(error.message.split("(")[0]);
    }
  };

  useEffect(() => {
    const loadNFTs = async () => {
      setLoading(true);
      try {
        const signer = await getSigner();
        const contract = await getContract();
        const tokens = await contract.walletOfOwner(signer.getAddress());

        tokens.map(async (token: any) => {
          const data = await getMetadata(token);
          setData((prev: any) => [...prev, data]);
        });
      } catch (error: any) {
        setError(error.message.split("(")[0]);
      }
      setLoading(false);
    };
    loadNFTs();
  }, []);

  const ipfsToHttps = (ipfs: string) => {
    const gateway = "https://ipfs.io/ipfs/";
    const url = ipfs.replace("ipfs://", gateway);
    return url;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  
  return (
    <div>
      <h1>NFTs</h1>
      <div className="grid grid-cols-3 gap-5 mx-24">
        {data.map((item) => (
          <div
            key={item.name}
            className="border-2 border-gray-200 rounded-lg p-4"
          >
            <Image width={500} height={500} src={item.image} alt={item.name} />
            <div className="text-center">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-sm">{item.description}</p>
            </div>
            <div>
              {item.attributes.map((attribute) => (
                <div
                  key={attribute.trait_type + attribute.value}
                  className="text-sm"
                >
                  <span className="font-bold">{attribute.trait_type}: </span>
                  <span>{attribute.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTs;
