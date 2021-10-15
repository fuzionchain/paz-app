import React, { useEffect, useState } from 'react'

const DisclaimerModal = () => {
  const [show, setShow] = useState(false)
  const [btnDisable, setBtnDisable] = useState(true)
  const [isCheckedFirst, setCheckedFirst] = useState(false)
  const [isCheckedSecond, setCheckedSecond] = useState(false)

  useEffect(() => {
    if (isCheckedFirst && isCheckedSecond) {
      setBtnDisable(false)
    }
  }, [isCheckedFirst, isCheckedSecond])

  return (
    <div
      className={`modal ${!show ? 'show' : ''}`}
      id="disclaimerModal"
      tabindex="-1"
      role="dialog"
      aria-hidden={!show ? 'false' : 'true'}
      style={{ paddingRight: '0px', display: show && 'none' }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <h4>Disclaimer</h4>
          <p className="pt-2">
            Trading cryptocurrencies carries a
            <span className="highlight-txt">
              <b> high level of risk,</b>
            </span>{' '}
            and may not be suitable for all investors.
            <b className="highlight-txt"> Before deciding to trade cryptocurrency </b>
            you should carefully consider your investment objectives, level of experience, and risk appetite. The
            possibility exists that you could sustain a loss of some or all of your initial investment and therefore you
            should not invest money that you cannot afford to lose. ICO's, IEO's, STO's and any other form of offering
            will not guarantee a return on your investment.
          </p>
          <p className="py-1">
            <b className="highlight-txt">
              You should be aware of all the risks associated with cryptocurrency trading, and seek advice from an
              independent financial advisor
            </b>
          </p>
          <p>
            Any opinions, news, research, analyses, prices, or other information contained on this website is provided
            as general market commentary, and does not constitute investment advice. PAZ and its affiliates will not
            accept liability for any loss or damage, including without limitation to, any loss of profit, which may
            arise directly or indirectly from use of or reliance on such information. All opinions expressed on this
            site are owned by the respective writer and should never be considered as advice in any form.
          </p>
          <p className="mb-2">
            PAZ and its affiliates makes no representation or warranties as to the accuracy and or timelines of the
            information contained herein. A qualified professional should be consulted before making any financial
            decisions.
          </p>
          <div className="mb-3 highlight-txt">
            <input type="checkbox" className="number" value="One" onChange={(e) => setCheckedFirst(e.target.checked)} />
            &nbsp;&nbsp;&nbsp;I understand and accept that I will trade/invest PAZZIVE at my own risks
            <br />
            <input
              type="checkbox"
              className="number"
              value="Two"
              onChange={(e) => setCheckedSecond(e.target.checked)}
            />
            &nbsp;&nbsp;&nbsp;I understand and accept that this app works smothly with Metamask/TrustWallet
            <br />
            <div className="d-flex justify-content-center">
              <input
                type="button"
                id="confirmBtn"
                value="Confirm"
                className={`mt-3 ${btnDisable ? 'closeModal' : 'confirmBtn'}`}
                disabled={btnDisable}
                onClick={() => setShow(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisclaimerModal
