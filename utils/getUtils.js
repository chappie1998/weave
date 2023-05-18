import { NFTAbi__factory } from "@/contracts/nft";
import { Address } from "fuels";

export const getWallet = async () => {
  if (w.fuel) {
    const accounts = await w.fuel.accounts();
    const publicKey = accounts[0];
    return w.fuel.getWallet(publicKey);
  }
};

export const getPublicKey = async (w = window) => {
  if (w.fuel) {
    const accounts = await w.fuel.accounts();
    const publicKey = accounts[0];
    return Address.fromAddressOrString(publicKey).toB256();
  }
};

export const getContract = async () => {
  const contractId =
    "0x8d233115bde194ee9d0f7aedb9f0376c42543b22e20f66bdffe9437771f431c5";
  const wallet = await getWallet();
  return NFTAbi__factory.connect(contractId, wallet);
};
