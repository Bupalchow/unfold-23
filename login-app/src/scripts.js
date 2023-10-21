const ethers = require("ethers")
// const hre = require("hardhat");
// Connect to MetaMask

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner();
const abi = require("./abi.json")["abi"];
// Load the contract's ABI (Replace with the actual ABI)
const contractABI = abi;

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with your contract's address

const contract = new ethers.Contract(contractAddress,contractABI, signer);
// const username = document.getElementById('username').value;
// const github = document.getElementById('github').value;
// const linkedin = document.getElementById('linkedin').value;

export async function saveUserInfo(username, github, linkedin) {
    try {
        const tx = await contract.setUserInfo(username, github, linkedin);
        await tx.wait();
        console.log('User information saved on the blockchain.');
    } catch (error) {
        console.error('Error saving user information:', error);
    }
}


