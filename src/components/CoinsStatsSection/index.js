import React from 'react'

const CoinStatsSection = () => {
  return (
    <section>
      <div class="custom-container">
        <div class="row">
          <div class="col-md-12">
            <p class="section-heading">COIN STATS</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mt-3">
            <div class="stat-card">
              <div class="media">
                <img class="mr-3 mt-3" src="./assets/img/tax-icon.svg" alt="tax-icon" />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading mb-0">Total Paid to Holders</p>
                  <p class="stat-card-heading color-white">$ 1,034,375 BUSD</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-3">
            <div class="stat-card">
              <div class="media">
                <img class="mr-3 mt-4" src="./assets/img/buyback-icon.svg" alt="buyback-icon" />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading mb-0">Buyback Balance</p>
                  <p class="stat-card-heading color-white">$784,472 BUSD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mt-3">
            <div class="stat-card">
              <div class="media">
                <img class="mr-3 mt-3" src="./assets/img/locker-icon.svg" alt="locker-icon" />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading mb-0">Total Supply</p>
                  <p class="stat-card-heading color-white">1,999,999,999,999</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-3">
            <div class="stat-card">
              <div class="media">
                <img class="mr-3 mt-2" src="./assets/img/burnt-icon.svg" alt="burnt-icon" />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading mb-0">Burnt Supply</p>
                  <p class="stat-card-heading color-white">100,000,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mt-3">
            <div class="stat-card">
              <div class="media">
                <img class="mr-3 mt-3" src="./assets/img/supply-icon.svg" alt="supply-icon" />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading mb-0">Circulating Supply</p>
                  <p class="stat-card-heading color-white">20,000,000,000</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-3">
            <div class="stat-card">
              <div class="media">
                <img class="mr-3 mt-3" src="./assets/img/diamond-icon.svg" alt="diamond-icon" />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading mb-0">Market Cap</p>
                  <p class="stat-card-heading color-white">$1,000,000,000</p>
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
