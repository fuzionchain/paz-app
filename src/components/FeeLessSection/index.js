import React from 'react'
import CouponsIcon from '../../images/coupons-icon.svg'
import SwapIcon from '../../images/swap-icon.svg'
import FeelessSwapIcon from '../../images/feeless-swap-icon.svg'
import FeelessBUSDIcon from '../../images/feeless-busd-icon.svg'

const FeeLessSection = () => {
  return (
    <section class="feeless-section">
      <div class="custom-container">
        <div class="row">
          <div class="col-md-12">
            <p class="section-heading">TAX FREE SELLING</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-12 mt-3">
            <div class="stat-card">
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
            <div class="stat-card">
              <div class="media">
                <img class="mr-3 mt-4" src={SwapIcon} alt="swap-icon" />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading mb-0">Tax Free BUSD Amount</p>
                  <p class="stat-card-heading">Connect wallet to view</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-12 mt-3">
            <div class="stat-card">
              <div class="media">
                <img class="mr-3 mt-4" src={FeelessSwapIcon} alt="feeless-swap-icon" />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading">Tax Free Swap With Coupon</p>
                  <div class="btn-main">
                    <span class="mas">Connect Wallet</span>
                    <button onclick="connectAccount()" type="button" name="Hover">
                      Connect Wallet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 mt-3">
            <div class="stat-card">
              <div class="media">
                <img class="mr-3 mt-4" src={FeelessBUSDIcon} alt="feeless-busd-icon" />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading">Reinvest in PAZ Tax Free</p>
                  <div class="btn-main">
                    <span class="mas">Connect Wallet</span>
                    <button onclick="connectAccount()" type="button" name="Hover">
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
