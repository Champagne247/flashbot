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

  // Set up the Flashbots provider
  const flashbotsProvider = await FlashbotsBundleProvider.create(
    provider,
    fundingWallet
  );

  // You can now use the flashbotsProvider to send bundles to Flashbots

  // Example: Send a bundle
  const bundle = [
    {
      transaction: {
        to: "recipient-address-here",
        value: utils.parseEther("0.1"), // Amount in Ether
        gasPrice: utils.parseUnits("20", "gwei"),
      },
      signer: fundingWallet,
    },
  ];

  try {
    const bundleResponse = await flashbotsProvider.sendBundle(bundle);

    if (bundleResponse === FlashbotsBundleResolution.BundleIncluded) {
      console.log("Bundle was included in a block!");
    } else {
      console.log("Bundle was not included in a block.");
    }
  } catch (error) {
    console.error("Error sending bundle:", error);
  }

  // Continue with more script logic...
};

main();
