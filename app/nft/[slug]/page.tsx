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

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    id: string;
  };
};

const ipfsToHttps = (ipfs: string) => {
  const gateway = "https://ipfs.io/ipfs/";
  const url = ipfs.replace("ipfs://", gateway);
  return url;
};

const getData = async (slug: string, id: string) => {
  try {
    const signer = new ethers.InfuraProvider(
      "goerli",
      process.env.INFURA_API_KEY
    );

    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
      abi.abi,
      signer
    );

    const tokenURI = ipfsToHttps(await contract.tokenURI(id));

    const metadataJSON = await fetch(tokenURI);
    const metadataJSONParsed = await metadataJSON.json();
    metadataJSONParsed.image = ipfsToHttps(metadataJSONParsed.image);

    return metadataJSONParsed;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getOwner = async (id: string) => {
  try {
    const signer = new ethers.InfuraProvider(
      "goerli",
      process.env.INFURA_API_KEY
    );

    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
      abi.abi,
      signer
    );

    const owner = await contract.ownerOf(id);

    return owner;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const NFTDetailsPage = async ({ params, searchParams }: Props) => {
  const { slug } = params;
  const { id } = searchParams;

  const data: NFT = await getData(slug, id);
  const owner = await getOwner(id);

  const parseDate = (date: number) => {
    // this function returns a difference between two dates in days | months | years based on date
    const today = new Date();
    const dateToCompare = new Date(date);

    const diffTime = Math.abs(today.getTime() - dateToCompare.getTime());

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 30) {
      return `${diffDays} days ago`;
    }

    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    if (diffMonths < 12) {
      return `${diffMonths} months ago`;
    }

    const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30 * 12));
    return `${diffYears} years ago`;
  };

  return (
    <div className="py-24 min-h-screen text-white px-8 lg:px-24 xl:px-48">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div>
          <div className="bg-[#111827] rounded-lg w-full border-2 border-gray-800 shadow-lg overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={data.image}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* transfer token */}
          <div className="hidden md:block">
            <TransferToken tokenId={id} />
          </div>
        </div>

        <div className="bg-red-5 space-y-4 mt-7 md:mt-0">
          <h1 className="text-2xl font-bold">{data.name}</h1>

          <div className="w-full border-2 rounded-lg border-gray-800 bg-[#111827]">
            <div className="border-b border-gray-800 font-medium p-3">
              <Bars3BottomLeftIcon className="h-5 w-5 inline-block mr-2" />
              Description
            </div>
            <p className="p-3">{data.description}</p>
          </div>

          <div className="w-full border-2 rounded-lg border-gray-800 bg-[#111827]">
            <div className="border-b border-gray-800 font-medium p-3">
              <TagIcon className="h-5 w-5 inline-block mr-2" />
              Attributes
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
              {data.attributes.map((attribute, index) => (
                <div
                  key={index}
                  className="border bg-cyan-950/30 border-gray-800 shadow p-3 flex flex-col rounded-lg"
                >
                  <span className="text-gray-400 text-sm">
                    {attribute.trait_type}
                  </span>
                  <span className="text-gray-100 text-lg">
                    {attribute.value}
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
                <span className="text-gray-200">Contract: </span>
                <Link
                  href={`https://goerli.etherscan.io/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-600"
                >
                  {process.env.NEXT_PUBLIC_CONTRACT_ADDRESS?.substring(0, 6) +
                    "..." +
                    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS?.substring(
                      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS.length - 4
                    )}
                </Link>
              </li>
              <li className="text-gray-400 flex justify-between">
                <span className="text-gray-200">Token ID: </span>
                <Link
                  href={`https://goerli.etherscan.io/token/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}?a=${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-600"
                >
                  {id}
                </Link>
              </li>
              <li className="text-gray-400 flex justify-between">
                <span className="text-gray-200">Owner: </span>
                <Link
                  href={`https://goerli.etherscan.io/address/${owner}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-600"
                >
                  {owner.substring(0, 6) + "..." + owner.substring(38)}
                </Link>
              </li>
              <li className="text-gray-400 flex justify-between">
                <span className="text-gray-200">Created: </span>
                <span className="text-gray-100">{parseDate(data.date)}</span>
              </li>
              <li className="text-gray-400 flex justify-between">
                <span className="text-gray-200">Token Standard: </span>
                <span className="text-gray-100">ERC-721</span>
              </li>
            </ul>
          </div>

          <div className="block md:hidden">
            <TransferToken tokenId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetailsPage;
