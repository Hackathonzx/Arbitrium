const { ethers } = require('hardhat');
const contractABI = require('./artifacts/contracts/CredentialNFT.sol/CredentialNFT.json').abi; // Adjust path if necessary

async function callFunction() {
    // Set up the provider for the Arbitrum Sepolia testnet
    const provider = new ethers.providers.JsonRpcProvider('https://sepolia-rollup.arbitrum.io/rpc'); 
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    
    // Replace with your actual contract address
    const contractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'; 

    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, contractABI, wallet);

    // Example of calling `issueCredentialWithMetadata`
    const recipientAddress = "0xRecipientAddress"; // Replace with the actual recipient address
    const metadata = "Metadata here"; // Replace with your metadata

    try {
        const tx = await contract.issueCredentialWithMetadata(recipientAddress, metadata);
        console.log('Transaction Hash:', tx.hash);
        
        // Wait for the transaction to be confirmed
        await tx.wait();
        console.log('Transaction confirmed!');
    } catch (error) {
        console.error('Error calling contract function:', error);
    }
}

// Execute the function
callFunction();
