# Flashbot

Flashbot recovery
import { ethers, providers, Wallet, utils, Transaction } from "ethers";
import {
  FlashbotsBundleProvider,
  FlashbotsBundleResolution,
} from "@flashbots/ethers-provider-bundle";
import { exit } from "process";

const FLASHBOTS_URL = "https://relay-goerli.flashbots.net";
const TOKEN_ADDRESS = "0x4E5d67a73bdb6BF68fADa7BDD7F455A7aA02C8ab";

const main = async () => {
  if (
    process.env.SPONSOR_KEY === undefined ||
    process.env.VICTIM_KEY === undefined ||
    process.env.FUNDING_KEY === undefined
  ) {
    console.error("Please set SPONSOR_KEY, VICTIM_KEY, and FUNDING_KEY env");
    exit(1);
  }

  const provider = new providers.JsonRpcProvider(
    "https://rpc.goerli.mudit.blog/"
  );

  // Input your recovery phrase (seed phrase) for the funding wallet here
  const fundingRecoveryPhrase = "your-funding-wallet-recovery-phrase-here";

  // Generate a wallet using the recovery phrase
  const fundingWallet = Wallet.fromMnemonic(fundingRecoveryPhrase);

  // The rest of the script...
  // (Replace this comment with the actual logic)

  // Example: You can access the funding wallet's address and private key like this:
  console.log("Funding Wallet's Address:", fundingWallet.address);
  console.log("Funding Wallet's Private Key:", fundingWallet.privateKey);

  // Continue with the script...
};

main();
