import React from "react";
import NFTCard from "@/components/NFTCard";
import { NFT } from "@/typings";
import { ethers } from "ethers";
import abi from "@/artifacts/contracts/ByteBunch.sol/ByteBunch.json";

type Props = {
  params: {
    slug: string;
  };
};

const ipfsToHttps = (ipfs: string) => {
  const gateway = "https://ipfs.io/ipfs/";
  const url = ipfs.replace("ipfs://", gateway);
  return url;
};

const getData = async (address: string) => {
  try {
    const signer = new ethers.InfuraProvider(
      "sepolia",
      process.env.INFURA_API_KEY
    );
    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
      abi.abi,
      signer
    );

    const tokens = await contract.walletOfOwner(address);

    const data = await Promise.all(
      tokens.map(async (token: any) => {
        const metadata = await contract.tokenURI(token);
        const metadataJSON = await fetch(ipfsToHttps(metadata));
        const metadataJSONParsed = await metadataJSON.json();
        metadataJSONParsed.image = ipfsToHttps(metadataJSONParsed.image);
        return metadataJSONParsed;
      })
    );

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const NFTs = async ({ params }: Props) => {
  const address = params.slug;

  const data: NFT[] = await getData(address);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-24 mt-20 py-10">
      {data.length > 0 ? (
        data.map((item) => <NFTCard key={item.name} data={item} />)
      ) : (
        <div className="text-center text-2xl text-gray-50 col-span-4">
          No NFTs found for address {address}
        </div>
      )}
    </div>
  );
};

export default NFTs;
