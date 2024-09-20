const ethers = require('ethers');
const { Bridge } = require('@arbitrum/sdk');

// Setup the L1 and L2 providers
const l1Provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_KEY');
const l2Provider = new ethers.providers.JsonRpcProvider('https://arb1.arbitrum.io/rpc');

// Use your wallet private key
const walletL1 = new ethers.Wallet(process.env.PRIVATE_KEY, l1Provider);
const walletL2 = new ethers.Wallet(process.env.PRIVATE_KEY, l2Provider);

// Function to bridge tokens from L1 to L2
async function bridgeTokens() {
    const bridge = new Bridge(walletL1, walletL2);
    await bridge.deposit({
        amount: ethers.utils.parseEther('1.0'), // amount to deposit
        recipient: walletL2.address,
    });
    console.log(`Tokens bridged to ${walletL2.address}`);
}

bridgeTokens().catch(console.error);
