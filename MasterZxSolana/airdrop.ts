import {Keypair, Connection, LAMPORTS_PER_SOL} from "@solana/web3.js";
import wallet from "./test.json";

const keypair = Keypair.fromSecretKey (new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

(async() => {
    try{
        const requestAirdrop = await connection.requestAirdrop(keypair.publicKey, 1*LAMPORTS_PER_SOL);
        console.log("Airdrop signature:", requestAirdrop);

        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${requestAirdrop}?cluster=devnet`);
    } 
    catch (error){
        console.error(error)
    }
})();

