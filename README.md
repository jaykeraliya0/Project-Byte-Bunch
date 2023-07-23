# Byte Bunch

Byte Bunch is a versatile NFT project based on the ERC-721 standard, offering users the ability to mint, own, and trade unique digital assets. With its modular architecture, users can easily customize the smart contract, update environment variables, and personalize the design to suit their specific needs. Whether you're an artist, collector, or NFT enthusiast, Byte Bunch provides a seamless and customizable platform to explore the world of NFTs, connect with a vibrant community, and unleash your creativity in the digital realm.



## Tech Stack

**Client:** Next.js, React, TailwindCSS, Ethers.

**Server:** Solidity, Hardhat, Infura


## Screenshots

![App Screenshot](/screenshots/screencapture-byte-bunch-vercel-app-2023-05-20-15_54_01.png)

![App Screenshot](/screenshots/screencapture-byte-bunch-vercel-app-nfts-0x011080eb860c929a57056009592eb46710ebfe8c-2023-05-20-15_54_11.png)

![App Screenshot](/screenshots/screencapture-byte-bunch-vercel-app-nft-0x1234567890abcdef-2023-05-20-15_54_16.png)


## How to deploy

1. Clone the project

```bash
git clone https://github.com/jaykeraliya0/Project-Byte-Bunch
```

2. upload your images and metadata files to ipfs and copy CID of metada **(don't forgate to link images in metadata jsons)**

3. Go to backend/contracts/ and edit ByteBunch.sol smart contract according to your requirements.

```solidity
uint256 public cost = 0.01 ether; // price per nft
uint256 public maxSupply = 10000; // maximum nuber of nfts of your collection
uint256 public maxMintAmountPerTx = 5; // number of nfts user can mint per transection
```

```solidity
constructor() ERC721("NAME", "SYMBOL") {
    setHiddenMetadataUri("ipfs:///__CID__.json");
}
```
update above feilds in smart contract

4. install dependencies

```bash
npm install
```

```bash
cd backend
npm install
```

5. configure hardhat.config.ts and deploy contract

```bash
npx hardhat run scripts/deploy.ts
```

6. copy and save your contract deployed address from console

7. build and run frontend next.js

```bash
npm run build
npm start
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Don't forgate to add environment veribles in vercel**
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. There are two .env files on at root and another at backend folder.

1. Root env

`NEXT_PUBLIC_CONTRACT_ADDRESS` **Address of smart contract after deployment**

`INFURA_API_KEY` **Infura API key**

2. Backend env

`API_URL` **You can get from alchemy**

`PRIVATE_KEY` **Private key of your ethereum wallet**

You can find the respective .env.example in project directories.

## License

[MIT](https://choosealicense.com/licenses/mit/)
