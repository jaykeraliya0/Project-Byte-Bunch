async function main() {
  // @ts-ignore
  const HelloWorld = await ethers.getContractFactory("ByteBunch");

  // Start deployment, returning a promise that resolves to a contract object
  const ByteBunch = await HelloWorld.deploy();
  console.log("Contract deployed to address:", ByteBunch.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
