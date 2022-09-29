import "app/styles/App.css";
import WaveCard from "./app/components/WaveCard";
import ProfileSection from "./app/components/ProfileSection";
import { useEffect, useState } from "react";
interface IWindow {
  ethereum: any;
}
function App() {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window as unknown as IWindow;

      if (!ethereum) {
        return console.log("Make sure you have MetaMask");
      } else {
        console.log("MetaMask is already installed.", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Account found", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window as unknown as IWindow;

      if (!ethereum) return alert("Install MetaMask extension first!");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="App bg-background min-h-screen flex flex-col sm:grid sm:grid-cols-12 lg:gap-6 gap-4 p-5 xl:p-10">
      <ProfileSection />
      <main className="p-4  border-secondary border-2 col-span-8 xl:col-span-9 rounded-lg">
        <div className="flex justify-between">
          <h3 className="text-3xl text-text font-semibold mb-4">Waves (32)</h3>
          {!currentAccount && (
            <button
              className="bg-primary px-3 py-2 rounded-md h-fit hover:bg-primary/40 transition-all"
              onClick={connectWallet}
            >
              Connect wallet 💰
            </button>
          )}
        </div>
        <hr className="border-text/40" />
        <div className="flex flex-col gap-4 mt-4 ">
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
        </div>
      </main>
    </div>
  );
}

export default App;
