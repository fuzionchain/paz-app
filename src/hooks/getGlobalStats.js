import React, { useState, useEffect } from 'react'

const GetGlobalStats = () => {
  const [circulatingSupply, setcirculatingSupply] = useState('')
  const [totalSupply, setTotalSupply] = useState('')
  const [totalPaidToHolders, setTotalPaidToHolders] = useState('')
  const [burntSupply, setBurntSupply] = useState('')
  const [marketCap, setMarketCap] = useState('')

  // Function for inserting commas in the number
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  // fetch CirculatingSupply from blockchain
  const fetchCirculatingSupply = async () => {
    const response = await '2120000000'
    setcirculatingSupply(await numberWithCommas(response))
  }

  // TotalPaidToHolders function
  const fetchTotalPaidToHolders = async () => {
    const response = await '232313000'
    setTotalPaidToHolders(await numberWithCommas(response))
  }

  // TotalSupply function
  const fetchTotalSuply = async () => {
    const response = await '1000000000'
    setTotalSupply(await numberWithCommas(response))
  }

  // BurntSupply function
  const fetchBurntSupply = async () => {
    const response = await '9210000000'
    setBurntSupply(await numberWithCommas(response))
  }

  // MarketCap function
  const fetchMarketCap = async () => {
    const response = await '2100000000'
    setMarketCap(await numberWithCommas(response))
  }

  useEffect(() => {
    fetchCirculatingSupply()
  }, [fetchCirculatingSupply])

  useEffect(() => {
    fetchTotalPaidToHolders()
  }, [fetchTotalPaidToHolders])

  useEffect(() => {
    fetchTotalSuply()
  }, [fetchTotalSuply])

  useEffect(() => {
    fetchBurntSupply()
  }, [fetchBurntSupply])

  useEffect(() => {
    fetchMarketCap()
  }, [fetchMarketCap])

  return { circulatingSupply, totalSupply, totalPaidToHolders, burntSupply, marketCap }
}

export default GetGlobalStats
