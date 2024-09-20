const { ethers } = require('hardhat');
const contractABI = require('../../artifacts/contracts/CredentialNFT.sol/CredentialNFT.json').abi; // Adjust path if necessary

async function callFunction() {
    // Hardhat provides a pre-configured ethers instance, so no need to manually create a provider.
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.provider); // Connect wallet to Hardhat's provider
    
    // Replace with your actual contract address
    const contractAddress = '0x069F92465a8795a06A28B1e85f320D57CE29Bc8F';

    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, contractABI, wallet);

    // Example of calling `issueCredentialWithMetadata`
    const recipientAddress = "0x1234567890abcdef1234567890abcdef12345678"; // Replace with the actual recipient address
    const metadata = JSON.stringify({
        name: "Credential for John Doe",
        issuedAt: new Date().toISOString(),
    });

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
