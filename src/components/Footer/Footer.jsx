import React, { Component } from 'react'

import { FacebookIcon, FooterLogo, InstagramIcon, LinkedInIcon, SubscribeIcon, TwitterIcon } from "./../../icons"

import "./footer.scss"

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">

        <div className="footer__inner">
            <div className="footer__desc">
              <FooterLogo width={220} height={57} fill="#FFF100" />

              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
              <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia </p>
              <p>m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis </p>
            </div>

            <div className="divider"></div>

            <div className="footer__subscribe">
              <h4>Subscribe to our newsletter</h4>

              <div className="footer__subscribe__search-box">
                <input type="text" />

                <button type="button">
                  <span>Subscribe</span>
                  <SubscribeIcon />
                </button>
              </div>

              <div className="links-social">
                <ul className="links">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Track Order</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Sell With Us</a>
                  </li>
                  <li>
                    <a href="#">Shipping And Returns</a>
                  </li>
                </ul>

                <div className='divider'></div>

                <ul className="social">
                  <li>
                    <a href="#">
                      <img src="/images/facebook.png" alt="facebook" />
                      <span>/YESHTERY</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/LinkedIn.png" alt='linkedIn' />
                      <span>/YESHTERY</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/instagram.png" alt='instagram' />
                      <span>/YESHTERY</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/Twitter.png" alt="twitter" />
                      <span>/YESHTERY</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
        </div>

          <div className="footer__bottom">
            <p>© 2021 yeshtery, all rights reserved.</p>

            <div className="footer__bottom__images">
              <img src="/images/cash-on-delivery.png" alt="" />
              <img src="/images/vise.png" alt="" />
              <img src="/images/master-card.png" alt="" />
            </div>

            <div className='powered'>
              <span>Powered By</span>
              <img src="/images/nasnav.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
