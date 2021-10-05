import React from "react";
import pazIcon from "../../../../Images/pazIcon.svg";
const index = () => {
  return (
    <div class="col-md-6 mt-3">
      <div class="stat-card">
        <div class="media-body pt-3">
          <p class="stat-card-subheading mb-3">
            Add Liquidity Tax Free Section
          </p>
          <div className="your-stat-card-1" style={{ height: "190px" }}>
            <div className="media">
              <div className="media-body pt-3 d-flex ">
                <img src={pazIcon} alt="" />
                <p className="your-stat-subheading mb-0 ml-2">PAZ</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <p class="stat-card-subheading ">Total liquidity pool</p>
            <p class="stat-card-subheading ">1 USDC = 0.949535 USDT</p>
          </div>
          <div className="d-flex justify-content-between">
            <p class="stat-card-subheading ">Mininmum recieved</p>
            <p class="stat-card-subheading ">0.949535 USDT</p>
          </div>
          <div className="d-flex justify-content-between">
            <p class="stat-card-subheading ">Sippage</p>
            <p class="stat-card-subheading ">5.05%</p>
          </div>
        </div>
        <div>
          <p className='be-aware-txt'>Please be aware of the high price impact</p>
        <div className='d-flex justify-content-between'>
          <button className="liquidity-approve-btn">Approve</button>
          <button className="insufficient-balance-btn">Insufficient Balance</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default index;
