import React from 'react'
import PazzIcon from '../../images/pazzive-icon.svg'
import Gmail from '../../images/gmail.svg'
import Twitter from '../../images/twitter.svg'
import Facebook from '../../images/facebook.svg'
import Tiktok from '../../images/tiktok.svg'
import Farm from '../../images/farm.svg'
import Instagram from '../../images/instagram.svg'
import Reddit from '../../images/reddit.svg'
import Telegram from '../../images/telegram.svg'
import Discord from '../../images/discord.svg'
import FuzionSealUpdated from '../../images/fuzion-seal-updated.svg'

const Footer = () => {
  return (
    <section className="footer-section position-relative">
      <div className="custom-container">
        <div className="row">
          <div className="col-md-6">
            <img src={PazzIcon} alt="pazz logo" className="footer-logo hover-magnify" />
            <p className="footer-txt pt-3">
              Copyright © 2021
              <a className="color-white" href="https://www.fuzion.team/" target="_blank">
                FuzionChain.
              </a>
              All Rights Reserved.
            </p>
            <ul className="d-flex">
              <li className="mx-1">
                <a target="_blank" href="mailto:team@teslasafe.finance">
                  <img src={Gmail} alt="gmail" className="hover-magnify footer-icon" />
                </a>
              </li>
              <li className="mx-1">
                <a target="_blank" href="https://twitter.com/fuzionchain">
                  <img src={Twitter} alt="twitter" className="hover-magnify footer-icon" />
                </a>
              </li>
              <li className="mx-1">
                <a target="_blank" href="https://www.facebook.com/FuzionChain/">
                  <img src={Facebook} alt="facebook" className="hover-magnify footer-icon" />
                </a>
              </li>
              <li className="mx-1">
                <a target="_blank" href="https://www.tiktok.com/@fuzionchain">
                  <img src={Tiktok} alt="ticktok" className="hover-magnify footer-icon" />
                </a>
              </li>
              <li className="mx-1">
                <a target="_blank" href="https://ricefarm.fi/">
                  <img src={Farm} alt="Farm" className="hover-magnify footer-icon" />
                </a>
              </li>
              <li className="mx-1">
                <a target="_blank" href="https://www.instagram.com/fuzionchain/">
                  <img src={Instagram} alt="instagram" className="hover-magnify footer-icon" />
                </a>
              </li>
              <li className="mx-1">
                <a target="_blank" href="https://www.reddit.com/r/TeslaSafe">
                  <img src={Reddit} alt="reddit" className="hover-magnify footer-icon" />
                </a>
              </li>
              <li className="mx-1">
                <a target="_blank" href="https://t.me/fuzionchain">
                  <img src={Telegram} alt="telegram" className="hover-magnify footer-icon" />
                </a>
              </li>
              <li className="mx-1">
                <a target="_blank" href="https://discord.gg/24uAPzKYFu">
                  <img src={Discord} alt="discord" className="hover-magnify footer-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src={FuzionSealUpdated} alt="Fuzion Seal Logo" className="fuzion-seal-logo hover-magnify" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
