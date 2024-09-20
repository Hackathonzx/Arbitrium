const { ethers } = require('hardhat');
const { Bridge } = require('@arbitrum/sdk');
const contractABI = require('./artifacts/contracts/CredentialNFT.sol/CredentialNFT.json').abi;

async function callFunction() {
    const provider = new ethers.providers.JsonRpcProvider('https://sepolia-rollup.arbitrum.io/rpc'); // For Arbitrum sepolia testnet
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const contractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'; // Replace with your contract address

    const contract = new ethers.Contract(contractAddress, contractABI, wallet);

    // Example of calling `issueCredentialWithMetadata`
    const tx = await contract.issueCredentialWithMetadata(
        "0xRecipientAddress", // Recipient address
        "Metadata here" // Metadata
    );
    console.log('Transaction Hash:', tx.hash);
}

callFunction();


