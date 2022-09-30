import React, { createContext } from "react";

const AppContext = createContext<{
  currentAccount: string;
  setCurrentAccount: Function;
  contractAddress: string;
  contractABI: any;
  totalWaves: number;
  setTotalWaves: Function;
}>({
  currentAccount: "",
  setCurrentAccount: () => {},
  contractAddress: "",
  contractABI: null,
  totalWaves: 0,
  setTotalWaves: () => {},
});

export default AppContext;
