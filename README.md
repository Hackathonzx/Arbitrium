**RefugeID**

# Table of Contents:
1. Overview
2. Smart Contracts
     - CredentialNFT
     - DIDRegistry
     - VerificationOracle

3. JavaScript Modules
     - callContractFunction.js
     -  interact.js
4. SDK Integration
5. Setting Up the Project
6. Usage Instructions
7. Cross-Chain Verification Process
8. Testing the System
9. License


1. **Overview**
This project is a decentralized identity verification system focused on issuing, managing, and verifying identity credentials using NFTs and cross-chain messaging. It leverages Solidity for core contract logic, Rust for performance-critical verification functions through Arbitrum Stylus, and Chainlink for oracle services to verify identity credentials across multiple chains.

2. # **Smart Contracts**
    a. CredentialNFT.sol: This contract issues NFTs as identity credentials. Each credential contains metadata specific to the user, such as name, and issue date. It also emits cross-chain verification events when credentials are verified on other chains.
- Key functions:
    - issueCredentialWithMetadata: Issues NFT credentials with metadata.
    - emitCrossChainVerificationEvent: Emits an event when identity is verified across chains.
    - burnCredential: Allows the credential owner to burn their credential.
    b. DIDRegistry.sol: A Decentralized Identifier (DID) registry allowing users to register their DIDs and retrieve DID metadata. The contract maps user addresses to DIDs and stores relevant information.
- Key functions:
    - registerDID: Registers a new DID for the user.
    - getDID: Retrieves the details of a registered DID.
    c. VerificationOracle.sol: This contract is designed to interact with Chainlink to perform cross-chain identity verification. It allows for mock and live requests using Chainlink’s CCIP.
- Key functions:
    - requestCrossChainIdentityVerification: Requests identity verification using Chainlink.
    - fulfill: Handles fulfillment from Chainlink oracle data.


3. **JavaScript Modules**
    - a. callContractFunction.js: This module interacts with the CredentialNFT contract to issue credentials. It uses ethers.js to call functions on the deployed contract.
- Key function: callFunction: Issues a credential NFT to a recipient with metadata.
    - b. interact.js: This script bridges tokens between Sepolia (L1) and Arbitrum Sepolia (L2) using the Arbitrum SDK and ethers.js. It deposits ETH from L1 to L2.
- Key function:: bridgeTokens: Bridges ETH from Sepolia to Arbitrum Sepolia.

4. **Arbitrum SDK Integration**
The Arbitrum SDK facilitates seamless bridging and interaction with contracts on the Arbitrum Layer 2 network.

5. **Setting Up the Project**
- Clone the repository.
- Install the required dependencies:
   - npm install
- Compile the Solidity contracts:
   - npx hardhat compile
- Set up your .env file with the following keys:
    - PRIVATE_KEY
    - ALCHEMY_API_KEY (or another RPC provider)

6. **Usage Instructions**
- To issue a credential NFT:
    - node ignition/modules/callContractFunction.js
- To bridge ETH to Arbitrum Sepolia:
    - node ignition/modules/interact.js

7. **Cross-Chain Verification Process**
- Credential NFTs are issued on-chain via the CredentialNFT contract.
- Cross-chain verification requests are handled via the VerificationOracle contract, utilizing Chainlink for secure data transfer.

8. **Testing the System**
- Unit tests can be written in the test/ folder for each contract.
- Scripts in callContractFunction.js and interact.js can be executed to test functionality.

9. **License**
This project is licensed under the MIT License.