import React from 'react'
import CouponsIcon from '../../images/coupons-icon.svg'
import SwapIcon from '../../images/swap-icon.svg'
import FeelessSwapIcon from '../../images/feeless-swap-icon.svg'
import FeelessBUSDIcon from '../../images/feeless-busd-icon.svg'
import { useWeb3Context } from '../../contexts/ConnectWeb3'
  
const FeeLessSection = () => {
  const { setConnect } = useWeb3Context()
  return (
    <section class="feeless-section">
      <div class="custom-container">
        <div class="row">
          <div class="col-md-12">
            <p class="section-heading">FEELESS SELLING</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-12 mt-3">
            <div class="your-stat-card">
              <div class="media">
                <img class="mr-3 mt-4" src={CouponsIcon} alt="coupons-icon" />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading mb-0">Claimed Coupons</p>
                  <p class="stat-card-heading">Connect wallet to view</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 mt-3">
            <div class="your-stat-card">
              <div class="media">
                <img class="mr-3 mt-4" src={SwapIcon} alt="swap-icon" />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading mb-0">Feelessly Swappable BUSD</p>
                  <p class="stat-card-heading">Connect wallet to view</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-12 mt-3">
            <div class="your-stat-card">
              <div class="media">
                <img class="mr-3 mt-4" src={FeelessSwapIcon} alt="feeless-swap-icon" />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading">Feeless Swap With Coupon</p>
                  <div class="btn-main">
                    <span class="mas">Connect Wallet</span>
                    <button onClick={() => setConnect(true)} name="Connect">
                      Connect Wallet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 mt-3">
            <div class="your-stat-card">
              <div class="media">
                <img class="mr-3 mt-4" src={FeelessBUSDIcon} alt="feeless-busd-icon" />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading">Feeless BUSD Reinvesting</p>
                  <div class="btn-main">
                    <span class="mas">Connect Wallet</span>
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
