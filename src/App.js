import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import NavBar from './components/NavBar/index'
import YourStatsSection from './components/PazStats'
import FeeLessSection from './components/FeeLessSection/index'
import CoinStatsSection from './components/CoinsStatsSection/index'
import ConnectedLockYourPazz from './components/LockPaz/index'
import Footer from './components/Footer/index'
import { useWeb3Context } from './contexts/ConnectWeb3'

function App() {
  const { isConnect } = useWeb3Context()
  return (
    <div>
      <div id={isConnect ? 'connected' : 'prepare'}>
        <NavBar />
        {isConnect && <CoinStatsSection />}
        <YourStatsSection />
        {isConnect && <ConnectedLockYourPazz />}
        {!isConnect && <FeeLessSection />}
        {!isConnect && <CoinStatsSection />}
        <Footer />
      </div>
    </div>
  )
}

export default App
