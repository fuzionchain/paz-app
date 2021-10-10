import React from 'react'
import StakingDurationDropdown from '../../components/StakingDurationDropdown'
import { useWeb3Context } from '../../contexts/ConnectWeb3'

const ConnectedLockYourPazz = () => {
  const { isConnect, setConnect } = useWeb3Context()

  return (
    <section class="lock-pazz-section">
      <div class="custom-container">
        <div class="row">
          <div class="col-md-12">
            <p class="section-heading">LOCK YOUR PAZ</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mt-3">
            <div class="lock-stat-card">
              <p class="mb-0">Current Status</p>
              {isConnect ? <h3>Staked</h3> : <h3>Connect Wallet to view</h3>}
            </div>
          </div>
          <div class="col-md-4 mt-3">
            <div class="lock-stat-card">
              <p class="mb-0">Expires in</p>
              {isConnect ? <h3>1 month</h3> : <h3>Connect Wallet to view</h3>}
            </div>
          </div>
          <div class="col-md-4 mt-3">
            <div class="lock-stat-card">
              <p class="mb-0">Dividend Bonus</p>
              {isConnect ? <h3>100% Staked</h3> : <h3>Connect Wallet to view</h3>}
            </div>
          </div>
        </div>

        <div class="reinvest-duration mt-3">
          {isConnect ? (
            <div class="row">
              <div class="col-md-12 d-flex justify-content-center">
                <form class="form-inline approve-form d-flex align-items-baseline mt-4">
                  <label class="approve-form-label mr-3">Choose your staking duration</label>
                  <div className="stake-duration-section">
                    <StakingDurationDropdown />
                  </div>
                  <input type="submit" class="form-control is-disabled" value="Lock My Tokens" />
                </form>
              </div>
            </div>
          ) : (
            <div
              class="row"
              style={{
                pointerEvents: 'none',
                opacity: '0.4',
              }}
            >
              <div class="col-md-12 d-flex justify-content-center">
                <form class="form-inline approve-form d-flex align-items-baseline mt-4">
                  <label class="approve-form-label mr-3">Choose your staking duration</label>
                  <div className="stake-duration-section">
                    <StakingDurationDropdown />
                  </div>
                  <input type="submit" class="form-control is-disabled" value="Lock My Tokens" />
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ConnectedLockYourPazz
