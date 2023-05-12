import { ethers } from "ethers";
import abi from "@/artifacts/contracts/ByteBunch.sol/ByteBunch.json";

export async function GET(request: Request) {
  try {
    const RPC = `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`;

    const provider = new ethers.JsonRpcProvider(RPC);

    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
      abi.abi,
      provider
    );

    const transaction = await contract.totalSupply();
    const num = Number(ethers.formatUnits(transaction)) * 10e17;

    return new Response(JSON.stringify(num), {
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify(e), {
      status: 500,
    });
  }
}
