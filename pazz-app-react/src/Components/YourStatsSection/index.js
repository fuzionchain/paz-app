import React from "react";

const YourStatsSection = () => {
  return (
    <section class="your-stat-section">
      <div class="custom-container">
        <div class="row">
          <div class="col-md-12">
            <p class="section-heading">YOUR STATS</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-12 mt-3">
            <div class="your-stat-card-1">
              <div class="media">
                <img
                  class="mr-3"
                  src="./assets/img/mobile-icon.svg"
                  alt="mobile-icon"
                />
                <div class="media-body pt-3">
                  <p class="your-stat-subheading">Total PAZ Holdings</p>
                  <h5 class="your-stat-heading mt-0">Connect wallet to view</h5>
                </div>
              </div>
              <a href="" class="buy-btn mt-3 is-disabled">
                Buy $PAZ
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 mt-3">
            <div class="your-stat-card-2">
              <div class="media">
                <img
                  class="mr-3"
                  src="./assets/img/reward-icon.svg"
                  alt="reward-icon"
                />
                <div class="media-body pt-3">
                  <p class="your-stat-subheading">Total BUSD Paid</p>
                  <h5 class="your-stat-heading mt-0">Connect wallet to view</h5>
                </div>
              </div>
              <div
                class="btn-main mt-3"
                style={{ width: "100%", height: "46px" }}
              >
                <span class="mas">Connect Wallet</span>
                <button
                  onclick="connectAccount()"
                  type="button"
                  name="Hover"
                  style={{ background: "#4a4a4a8c" }}
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-12 mt-3">
            <div class="stat-card">
              <div class="media">
                <img
                  class="mr-3 mt-2"
                  src="./assets/img/gift-icon.svg"
                  alt="gift-icon"
                />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading mb-0">Pending BUSD Rewards</p>
                  <p class="stat-card-heading">Connect wallet to view</p>
                </div>
              </div>
              <div class="btn-main card-connect-btn">
                <span class="mas">Connect Wallet</span>
                <button onclick="connectAccount()" type="button" name="Hover">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-12 mt-3">
            <div class="stat-card">
              <div class="media">
                <img
                  class="mr-3 mt-2"
                  src="./assets/img/tax-icon.svg"
                  alt="tax-icon"
                />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading mb-0">Current PAZ sell tax</p>
                  <p class="stat-card-heading color-white">21.73%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourStatsSection;
