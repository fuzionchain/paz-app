import React from "react";

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
                <img
                  class="mr-3 mt-4"
                  src="./assets/img/coupons-icon.svg"
                  alt="coupons-icon"
                />
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
                <img
                  class="mr-3 mt-4"
                  src="./assets/img/swap-icon.svg"
                  alt="swap-icon"
                />
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
                <img
                  class="mr-3 mt-4"
                  src="./assets/img/feeless-swap-icon.svg"
                  alt="feeless-swap-icon"
                />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading">Tax Free Swap With Coupon</p>
                  <div class="btn-main">
                    <span class="mas">Connect Wallet</span>
                    <button
                      onclick="connectAccount()"
                      type="button"
                      name="Hover"
                    >
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
                <img
                  class="mr-3 mt-4"
                  src="./assets/img/feeless-busd-icon.svg"
                  alt="feeless-busd-icon"
                />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading">Reinvest in PAZ Tax Free</p>
                  <div class="btn-main">
                    <span class="mas">Connect Wallet</span>
                    <button
                      onclick="connectAccount()"
                      type="button"
                      name="Hover"
                    >
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
  );
};

export default FeeLessSection;
