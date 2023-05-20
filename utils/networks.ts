export const sepolia = {
  chainId: `0x${Number(11155111).toString(16)}`,
  chainName: "sepolia",
  nativeCurrency: {
    name: "sepolia",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://rpc.sepolia.io"],
  blockExplorerUrls: ["https://sepolia.io"],
};

export const goerli = {
  chainId: `0x${Number(5).toString(16)}`,
  chainName: "Goerli",
  nativeCurrency: {
    name: "Goerli",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://rpc.ankr.com/eth_goerli"],
  blockExplorerUrls: ["https://goerli.etherscan.io"],
};
