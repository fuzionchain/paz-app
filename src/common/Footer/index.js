import React from 'react'

const Footer = () => {
  return (
    <section class="footer-section position-relative">
      <div class="custom-container">
        <div class="row">
          <div class="col-md-6">
            <img src="./assets/img/pazz-icon.svg" alt="pazz logo" class="footer-logo hover-magnify" />
            <p class="footer-txt pt-3">
              Copyright © 2021
              <a class="color-white" href="https://www.fuzion.team/" target="_blank">
                FuzionChain.
              </a>
              All Rights Reserved.
            </p>
            <ul class="d-flex">
              <li class="mx-1">
                <a target="_blank" href="mailto:team@teslasafe.finance">
                  <img src="./assets/img/gmail.svg" alt="gmail" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://twitter.com/fuzionchain">
                  <img src="./assets/img/twitter.svg" alt="twitter" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://www.facebook.com/FuzionChain/">
                  <img src="./assets/img/facebook.svg" alt="facebook" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://www.tiktok.com/@fuzionchain">
                  <img src="./assets/img/tiktok.svg" alt="ticktok" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://ricefarm.fi/">
                  <img src="./assets/img/farm.svg" alt="Farm" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://www.instagram.com/fuzionchain/">
                  <img src="./assets/img/instagram.svg" alt="instagram" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://www.reddit.com/r/TeslaSafe">
                  <img src="./assets/img/reddit.svg" alt="reddit" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://t.me/fuzionchain">
                  <img src="./assets/img/telegram.svg" alt="telegram" class="hover-magnify footer-icon" />
                </a>
              </li>
              <li class="mx-1">
                <a target="_blank" href="https://discord.gg/24uAPzKYFu">
                  <img src="./assets/img/discord.svg" alt="discord" class="hover-magnify footer-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <img
              src="./assets/img/fuzion-seal-updated.svg"
              alt="Fuzion Seal Logo"
              class="fuzion-seal-logo hover-magnify"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
