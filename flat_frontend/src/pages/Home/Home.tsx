import { Wallet } from "fuels";
import { NFTAbi__factory } from "../../contracts/nft";
import { Src20Abi__factory } from "../../contracts/src-20";

const Home = () => {
  // const wallet = Wallet.fromPrivateKey(
  //   "0xc852a8675f20538e3c578f56d59ea928035fda840b428e873e8abc04bb2a57ab",
  //   "https://beta-3.fuel.network/graphql"
  // );
  // const admin =
  //   "0xfec21894a55b54b3dd89ab836856403d20f20d2af3694e13e64a32b3e1d41f0a";

  // console.log(wallet);

  const wallet = Wallet.fromPrivateKey(
    "0xde97d8624a438121b86a1956544bd72ed68cd69f2c99555b08b1e8c51ffd511c"
  );
  const admin =
    "0x6b63804cfbf9856e68e5b6e7aef238dc8311ec55bec04df774003a2c96e0418e";

  // const admin =
  //   "0x776ca7cd27f4b12bd51f97952f31ebac15e2e65e013fd4b8efab81ddec643558";

  const contractId =
    "0x5a10be3dfd79a64498c6812cae57c4243d0e9046a2b2d0095362fba0b4925088";
  // const contract = new Contract(contractId, abi, wallet);
  const contract = NFTAbi__factory.connect(contractId, wallet);

  const newcontract = Src20Abi__factory.connect(
    "0x23748943d4e129e5213179b00f2053c89fa2ec82092c60d610384bfd53f087ae",
    wallet
  );

  // const lol = async () => {
  //   console.log("name start");
  //   const name = await newcontract.functions.total_supply().get();
  //   console.log("name", name);
  // };

  const constructor = async () => {
    console.log("constructor start");
    const constructor = await contract.functions
      .constructor({ Address: { value: admin } }, 10000)
      .txParams({ gasPrice: 1 })
      .call();
    console.log("constructor", constructor);
  };

  const max_supply = async () => {
    console.log("max_supply start");
    const max_supply = await contract.functions.max_supply().get();
    console.log("max_supply", max_supply);
  };

  const create_profile = async () => {
    console.log("create_profile start");

    const create_profile = await contract.functions
      .create_profile(
        { Address: { value: admin } },
        "https://bafkreiashdfbfs7xyinnlpr552rmz3kd4iozm5cygb3rtldsmomfqylkvm.ipfs.w3s.link/",
        "chappie"
      )
      .txParams({ gasPrice: 1 })
      .call();
    console.log("create_profile", create_profile);
  };

  const profle_data = async () => {
    console.log("profle_data start");
    const profle_data = await contract.functions.profle_data(0).get();
    console.log("profle_data", profle_data.value?.handle.split(" ")[0]);
  };

  const block = async () => {
    const p = wallet.provider;
    const b = await p.getBlockNumber();
    console.log(+b);
  };
  block();

  const follow = async () => {
    console.log("follow start");
    const follow = await contract.functions
      .follow(0)
      .txParams({ gasPrice: 1 })
      .call();
    console.log("follow", follow);
  };

  const unfollow = async () => {
    console.log("unfollow start");
    const unfollow = await contract.functions
      .unfollow(0)
      .txParams({ gasPrice: 1 })
      .call();
    console.log("unfollow", unfollow);
  };

  const get_follow = async () => {
    console.log("get_follow start");
    const get_follow = await contract.functions.get_follow(0, 1).get();
    console.log("get_follow", get_follow);
  };

  const create_post = async () => {
    console.log("create_post start");
    const create_post = await contract.functions
      .create_post(
        "https://bafkreibmisoth32ntygx2iubk7b4fcemomgybjxpbxngqjzzx42h3tgw5m.ipfs.w3s.link/",
        2
      )
      .txParams({ gasPrice: 1 })
      .call();
    console.log("create_post", create_post);
  };

  const post_data = async () => {
    console.log("post_data start");
    const post_data = await contract.functions.post_data(0).get();
    console.log("post_data", post_data);
  };

  const like_post = async () => {
    console.log("like_post start");
    const like_post = await contract.functions
      .like_post(0)
      .txParams({ gasPrice: 1 })
      .call();
    console.log("like_post", like_post);
  };

  const unlike_post = async () => {
    console.log("unlike_post start");
    const unlike_post = await contract.functions
      .unlike_post(0)
      .txParams({ gasPrice: 1 })
      .call();
    console.log("unlike_post", unlike_post);
  };

  const comment_post = async () => {
    console.log("comment_post start");
    const comment_post = await contract.functions
      .comment_post(
        0,
        "https://bafkreie7qjq564mty2tdd7juhoeachbbi74nyedf37bdfxhwytyve64rwq.ipfs.w3s.link/"
      )
      .txParams({ gasPrice: 1 })
      .call();
    console.log("comment_post", comment_post);
  };

  const collect_post = async () => {
    console.log("collect_post start");
    const collect_post = await contract.functions
      .collect_post(0)
      .txParams({ gasPrice: 1 })
      .callParams({
        forward: [2],
      })
      .call();
    console.log("collect_post", collect_post);
  };

  return (
    <main>
      <div>{/* <button onClick={lol}>lol</button> */}</div>
      <div>
        <button onClick={constructor}>constructor</button>
      </div>
      <div>
        <button onClick={max_supply}>max_supply</button>
      </div>
      <div>
        <button onClick={create_profile}>create_profile</button>
      </div>
      <div>
        <button onClick={profle_data}>profle_data</button>
      </div>
      <div>
        <button onClick={follow}>follow</button>
      </div>
      <div>
        <button onClick={unfollow}>unfollow</button>
      </div>
      <div>
        <button onClick={get_follow}>get_follow</button>
      </div>
      <div>
        <button onClick={create_post}>create_post</button>
      </div>
      <div>
        <button onClick={post_data}>post_data</button>
      </div>
      <div>
        <button onClick={like_post}>like_post</button>
      </div>
      <div>
        <button onClick={unlike_post}>unlike_post</button>
      </div>
      <div>
        <button onClick={comment_post}>comment_post</button>
      </div>
      <div>
        <button onClick={collect_post}>collect_post</button>
      </div>
    </main>
  );
};

// import React, { useEffect, useState } from "react";
// import {
//   Address,
//   ScriptTransactionRequest,
//   TransactionResponse,
//   Wallet,
//   WalletLocked,
//   WalletUnlocked,
//   bn,
//   BN,
//   Contract,
// } from "fuels";
// import { CIDString, getFilesFromPath, Web3Storage } from "web3.storage";
// import { create } from "ipfs-http-client";

// import { NFTAbi__factory } from "../../contracts/nft";
// import { NftMarketplaceAbi__factory } from "../../contracts/marketplace";
// // import { _abi as nftabi } from "../../contracts/nft/factories/NFTAbi__factory";
// // import { _abi } from "../../contracts/marketplace/factories/NftMarketplaceAbi__factory";

// const Home = () => {
//   type TokenMetaData = {
//     name: string;
//     // symbol: string;
//     token_uri: string;
//   };

//   const [name, setName] = useState("");
//   const [symbol, setSymbol] = useState("");
//   const [image, setImage] = useState("");
//   const [nftName, setNftName] = useState("");
//   const [description, setDescription] = useState<any[]>([]);
//   const [nftsData, setNftsData] = useState<any[]>([]);
//   const [nftData, setNftData] = useState<string[]>([]);
//   const [imgs, setImgs] = useState<FileList | null>(null);
//   const [mintData, setMintData] = useState<any>([]);
//   const [cids, setCids] = useState<any>([]);

//   let token: Web3Storage;
//   if (process.env.REACT_APP_WEB_STORAGE_TOKEN) {
//     token = new Web3Storage({ token: process.env.REACT_APP_WEB_STORAGE_TOKEN });
//   }

//   const getLinks = async (path: string) => {
//     // const path = "QmTERirRYntfquUvT5hiJoc3zqJhoHgdnG2qeV8DPkNEkG";
//     const url = "https://dweb.link/api/v0";
//     const ipfs = create({ url });

//     const links = [];
//     for await (const link of ipfs.ls(path)) {
//       console.log(link.cid.toString());
//       links.push(link);
//     }
//     return links;
//   };

//   // const md1: TokenMetaData = {
//   //   name: "Booty Demons #1",
//   //   symbol: "BD #1",
//   //   token_uri: "QmYy65NTTXqM9PFwvs9rBBaYbG8xbHaaZDGN9QyRbkEERo",
//   // }

//   // const md2: TokenMetaData = {
//   //   name: "Booty Demons #2",
//   //   symbol: "BD #2",
//   //   token_uri: "Qmbi5ennNe3bsvGmqREfMhyRCsiPmNjP8RfmtBDMf56T4G",
//   // }

//   // const mintData: any = [md1, md2];

//   // const wallet1 = Wallet.generate();
//   // console.log("private key", wallet1.privateKey, wallet1.address.toB256());

//   const wallet = Wallet.fromPrivateKey(
//     "0xc852a8675f20538e3c578f56d59ea928035fda840b428e873e8abc04bb2a57ab",
//     // "https://node-beta-2.fuel.network/graphql"
//     "https://beta-3.fuel.network/graphql"
//   );

//   const admin =
//     "0xfec21894a55b54b3dd89ab836856403d20f20d2af3694e13e64a32b3e1d41f0a";

//   // const admin =
//   //   "0x776ca7cd27f4b12bd51f97952f31ebac15e2e65e013fd4b8efab81ddec643558";

//   // const isConnected = await window.FuelWeb3.connect();
//   // expect(isConnected).toBeTruthy();

//   // const wallet = Wallet.fromPrivateKey(
//   //   "0xde97d8624a438121b86a1956544bd72ed68cd69f2c99555b08b1e8c51ffd511c"
//   //   // "https://node-beta-2.fuel.network/graphql"
//   // );
//   // const admin =
//   //   "0x6b63804cfbf9856e68e5b6e7aef238dc8311ec55bec04df774003a2c96e0418e";

//   // console.log("address", wallet.address.toString());
//   const getBalance = async () => {
//     wallet.getBalance().then((res) => {
//       console.log(res.toNumber());
//     });
//   };

//   const decimal = 9;

//   const contractId =
//     "0x029d9acc17e65bce377b8b625cc0a49800750efae3ace3bac50bbf44a89b859c";
//   const marketplaceContract = NftMarketplaceAbi__factory.connect(
//     contractId,
//     wallet
//   );
//   // const marketplaceContract = new Contract(contractId, _abi, wallet);

//   const NFTContractId =
//     "0x9ca97176d24ae2f0461b9176ef5385b56f3f2c693d590919a8501046f1e4aea8";
//   const NFTContract: Contract = NFTAbi__factory.connect(NFTContractId, wallet);
//   // const NFTContract = new Contract(NFTContractId, nftabi, wallet);

//   function getFiles(e: React.ChangeEvent<HTMLInputElement>) {
//     if (e.target.files) {
//       setImgs(e.target.files);
//       console.log(e.target.files[0].name);
//     }
//   }

//   const storeFilesDirectory = async (files: any) => {
//     const client = token;
//     const cid = await client.put(files);
//     console.log("stored files with cid:", cid);
//     return cid;
//   };

//   const storeFiles = async (files: any) => {
//     const client = token;
//     const cid = await client.put(files, {
//       wrapWithDirectory: false,
//     });
//     console.log("stored files with cid:", cid);
//     return cid;
//   };

//   function makeFileObjects(meta_data: {}) {
//     const blob = new Blob([JSON.stringify(meta_data)], {
//       type: "application/json",
//     });

//     if (imgs) {
//       const files = [
//         // new File(['contents-of-file-1'], 'plain-utf8.txt'),
//         new File([blob], imgs[0].name.split(".")[0] + ".json"),
//       ];
//       return files;
//     }
//   }

//   // const connect = async () => {
//   //   const isConnected = await window.FuelWeb3.connect();
//   //   console.log("Connection response", isConnected);
//   //   const accounts = await window.FuelWeb3.accounts();
//   //   const toAddress = Address.fromString(accounts[0]).toB256();
//   //   console.log(toAddress);
//   // };

//   const callAdminResp2 = async () => {
//     // const callSetAdminResp = await callSetAdmin(contractId, wallet, "0x54944e5b8189827e470e5a8bacfc6c3667397dc4e1eef7ef3519d16d6d6c6610");
//     // console.log("some1", callSetAdminResp);
//     const callAdminRespTwo = await NFTContract.functions.admin().get();
//     console.log("some2", callAdminRespTwo);
//   };

//   const callConstructorResp = async () => {
//     console.log("some1 start");
//     const consttructor = await NFTContract.functions
//       .constructor(true, { Address: { value: admin } }, 10000)
//       .txParams({ gasPrice: 1 })
//       .call();
//     console.log("some1", consttructor);
//   };

//   const change_max_supply = async () => {
//     console.log("change_max_supply start");
//     const change_max_supply = await NFTContract.functions
//       .change_max_supply(10000)
//       .txParams({ gasPrice: 1 })
//       .call();
//     console.log("change_max_supply", change_max_supply);
//   };

//   const max_supply = async () => {
//     console.log("max_supply start");
//     const max_supply = await NFTContract.functions.max_supply().get();
//     console.log("max_supply", max_supply);
//   };

//   const total_supply = async () => {
//     console.log("total_supply start");
//     const total_supply = await NFTContract.functions.total_supply().get();
//     console.log("total_supply", total_supply);
//   };

//   const callConstructorRespmarket = async () => {
//     console.log("some1 start");
//     const consttructor = await marketplaceContract.functions
//       .constructor(true, { Address: { value: admin } })
//       .txParams({ gasPrice: 1 })
//       .call();
//     console.log("some1", consttructor);
//   };

//   const newadmin = async () => {
//     console.log("some1 start");
//     const consttructor = await marketplaceContract.functions
//       .set_admin({
//         Address: {
//           value:
//             "0xfec21894a55b54b3dd89ab836856403d20f20d2af3694e13e64a32b3e1d41f0a",
//         },
//       })
//       .txParams({ gasPrice: 1 })
//       .call();
//     console.log("some1", consttructor);
//   };

//   async function retrieveFiles() {
//     const cid = "bafybeig557z36i75776kufvwnhkrqaask54bzfbl4625ozwenampfwgu74";
//     console.log(cid);

//     const res = await token.get(cid);
//     const files = await res?.files();
//     console.log(files);

//     setCids(files);
//     // let cids = [];
//     // if (files) {
//     //   for (const file of files) {
//     //     console.log(`${file.cid}: ${file.name} (${file.size} bytes)`);
//     //     // cids.push({ name: file.name, cid: file.cid });
//     //     cids.push("https://" + file.cid + ".ipfs.w3s.link");
//     //   }
//     // }
//     // setCids(cids);
//     // console.log(cids);
//   }

//   const upload = async () => {
//     const cid = await storeFilesDirectory(imgs);
//     console.log(cid);
//     // storeFiles(imgs).then(async (cid) => {
//     //   let nftMetaData = {
//     //     name: nftName,
//     //     image: cid,
//     //     description: "Anger me to the sun",
//     //     attributes: [],
//     //   };
//     //   // const md1: TokenMetaData = {
//     //   //   name: "test 1",
//     //   //   symbol: "BD #2",
//     //   //   token_uri: cid.toString(),
//     //   // }
//     //   // console.log("uri", md1);
//     //   // const mintData = [md1];
//     //   storeFiles(storeFiles(nftMetaData)).then(async (cid) => {
//     //     const md1: TokenMetaData = {
//     //       name: nftName,
//     //       // symbol: "AM #2",
//     //       token_uri: cid,
//     //     };
//     //     console.log("md1", md1);
//     //     const mintData = [md1];
//     //     setMintData(mintData);
//     //   });
//     // });
//   };

//   const mint = async (token: any) => {
//     // const NFTAdmin = await NFTContract.functions.admin().get();
//     // console.log("NFTAdmin", NFTAdmin);
//     const mintData: TokenMetaData = {
//       token_uri:
//         "https://bafkreidhmmldn6o5nxyfqf65x5jz7f66qcj4xy2axv2onefkzdbv4i7yta.ipfs.w3s.link/",
//       name: "nftName 0" + (token + 1),
//     };
//     console.log(mintData);

//     const mintedNFT = await NFTContract.functions
//       .mint({ Address: { value: admin } }, mintData)
//       .txParams({ gasPrice: 100 })
//       .call();

//     console.log("mint", mintedNFT);
//   };

//   const uploadandmint = async (token: any) => {
//     const md: TokenMetaData = {
//       token_uri: "https://" + cids[token].cid + ".ipfs.w3s.link",
//       name: "nftName 0" + (token + 1),
//     };
//     console.log("md1", md);
//     const mintedNFT = await NFTContract.functions
//       .mint({ Address: { value: admin } }, md)
//       .txParams({ gasPrice: 1 })
//       .call();
//     console.log("mint", mintedNFT);
//   };

//   const batch_mint = async () => {
//     const md1: TokenMetaData = {
//       token_uri: "https://" + cids[0].cid + ".ipfs.w3s.link",
//       name: "nftName 00",
//     };
//     const md2: TokenMetaData = {
//       token_uri: "https://" + cids[1].cid + ".ipfs.w3s.link",
//       name: "nftName 00",
//     };
//     console.log("md1", [md1, md2]);
//     const batch_mint = await NFTContract.functions
//       .batch_mint({ Address: { value: admin } }, [md1])
//       .txParams({ gasPrice: 1 })
//       .call();
//     console.log("batch_mint", batch_mint);
//   };

//   // useEffect(() => {
//   //   const nftarray: any[] = [];
//   //   const loadData = async () => {
//   //     const total_supply = await (
//   //       await NFTContract.functions.total_supply().get()
//   //     ).value.toNumber();
//   //     for (let i = 0; i < total_supply; i++) {
//   //       // const base = ".ipfs.w3s.link";
//   //       const metaData = await NFTContract.functions.token_metadata(i).get();
//   //       console.log(metaData);

//   //       // if (metaData !== undefined) {
//   //       const name = metaData.value?.name;
//   //       if (metaData.value) {
//   //         const res = await fetch(metaData.value?.token_uri);
//   //         const data = await res.json();

//   //         const url = data.image;
//   //         const desc = data.description;
//   //         nftarray.push({ name, image: url, desc: desc });
//   //       }
//   //       // }
//   //     }
//   //     setNftsData(nftarray);
//   //   };
//   //   loadData();
//   //   // connect();
//   // }, []);

//   const owner_of = async () => {
//     const owner_of = await NFTContract.functions.owner_of(7).get();
//     console.log("owner_of", owner_of.value);
//   };

//   const token_metadata = async () => {
//     console.log("token_metadata");
//     const token_metadata = await NFTContract.functions.token_metadata(0).get();
//     console.log("token_metadata", token_metadata);
//     console.log("token_metadata", String(token_metadata.value?.token_uri));
//   };

//   const approveNFT = async (token: any) => {
//     const approve_nft = await NFTContract.functions
//       .approve({ ContractId: { value: contractId } }, token)
//       .txParams({ gasPrice: 1 })
//       .call();
//     console.log("approve_nft", approve_nft);
//   };

//   const set_approval_for_all = async (token: any) => {
//     const set_approval_for_all = await NFTContract.functions
//       .set_approval_for_all(true, { ContractId: { value: contractId } })
//       .txParams({ gasPrice: 1 })
//       .call();
//     console.log("set_approval_for_all", set_approval_for_all);
//   };

//   const transferFrom = async () => {
//     console.log("transfer_from");
//     const transfer_from = await NFTContract.functions
//       .transfer_from(
//         { Address: { value: admin } },
//         { ContractId: { value: contractId } },
//         26
//       )
//       .txParams({ gasPrice: 50 })
//       .call();
//     console.log("transfer_from", transfer_from);
//   };

//   const listNFT = async (token: any) => {
//     const list_nft = await marketplaceContract.functions
//       .list_nft({ value: NFTContractId }, token, 0.1 * 1e9)
//       .txParams({ gasPrice: 1 })
//       .addContracts([NFTContract])
//       .call();
//     console.log("list_nft", list_nft);
//     // console.log("list_nft", "list_nft");
//   };

//   const mintAndList = async () => {
//     // for (let i = 0; i < 10; i++) {
//     const token = 0;
//     await mint(token);
//     // await approveNFT(token);
//     // await listNFT(token);
//     console.log(token);
//     // }
//   };

//   const uploadmintandlist = async () => {
//     // for (let i = 28; i < 81; i++) {
//     const token = 0;
//     // await batch_mint();

//     await uploadandmint(token);
//     // await approveNFT(token);
//     // await listNFT(token);
//     console.log(token);
//     // }
//   };

//   const delist_nft = async () => {
//     const delist_nft = await marketplaceContract.functions
//       .delist_nft({ value: NFTContractId }, 0)
//       .addContracts([NFTContract])
//       .call();
//     console.log("delist_nft", delist_nft);
//   };

//   const buy_nft = async () => {
//     const data = await marketplaceContract.functions
//       .get_nft_data({ value: NFTContractId }, 3)
//       .get();
//   };

//   const get_nft_data = async () => {
//     const get_nft_data = await marketplaceContract.functions
//       .get_nft_data({ value: NFTContractId }, 0)
//       .get();
//     console.log("get_nft_data", get_nft_data);
//   };

//   const get_balance = async () => {
//     const get_balance = await marketplaceContract.functions.get_balance().get();
//     console.log("get_balance", get_balance.value.toNumber() / 1e9);
//   };

//   const change_nft_price = async () => {
//     const change_nft_price = await marketplaceContract.functions
//       .change_nft_price({ value: NFTContractId }, 0, 8)
//       .call();
//     console.log("change_nft_price", change_nft_price);
//   };

//   const make_offer = async () => {
//     const amount = 0.05 * 10 ** decimal;
//     const make_offer = await marketplaceContract.functions
//       .make_offer({ value: NFTContractId }, 2)
//       .txParams({ gasPrice: 1 })
//       .callParams({
//         forward: [amount],
//       })
//       .call();
//     console.log("make_offer: ", make_offer);
//   };

//   // const create_auction = async () => {
//   //   console.log("create_auction");
//   //   console.log(wallet.provider.getBlockNumber());

//   //   await approveNFT(8);
//   //   const create_auction = await marketplaceContract.functions
//   //     .create_auction(
//   //       { value: NFTContractId },
//   //       9,
//   //       { Address: { value: admin } },
//   //       60,
//   //       0.1 * 1e9,
//   //       1 * 1e9
//   //     )
//   //     .addContracts([NFTContract])
//   //     .txParams({ gasPrice: 1 })
//   //     .call();
//   //   console.log("create_auction", create_auction);
//   // };

//   // const cancel_auction = async () => {
//   //   console.log("cancel_auction");
//   //   const cancel_auction = await marketplaceContract.functions
//   //     .cancel_auction({ value: NFTContractId }, 0)
//   //     .addContracts([NFTContract])
//   //     .txParams({ gasPrice: 1 })
//   //     .call();
//   //   console.log("cancel_auction", cancel_auction);
//   // };

//   // const auction_withdraw = async () => {
//   //   console.log("auction_withdraw");
//   //   const auction_withdraw = await marketplaceContract.functions
//   //     .auction_withdraw({ value: NFTContractId }, 7)
//   //     .addContracts([NFTContract])
//   //     .txParams({ gasPrice: 1 })
//   //     .call();
//   //   console.log("auction_withdraw", auction_withdraw);
//   // };

//   // const bid = async () => {
//   //   console.log("bid");
//   //   const bid = await marketplaceContract.functions
//   //     .bid({ value: NFTContractId }, 0)
//   //     .addContracts([NFTContract])
//   //     .txParams({ gasPrice: 1 })
//   //     .callParams({
//   //       forward: [0.1 * 1e9],
//   //     })
//   //     .call();
//   //   console.log("bid", bid);
//   // };

//   const block = async () => {
//     const p = wallet.provider;
//     const b = await p.getBlockNumber();
//     console.log(+b);
//   };
//   block();

//   // const auction_info = async () => {
//   //   console.log("auction_info");
//   //   let p = wallet.provider;
//   //   let d = await (await p.getBlockNumber()).toNumber();
//   //   console.log(d);
//   //   let t = Number((await p.getBlock(d))?.time);

//   //   const auction_info = await marketplaceContract.functions
//   //     .auction_info({ value: NFTContractId }, 8)
//   //     .get();
//   //   console.log("auction_info", auction_info);
//   //   let da = Number(auction_info.value?.end_block);
//   //   if (t && da) {
//   //     console.log("auction_info", da, t);
//   //   }
//   // };

//   const getAdmin = async () => {
//     console.log("getAdmin");
//     const getAdmin = await marketplaceContract.functions.admin().get();
//     console.log("getAdmin", getAdmin);
//   };
//   return (
//     <div>
//       {/* <div>
//         <button onClick={create_auction}>create_auction</button>
//       </div>
//       <div>
//         <button onClick={bid}>bid</button>
//       </div>
//       <div>
//         <button onClick={cancel_auction}>cancel_auction</button>
//       </div>
//       <div>
//         <button onClick={auction_withdraw}>auction_withdraw</button>
//       </div>
//       <div>
//         <button onClick={auction_info}>auction_info</button>
//       </div> */}
//       <div>
//         <button onClick={newadmin}>newadmin</button>
//       </div>
//       <div>
//         <button onClick={getAdmin}>get admin</button>
//       </div>
//       <button onClick={get_balance}>get_balance</button>
//       <div>
//         <input type="file" onChange={getFiles} multiple />
//         <input
//           type="text"
//           placeholder="name"
//           onChange={(e) => setNftName(e.target.value)}
//         />
//         <button onClick={upload}>upload</button>
//         <button onClick={retrieveFiles}>retrieveFiles</button>
//         <button onClick={getBalance}>getBalance</button>
//       </div>
//       {/* <div>
//         <button
//           onClick={getLinks}
//         >
//           test
//         </button>
//       </div> */}
//       <div>
//         <button onClick={callConstructorResp}>callConstructorResp</button>
//         <button onClick={total_supply}>total_supply</button>
//         <button onClick={max_supply}>max_supply</button>
//         <button onClick={change_max_supply}>change_max_supply</button>
//       </div>
//       <div>
//         <button onClick={callConstructorRespmarket}>
//           callConstructorRespmarket
//         </button>
//       </div>
//       <div>
//         <button onClick={mintAndList}>mintAndList</button>
//       </div>
//       <div>
//         <button onClick={uploadmintandlist}>mint</button>
//       </div>
//       <div>
//         <button onClick={set_approval_for_all}>set_approval_for_all</button>
//       </div>
//       <div>
//         <button onClick={token_metadata}>get token_metadata</button>
//       </div>
//       <div>
//         <button onClick={make_offer}>make_offer</button>
//         <div>
//           {/* <button onClick={getNFT}>getNFT</button> */}
//           {nftsData
//             ? nftsData.map((data, index) => (
//                 <div key={index}>
//                   name: {data.name},<br></br>
//                   {/* symbol: {symbol},<br></br> */}
//                   <img height={100} width={100} src={data.image} alt="" />
//                   {/* description: {description}, */}
//                   {/* {description.map((data) => (
//                     <div key={data.trait_type}>
//                       name : {data.trait_type}, value : {data.value}
//                     </div>
//                   ))} */}
//                 </div>
//               ))
//             : null}
//         </div>
//       </div>
//       {/* <button onClick={all_meta_data}>all_meta_data</button> */}
//       <div>
//         <button onClick={owner_of}>owner_of</button>
//       </div>
//       {/* <div>
//         <button onClick={approveNFT}>approveNFT</button>
//       </div> */}
//       <div>
//         <button onClick={transferFrom}>transferFrom to contract</button>
//       </div>

//       {/* <div>
//         <button onClick={listNFT}>listNFT</button>
//       </div> */}

//       <div>
//         <button onClick={delist_nft}>delist_nft</button>
//       </div>
//       <div>
//         <button onClick={buy_nft}>buy_nft</button>
//       </div>
//       <div>
//         <button onClick={change_nft_price}>change_nft_price</button>
//       </div>
//       <div>
//         <button onClick={get_nft_data}>get_nft_data</button>
//       </div>
//       <button onClick={callAdminResp2}>call 2</button>
//     </div>
//   );
// };

export default Home;
