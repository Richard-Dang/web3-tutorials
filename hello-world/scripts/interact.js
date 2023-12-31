const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

// For Hardhat
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// interact.js
const ethers = require("ethers");

// Provider
const alchemyProvider = new ethers.AlchemyProvider(
  (network = "sepolia"),
  API_KEY
);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const helloWorldContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);

async function main() {
  const message = await helloWorldContract.message();
  console.log("The message is: " + message);

  console.log("Updating the message...");
  const tx = await helloWorldContract.update("This is the new message 2.");
  await tx.wait();

  const newMessage = await helloWorldContract.message()

  console.log("The new message is: ", newMessage);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
