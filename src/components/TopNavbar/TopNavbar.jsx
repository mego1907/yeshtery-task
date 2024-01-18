import React, { Component } from 'react'
import { ArrowLeftIcon, ArrowRightIcon, ContactIcon, LocationIcon, Logo, ToggleIcon, TrackOrderIcon } from '../../icons'

import "./top-navbar.scss";

export default class TopNavbar extends Component {
  render() {
    return (
      <div className='top-navbar'>
        <div class="container">
          <div className='top-navbar__logo-container'>
            <button type='button'>
              <ToggleIcon />
            </button>
            <Logo />
          </div>

          <div className="offer-banner">
            <ArrowLeftIcon />
            <p>Valentine’s Day Offers! Buy Two Get One Free Shop Now</p>
            <a href="#">Shop Now</a>
            <ArrowRightIcon />
          </div>

          <div className="top-navbar__btns">
            <button type='button'>
              <ContactIcon />
              <span>Contaxt Us</span>
            </button>

            <button type='button'>
              <TrackOrderIcon />
              <span>Track Order</span>
            </button>

            <button type='button'>
              <LocationIcon />
              <span>Find A Store</span>
            </button>
          </div>

        </div>
      </div>
    )
  }
}
