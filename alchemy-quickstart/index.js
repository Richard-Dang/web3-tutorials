// Setup: npm install alchemy-sdk
const { Network, Alchemy } = require("alchemy-sdk");

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "Y2QefzFbJDLdu3Kaup3VHTez8g0YnE7Y", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

async function getBlockNumber() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log("The latest block number is", latestBlock);
}

async function getBlock(blockNum) {
	const block = await alchemy.core.getBlock(blockNum);
  console.log(block);
}

// Subscription for new blocks on Eth Mainnet.
alchemy.ws.on("block", (blockNumber) =>
  console.log("The latest block number is", blockNumber)
);

// getBlockNumber();
// getBlock(15221026)

