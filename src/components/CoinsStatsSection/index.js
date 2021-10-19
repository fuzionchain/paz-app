import React, { useState, useEffect } from 'react'
import TaxIcon from '../../images/tax-icon.svg'
import LockerIcon from '../../images/locker-icon.svg'
import SupplyIcon from '../../images/supply-icon.svg'
import BuyBackIcon from '../../images/buyback-icon.svg'
import BurntIcon from '../../images/burnt-icon.svg'
import DiamondIcon from '../../images/diamond-icon.svg'
import { numberWithCommas } from '../../utils/numberHelpers'
import {
  useTotalPaidToHolders,
  useTotalSupply,
  useBurntSupply,
  useCirculatingSupply,
  useMarketCap,
} from '../../hooks/getGlobalStats'

const CoinStatsSection = () => {
  const totalPaidToHolders = useTotalPaidToHolders()
  const totalSupply = useTotalSupply()
  const burntSupply = useBurntSupply()
  const circulatingSupply = useCirculatingSupply()
  const marketCap = useMarketCap()

  return (
    <section>
      <div className="custom-container">
        <div className="row">
          <div className="col-md-12">
            <p className="section-heading">COIN STATS</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12 mt-3">
            <div className="stat-card d-flex justify-content-center">
              <div className="media">
                <img className="mr-3 mt-3 " src={TaxIcon} alt="tax-icon" />
                <div className="media-body pt-3">
                  <p className="stat-card-subheading mb-0">Total Paid to Holders</p>
                  <p className="stat-card-heading color-white">$ {numberWithCommas(totalPaidToHolders)} BUSD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6 mt-3">
            <div className="stat-card">
              <div className="media">
                <img className="mr-3 mt-3" src={LockerIcon} alt="locker-icon" />
                <div className="media-body pt-3">
                  <p className="stat-card-subheading mb-0">Total Supply</p>
                  <p className="stat-card-heading color-white">{numberWithCommas(totalSupply)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="stat-card">
              <div className="media">
                <img className="mr-3 mt-2" src={BurntIcon} alt="burnt-icon" />
                <div className="media-body pt-3">
                  <p className="stat-card-subheading mb-0">Burnt Supply</p>
                  <p className="stat-card-heading color-white">{numberWithCommas(burntSupply)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-3">
            <div className="stat-card">
              <div className="media">
                <img className="mr-3 mt-3" src={SupplyIcon} alt="supply-icon" />
                <div className="media-body pt-3">
                  <p className="stat-card-subheading mb-0">Circulating Supply</p>
                  <p className="stat-card-heading color-white">{numberWithCommas(circulatingSupply)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="stat-card">
              <div className="media">
                <img className="mr-3 mt-3" src={DiamondIcon} alt="diamond-icon" />
                <div className="media-body pt-3">
                  <p className="stat-card-subheading mb-0">Market Cap</p>
                  <p className="stat-card-heading color-white">$ {numberWithCommas(marketCap)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoinStatsSection
