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
    A. CredentialNFT.sol: This contract issues NFTs as identity credentials. Each credential contains metadata specific to the user, such as name, and issue date. It also emits cross-chain verification events when credentials are verified on other chains.
- Key functions:
    - issueCredentialWithMetadata: Issues NFT credentials with metadata.
    - emitCrossChainVerificationEvent: Emits an event when identity is verified across chains.
    - burnCredential: Allows the credential owner to burn their credential.
    B. DIDRegistry.sol: A Decentralized Identifier (DID) registry allowing users to register their DIDs and retrieve DID metadata. The contract maps user addresses to DIDs and stores relevant information.
- Key functions:
    - registerDID: Registers a new DID for the user.
    - getDID: Retrieves the details of a registered DID.
    C. VerificationOracle.sol: This contract is designed to interact with Chainlink to perform cross-chain identity verification. It allows for mock and live requests using Chainlink’s CCIP.
- Key functions:
    - requestCrossChainIdentityVerification: Requests identity verification using Chainlink.
    - fulfill: Handles fulfillment from Chainlink oracle data.


3. **JavaScript Modules**
    - A. callContractFunction.js: This module interacts with the CredentialNFT contract to issue credentials. It uses ethers.js to call functions on the deployed contract.
- Key function: callFunction: Issues a credential NFT to a recipient with metadata.
    - B. interact.js: This script bridges tokens between Sepolia (L1) and Arbitrum Sepolia (L2) using the Arbitrum SDK and ethers.js. It deposits ETH from L1 to L2.
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
    - CCIP_ROUTER_ADDRESS=0x2a9C5afB0d0e4BAb2BCdaE109EC4b0c4Be15a165
    - LINK_TOKEN_ADDRESS=0xb1D4538B4571d411F07960EF2838Ce337FE1E80E
    - ARBITRUM_CHAIN_ID=421614
    - jobId = 8ced832954544a3c98543c94a51d6a8d
    - ORACLE_ADDRESS=0xd36c6B1777c7f3Db1B3201bDD87081A9045B7b46

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


9. **Deploy script**
   - run the deploy script with ignition/modules/deploy.js --network arbitrumSepolia
   DIDRegistry deployed to: 0x359451AC3C73827A7653C0Ab7D30243844a55447
   CredentialNFT deployed to: 0x069F92465a8795a06A28B1e85f320D57CE29Bc8F
   VerificationOracle deployed to: 0x7c9D4E3769FD085566de1DB20E5703D3Ec50d37f

 - run npx hardhat run ignition/modules/callContractFunction.js --network arbitrumSepolia
  Transaction Hash: 0xbe0827a039da343db84ea6ed665b48f76c986785c21c009f9cf70aa68a03e89d
  Transaction confirmed!

  - run npx hardhat run ignition/modules/interact.js --network arbitrumSepolia

10. **License**
This project is licensed under the MIT License.