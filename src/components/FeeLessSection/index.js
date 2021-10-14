import React from 'react'
import CouponsIcon from '../../images/coupons-icon.svg'
import SwapIcon from '../../images/swap-icon.svg'
import FeelessSwapIcon from '../../images/feeless-swap-icon.svg'
import FeelessBUSDIcon from '../../images/feeless-busd-icon.svg'
import { useWeb3Context } from '../../contexts/ConnectWeb3'

const FeeLessSection = () => {
  const { setConnect } = useWeb3Context()
  return (
    <section className="feeless-section">
      <div className="custom-container">
        <div className="row">
          <div className="col-md-12">
            <p className="section-heading">FEELESS SELLING</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-3">
            <div className="your-stat-card">
              <div className="media">
                <img className="mr-3 mt-4" src={CouponsIcon} alt="coupons-icon" />
                <div className="media-body pt-3">
                  <p className="stat-card-subheading mb-0">Claimed Coupons</p>
                  <p className="stat-card-heading">Connect wallet to view</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-3">
            <div className="your-stat-card">
              <div className="media">
                <img className="mr-3 mt-4" src={SwapIcon} alt="swap-icon" />
                <div className="media-body pt-3">
                  <p className="stat-card-subheading mb-0">Feelessly Swappable BUSD</p>
                  <p className="stat-card-heading">Connect wallet to view</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-3">
            <div className="your-stat-card">
              <div className="media">
                <img className="mr-3 mt-4" src={FeelessSwapIcon} alt="feeless-swap-icon" />
                <div className="media-body pt-3">
                  <p className="stat-card-subheading">Feeless Swap With Coupon</p>
                  <div className="btn-main">
                    <span className="mas">Connect Wallet</span>
                    <button onClick={() => setConnect(true)} name="Connect">
                      Connect Wallet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-3">
            <div className="your-stat-card">
              <div className="media">
                <img className="mr-3 mt-4" src={FeelessBUSDIcon} alt="feeless-busd-icon" />
                <div className="media-body pt-3">
                  <p className="stat-card-subheading">Feeless BUSD Reinvesting</p>
                  <div className="btn-main">
                    <span className="mas">Connect Wallet</span>
                    <button onClick={() => setConnect(true)} name="Connect">
                      Connect Wallet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeeLessSection
