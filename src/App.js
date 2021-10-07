import React from 'react'
import './App.css'

import NavBar from './components/NavBar/index'
import YourStatsSection from './components/PazStats'
import FeeLessSection from './components/FeeLessSection/index'
import CoinStatsSection from './components/CoinsStatsSection/index'
import ConnectedLockYourPazz from './components/LockPaz/index'
import Footer from './components/Footer/index'
import { useWeb3Context } from './contexts/ConnectWeb3'

const App = () => {
  const { isConnect } = useWeb3Context()
  return (
    <div id={isConnect ? 'connected' : 'prepare'}>
      <NavBar />
      <YourStatsSection />
      {isConnect && <ConnectedLockYourPazz />}
      {!isConnect && <FeeLessSection />}
      <CoinStatsSection />
      <Footer />
    </div>
  )
}

export default App
