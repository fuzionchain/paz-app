import React from "react";
import "./App.css";

import NavBar from "./Components/PrepareScreenComponents/NavBar/index";
import YourStatsSection from "./Components/PrepareScreenComponents/YourStatsSection";
import FeeLessSection from "./Components/PrepareScreenComponents/FeeLessSection/index";
import CoinStatsSection from "./Common/CoinsStatsSection/index";
import ConnectedYourStatsSection from "./Components/ConnectScreenComponents/YourStatsSection";
import ConnectedLockYourPazz from "./Components/ConnectScreenComponents/LockYourPazz/index";
import Footer from "./Common/Footer/index";
import { useWeb3Context } from "./contexts/ConnectWeb3";

const App = () => {
  const { isConnect } = useWeb3Context();
  return (
    <div id={isConnect ? "connected" : "prepare"}>
      <NavBar />
      {isConnect ? <ConnectedYourStatsSection /> : <YourStatsSection />}
      {isConnect && <ConnectedLockYourPazz />}
      <FeeLessSection />
      <CoinStatsSection />
      <Footer />
    </div>
  );
};

export default App;
