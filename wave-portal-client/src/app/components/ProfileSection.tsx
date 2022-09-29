import React, { useState } from "react";
import abi from "../utils/WavePortal.json";
import { ethers } from "ethers";
type Props = {};
interface IWindow {
  ethereum: any;
}

const ProfileSection = ({}: Props) => {
  const [isMining, setMining] = useState(false);
  const contactAddress = "0xF467F50A91F3C7294dF02b8E32DCd09c15d1DC04";
  const contractABI = abi.abi;

  const wave = async () => {
    try {
      const { ethereum } = window as unknown as IWindow;

      if (ethereum) {
        setMining(true);

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contactAddress,
          contractABI,
          signer
        );

        let count = await wavePortalContract.getTotalWaves();
        console.log("Total waves ", count.toNumber());

        let waveTxn = await wavePortalContract.wave();
        console.log("Mining ", waveTxn.hash);

        await waveTxn.wait();
        console.log("Mined ", waveTxn.hash);
        setMining(false);

        count = await wavePortalContract.getTotalWaves();
        console.log("Total waves ", count.toNumber());
      }
    } catch (error) {
      setMining(false);
      console.log(error);
    }
  };
  return (
    <section className="border-2 border-secondary drop-shadow-lg col-span-4 xl:col-span-3 rounded-lg flex flex-col items-center px-2 sm:px-4 py-8 h-fit sm:sticky sm:top-5 xl:top-10">
      <img
        src="https://avatars.githubusercontent.com/u/55845306?v=4"
        className="w-1/2 aspect-square rounded-full mb-6"
      />
      <h2 className="text-text text-md sm:text-md 2xl:text-3xl font-bold mb-4">
        Keshav Kishor Ram
      </h2>
      <i className="text-text text-md mb-4">@abhishekram404</i>
      <button
        className="bg-secondary border-2  px-2 lg:px-4 py-2 w-3/4 rounded-lg hover:bg-primary text-text text-sm sm:text-sm lg:text-xl font-mono  tracking-widest "
        onClick={() => wave()}
        disabled={isMining}
      >
        {isMining ? "Waving 👋" : "Wave me 👋"}
      </button>
    </section>
  );
};

export default ProfileSection;
