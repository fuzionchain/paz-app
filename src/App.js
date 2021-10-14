import React from 'react'
import NavBar from './components/NavBar/index'
import YourStatsSection from './components/PazStats'
import FeeLessSection from './components/FeeLessSection/index'
import CoinStatsSection from './components/CoinsStatsSection/index'
import ConnectedLockYourPazz from './components/LockPaz/index'
import Footer from './components/Footer/index'
import { useWeb3Context } from './contexts/ConnectWeb3'
import DisclaimerModal from './components/Disclaimer'

import './App.css'

function App() {
  const { isConnect } = useWeb3Context()
  return (
    <div>
      <div id={isConnect ? 'connected' : 'prepare'}>
        {/* <DisclaimerModal /> */}
        <NavBar />
        <CoinStatsSection />
        <YourStatsSection />
        <ConnectedLockYourPazz />
        <Footer />
      </div>
    </div>
  )
}

export default App
