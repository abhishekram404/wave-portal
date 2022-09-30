import "app/styles/App.css";
import WaveCard from "./app/components/WaveCard";
import ProfileSection from "./app/components/ProfileSection";
import { useEffect, useState } from "react";
import AppContext from "./app/context/AppContext";
import abi from "./app/utils/WavePortal.json";
import Layout from "./app/components/Layout";

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [totalWaves, setTotalWaves] = useState(0);
  const contractAddress = "0xF467F50A91F3C7294dF02b8E32DCd09c15d1DC04";
  const contractABI = abi.abi;

  return (
    <AppContext.Provider
      value={{
        currentAccount,
        setCurrentAccount,
        contractABI,
        contractAddress,
        totalWaves,
        setTotalWaves,
      }}
    >
      <Layout />
    </AppContext.Provider>
  );
}

export default App;
