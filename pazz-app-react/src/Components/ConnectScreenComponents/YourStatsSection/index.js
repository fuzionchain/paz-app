import React from "react";

const ConnectedYourStatsSection = () => {
  return (
    <section className="your-stat-section">
      <div className="custom-container">
        <div className="row">
          <div className="col-md-12">
            <p className="section-heading">YOUR STATS</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-3">
            <div className="your-stat-card-1" style={{ height: "175px" }}>
              <div className="media">
                <img
                  className="mr-3"
                  src="./assets/img/mobile-icon.svg"
                  alt="mobile-icon"
                />
                <div className="media-body pt-3">
                  <p className="your-stat-subheading mb-0">
                    Total PAZ Holdings
                  </p>
                  <h5 className="your-stat-heading mt-2 color-white">
                    510,301,281
                  </h5>
                  <p className="color-white">$43,253</p>
                </div>
              </div>
              <a href="" className="buy-btn-2 is-disabled">
                Buy $PAZ
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-3">
            <div className="your-stat-card-2" style={{ height: "175px" }}>
              <div className="media">
                <img
                  className="mr-3"
                  src="./assets/img/reward-icon.svg"
                  alt="reward-icon"
                />
                <div className="media-body pt-3">
                  <p className="your-stat-subheading mb-0">Total BUSD Paid</p>
                  <h5 className="your-stat-heading mt-2 color-white">53.254</h5>
                  <p className="color-white">$3,253</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pending-BUSD-part mt-3">
          <div className="row">
            <div className="col-lg-6 col-md-12 mt-3">
              <div className="media">
                <img
                  className="mr-3 mt-2"
                  src="./assets/img/gift-icon.svg"
                  alt="gift-icon"
                />
                <div className="media-body pt-3">
                  <p className="stat-card-subheading mb-0">
                    Pending BUSD Rewards
                  </p>
                  <p className="stat-card-heading color-white">3,254</p>
                </div>
              </div>

              <button type="button" className="claim-btn">
                Claim Reward
              </button>
            </div>
            <div className="col-lg-6 col-md-12 mt-3 reinvest-part">
              <label className="pending-BUSD-label">
                Automatically reinvest reward in
              </label>
              <form className="form-inline approve-form">
                <select className="form-control" is="ms-dropdown">
                  <option
                    value="TeslaSafe"
                    data-image="./assets/img/TS-icon.svg"
                  >
                    TeslaSafe
                  </option>
                  <option value="RICE" data-image="./assets/img/Rice-icon.svg">
                    RICE
                  </option>
                  <option value="PAZ" data-image="./assets/img/pazz-icon.svg">
                    PAZ
                  </option>
                  <option value="BNB" data-image="./assets/img/BNB-icon.svg">
                    BNB
                  </option>
                </select>
                <input
                  type="submit"
                  className="form-control is-disabled"
                  value="Save Changed"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="reinvest-reward mt-3">
          <div className="row">
            <div className="col-md-12">
              <label className="reinvest-label mt-3 text-center">
                Reinvest reward (Avalaible BUSD 40,000)
              </label>
              <form className="form-inline approve-form d-flex justify-content-center">
                <select className="form-control" is="ms-dropdown">
                  <option
                    value="TeslaSafe"
                    data-image="./assets/img/TS-icon.svg"
                  >
                    TeslaSafe
                  </option>
                  <option value="RICE" data-image="./assets/img/Rice-icon.svg">
                    RICE
                  </option>
                  <option value="PAZ" data-image="./assets/img/pazz-icon.svg">
                    PAZ
                  </option>
                  <option value="BNB" data-image="./assets/img/BNB-icon.svg">
                    BNB
                  </option>
                </select>
                <input
                  type="number"
                  className="reinvest-amount ml-3"
                  placeholder="Enter amount to reinvest tax-free"
                />
                <input
                  type="submit"
                  className="form-control is-disabled"
                  value="Re-Invest"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="sell-tax mt-3">
          <div className="row">
            <div className="col-md-12">
              <p className="sell-tax-percentage mb-0">Sell Tax: 45%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedYourStatsSection;
