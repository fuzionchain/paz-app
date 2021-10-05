import React from 'react'
import './App.css'

import NavBar from './components/PrepareScreenComponents/NavBar/index'
import YourStatsSection from './components/PrepareScreenComponents/YourStatsSection'
import FeeLessSection from './components/PrepareScreenComponents/FeeLessSection/index'
import CoinStatsSection from './common/CoinsStatsSection/index'
import ConnectedYourStatsSection from './components/ConnectScreenComponents/YourStatsSection'
import ConnectedLockYourPazz from './components/ConnectScreenComponents/LockYourPazz/index'
import Footer from './common/Footer/index'
import { useWeb3Context } from './contexts/ConnectWeb3'

const App = () => {
  const { isConnect } = useWeb3Context()
  return (
    <div id={isConnect ? 'connected' : 'prepare'}>
      <NavBar />
      {isConnect ? <ConnectedYourStatsSection /> : <YourStatsSection />}
      {isConnect && <ConnectedLockYourPazz />}
      <FeeLessSection />
      <CoinStatsSection />
      <Footer />
    </div>
  )
}

export default App
