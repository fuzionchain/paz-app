import React from "react";
import { useWeb3Context } from "../../../Context/ConnectWeb3";

const YourStatsSection = () => {
  const { setConnect } = useWeb3Context();
  const handleClick = () => {
    setConnect(true);
  };
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
            <div className="your-stat-card-1">
              <div className="media">
                <img
                  className="mr-3"
                  src="./assets/img/mobile-icon.svg"
                  alt="mobile-icon"
                />
                <div className="media-body pt-3">
                  <p className="your-stat-subheading">Total PAZ Holdings</p>
                  <h5 className="your-stat-heading mt-0">
                    Connect wallet to view
                  </h5>
                </div>
              </div>
              <a href="" className="buy-btn mt-3 is-disabled">
                Buy $PAZ
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-3">
            <div className="your-stat-card-2">
              <div className="media">
                <img
                  className="mr-3"
                  src="./assets/img/reward-icon.svg"
                  alt="reward-icon"
                />
                <div className="media-body pt-3">
                  <p className="your-stat-subheading">Total BUSD Paid</p>
                  <h5 className="your-stat-heading mt-0">
                    Connect wallet to view
                  </h5>
                </div>
              </div>
              <div
                className="btn-main mt-3"
                style={{ width: "100%", height: "46px" }}
                onClick={handleClick}
              >
                <span className="mas">Connect Wallet</span>
                <button
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

        <div className="row">
          <div className="col-lg-6 col-md-12 mt-3">
            <div className="stat-card">
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
                  <p className="stat-card-heading">Connect wallet to view</p>
                </div>
              </div>
              <div className="btn-main card-connect-btn" onClick={handleClick}>
                <span className="mas">Connect Wallet</span>
                <button type="button" name="Hover">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 mt-3">
            <div className="stat-card">
              <div className="media">
                <img
                  className="mr-3 mt-2"
                  src="./assets/img/tax-icon.svg"
                  alt="tax-icon"
                />
                <div className="media-body pt-3">
                  <p className="stat-card-subheading mb-0">
                    Current PAZ sell tax
                  </p>
                  <p className="stat-card-heading color-white">21.73%</p>
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
