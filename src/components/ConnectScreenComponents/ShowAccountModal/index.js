import React from 'react'

const index = () => {
  return (
    <div id="showAccountModal" class="account-modal">
      <div class="account-modal-content">
        <h5 class="text-center">Account</h5>
        <span class="close account-modal-close float-right">&times;</span>
        <div class="accountModal-inner position-relative">
          <div class="media">
            <img class="mr-3 mt-3" src="./assets/img/robot.svg" alt="robot-icon" />
            <div class="media-body pt-3">
              <input type="text" id="addressInput" class="copiedTxt" />
              <a id="copyBtn" data-toggle="tooltip" data-original-title="Copy to clipboard">
                <span class="stat-card-heading color-white mb-0" id="shortAccount"></span>{' '}
              </a>
              <br />
              <a id="bscscan-link" target="_blank" class="bscscan-link">
                View in explorer
                <span>
                  <img src="./assets/img/right-arrow.svg" alt="right-arrow" />
                </span>
              </a>
              <div class="btn-main btn-disconnect">
                <span class="mas">Disconnect</span>
                <button id="btn-disconnect" type="button" name="Hover">
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-3">
          <p class="mb-0">History</p>
          <a href="#" class="color-white is-disabled">
            Claim reward in 1 pool
            <span>
              <img src="./assets/img/right-arrow-white.svg" alt="right-arrow" />
            </span>
          </a>
          <img src="./assets/img/green-dot.svg" alt="green-dot" class="float-right" />
        </div>
      </div>
    </div>
  )
}

export default index
