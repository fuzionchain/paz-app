import React from "react";

const index = () => {
  return (
    <div id="networkError" style="display: none">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="warning-block my-auto mx-auto">
              <a href="index.html">
                <img
                  src="./assets/img/pazzive-logo.svg"
                  alt="Pazzive logo"
                  width="290px"
                  class="mx-auto text-center mb-3"
                />
              </a>
              <h5 class="warning-heading text-center">
                <span class="mr-2">
                  <img
                    src="./assets/img/warning.svg"
                    alt="warning-icon"
                    class="warning-icon"
                  />
                </span>
                Pazzive is not yet deployed to this network.
              </h5>
              <p class="warning-subheading text-center">
                Please switch to Binance Smart Chain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
