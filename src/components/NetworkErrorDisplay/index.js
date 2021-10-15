import React from 'react'
import PazziveLogo from '../../images/pazzive-logo.svg'
import Warning from '../../images/warning.svg'

const index = () => {
  return (
    <div id="networkError" style="display: none">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="warning-block my-auto mx-auto">
              <a href="index.html">
                <img src={PazziveLogo} alt="Pazzive logo" width="290px" className="mx-auto text-center mb-3" />
              </a>
              <h5 className="warning-heading text-center">
                <span className="mr-2">
                  <img src={Warning} alt="warning-icon" className="warning-icon" />
                </span>
                Pazzive is not yet deployed to this network.
              </h5>
              <p className="warning-subheading text-center">Please switch to Binance Smart Chain.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
