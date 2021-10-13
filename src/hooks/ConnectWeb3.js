import React, { useState, useEffect, useCallback } from 'react'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Fortmatic from 'fortmatic'
import { useWeb3Context } from '../contexts/ConnectWeb3'

const Web3ModalHook = () => {
  const [web3Address, setWeb3Address] = useState(0)
  const { isConnect, setConnect } = useWeb3Context()
  var web3Modal
  var provider
  var web3
  async function getweb3() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: '8043bb2cf99347b1bfadfb233c5325c0',
        },
      },
      fortmatic: {
        package: Fortmatic,
        options: {
          key: 'pk_test_391E26A3B43A3350',
        },
      },
    }
    web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
      disableInjectedProvider: false,
      theme: {
        background: '#161a59',
        main: '#142e6d',
        secondary: 'rgb(136, 136, 136)',
        border: 'rgba(195, 195, 195, 0)',
        hover: 'rgb(16, 26, 32)',
      },
    })
    provider = await web3Modal.connect()
    provider.on('connect', (info) => {
      setWeb3Address(info)
    })
    web3 = new Web3(provider)
    return  web3
  }
  const LogOutWeb3 = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      window.location.reload()
      setConnect(false)
      setWeb3Address('')
    },
    [web3Modal],
  )
  const LogInWeb3 = useCallback(
    async function () {
      await getweb3().then((response) => {
        response.eth
          .getAccounts()
          .then((result) => setWeb3Address(result))
          .then(setConnect(true))
      })
    },
    [getweb3, isConnect],
  )
  console.log(web3Modal)
  return [LogInWeb3, LogOutWeb3, web3Address, getweb3]
}

export default Web3ModalHook
