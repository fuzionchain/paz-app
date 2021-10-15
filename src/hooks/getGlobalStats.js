import React, { useState, useEffect } from 'react'

export const useTotalPaidToHolders = () => {
  const [totalPaidToHolders, setTotalPaidToHolders] = useState()

  const fetchTotalPaidToHolders = () => {
    const totalPaidHoldersResponse = '232313000'
    setTotalPaidToHolders(totalPaidHoldersResponse)
  }
  useEffect(() => {
    fetchTotalPaidToHolders()
  }, [fetchTotalPaidToHolders])
  return totalPaidToHolders
}

export const useTotalSupply = () => {
  const [totalSupply, setTotalSupply] = useState()

  const fetchTotalSupply = () => {
    const totalSupplyResponse = '112313000'
    setTotalSupply(totalSupplyResponse)
  }
  useEffect(() => {
    fetchTotalSupply()
  }, [fetchTotalSupply])
  return totalSupply
}

export const useBurntSupply = () => {
  const [burntSupply, setBurntSupply] = useState()

  const fetchBurntSupply = () => {
    const burntSupplyResponse = '912313000'
    setBurntSupply(burntSupplyResponse)
  }
  useEffect(() => {
    fetchBurntSupply()
  }, [fetchBurntSupply])
  return burntSupply
}

export const useCirculatingSupply = () => {
  const [circulatingSupply, setCirculatingSupply] = useState()

  const fetchCirculatingSupply = () => {
    const circulatingSupplyResponse = '812313000'
    setCirculatingSupply(circulatingSupplyResponse)
  }
  useEffect(() => {
    fetchCirculatingSupply()
  }, [fetchCirculatingSupply])
  return circulatingSupply
}

export const useMarketCap = () => {
  const [marketCap, setMarketCap] = useState()

  const fetchMarketCap = () => {
    const marketCapResponse = '712313000'
    setMarketCap(marketCapResponse)
  }
  useEffect(() => {
    fetchMarketCap()
  }, [fetchMarketCap])
  return marketCap
}
