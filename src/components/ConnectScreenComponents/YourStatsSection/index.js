import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

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

        <div className="pending-BUSD-part mt-3 col-lg-6 col-md-12">
          <div className="col">
            <div class="col-lg-6 col-md-12 mt-3">
              <div class="media">
                <img
                  class="mr-3 mt-2"
                  src="./assets/img/gift-icon.svg"
                  alt="gift-icon"
                />
                <div class="media-body pt-3">
                  <p class="stat-card-subheading mb-0">Pending BUSD Rewards</p>
                  <p class="stat-card-heading color-white">3,254</p>
                </div>
              </div>
              <button
                type="button"
                class="claim-btn connect-claim-reward-button"
              >
                Claim Reward
              </button>
            </div>
          </div>
        </div>
        <div className="reinvest-reward col-lg-6 col-md-12 mt-0">
          <div className="col-lg-6 col-md-12 mt-3 reinvest-part">
            <label className="pending-BUSD-label">
              Automatically reinvest reward in
            </label>
            <form className="form-inline approve-form ">
              <Nav style={{ backgroundColor: "#140d38" }}>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="TeslaSafe"
                  menuVariant="dark"
                  style={{ backgroundColor: "#140d38" }}
                >
                  <NavDropdown.Item style={{ backgroundColor: "#140d38" }}>
                    TeslaSafe
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ backgroundColor: "#140d38" }}>
                    Rice
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ backgroundColor: "#140d38" }}>
                    PAZ
                  </NavDropdown.Item>
                  <NavDropdown.Item style={{ backgroundColor: "#140d38" }}>
                    BNB
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <input
                type="submit"
                className="form-control is-disabled"
                value="Save Changes"
              />
            </form>
          </div>
        </div>

        <div className="pending-BUSD-part mt-3 col-lg-6 col-md-12 h-100">
          <div className="col-lg-6 col-md-12 mt-3">
            <label className="reinvest-label mt-3 text-center">
              Reinvest reward (Avalaible BUSD 40,000)
            </label>
            <form className="form-inline approve-form reinvest-reward-form d-flex justify-content-center flex-column dropdown-select-form">
              <select class="form-control w-75" is="ms-dropdown">
                <option value="TeslaSafe" data-image="./assets/img/TS-icon.svg">
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
                className="reinvest-amount mt-3 w-75"
                placeholder="Enter amount to reinvest tax-free"
              />
              <input
                type="submit"
                className="form-control is-disabled mt-3 w-75"
                value="Re-Invest"
              />
            </form>
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
