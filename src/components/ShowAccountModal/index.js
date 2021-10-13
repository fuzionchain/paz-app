import React from 'react'
import Robot from '../../images/robot.svg'
import RightArrow from '../../images/right-arrow.svg'
import RightArrowWhite from '../../images/right-arrow-white.svg'
import GreenDot from '../../images/green-dot.svg'

const ShowAccountModal = ({ setDisconnectModal, disconnectModal, LogOutWeb3, web3AddressSliced, web3Address }) => {
  return (
    <div id="showAccountModal" className="account-modal" style={{ display: disconnectModal ? 'block' : 'none' }}>
      <div className="account-modal-content">
        <h5 className="text-center">Account</h5>
        <span className="close account-modal-close float-right" onClick={() => setDisconnectModal(false)}>
          &times;
        </span>
        <div className="accountModal-inner position-relative">
          <div className="media">
            <img className="mr-3 mt-3" src={Robot} alt="robot-icon" />
            <div className="media-body pt-3">
              <input type="text" id="addressInput" className="copiedTxt" />
              <a id="copyBtn" data-toggle="tooltip" data-original-title="Copy to clipboard">
                <span className="stat-card-heading color-white mb-0" id="shortAccount">
                  {web3AddressSliced}
                </span>{' '}
              </a>
              <br />
              <a
                href={`https://bscscan.com/address/${web3Address}`}
                id="bscscan-link"
                target="_blank"
                className="bscscan-link"
              >
                View in explorer
                <span>
                  <img src={RightArrow} alt="right-arrow" />
                </span>
              </a>
              <div className="btn-main btn-disconnect" onClick={LogOutWeb3}>
                <span className="mas">Disconnect</span>
                <button id="btn-disconnect" type="button" name="Hover">
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <p className="mb-0">History</p>
          <a href="#" className="color-white is-disabled">
            Claim reward in 1 pool
            <span>
              <img src={RightArrowWhite} alt="right-arrow" />
            </span>
          </a>
          <img src={GreenDot} alt="green-dot" className="float-right" />
        </div>
      </div>
    </div>
  )
}

export default ShowAccountModal
