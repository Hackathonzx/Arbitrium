const { ethers } = require("ethers");
const { EthBridger } = require("@arbitrum/sdk"); // Removed getL2Network
require('dotenv').config();

console.log("PRIVATE_KEY loaded:", !!process.env.PRIVATE_KEY);

async function bridgeTokens() {
    const l1Provider = new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/3cM-YKQgVGyQly4GOM1MWzdx4S2vMaQQ');
    const l2Provider = new ethers.JsonRpcProvider('https://arb-sepolia.g.alchemy.com/v2/3cM-YKQgVGyQly4GOM1MWzdx4S2vMaQQ');

    const l1Signer = new ethers.Wallet(process.env.PRIVATE_KEY, l1Provider);
    const l2Signer = new ethers.Wallet(process.env.PRIVATE_KEY, l2Provider);

    // Define L2 Network manually
    const l2Network = {
        chainID: 421613, // Arbitrum Sepolia Chain ID
        l1ChainID: 11155111, // Sepolia L1 Chain ID
        name: "Arbitrum Sepolia",
        explorerUrl: "https://sepolia-explorer.arbitrum.io"
    };

    // Create an EthBridger instance
    const ethBridger = new EthBridger(l2Network);

    // Deposit Ether
    const depositTx = await ethBridger.deposit({
        amount: ethers.parseEther('0.01'), // amount to deposit
        l1Signer: l1Signer,
    });

    console.log(`Deposit transaction hash: ${depositTx.hash}`);
    await depositTx.wait();

    console.log(`Tokens bridged to ${l2Signer.address}`);
}

bridgeTokens().catch(console.error);
