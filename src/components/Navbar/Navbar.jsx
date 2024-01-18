import React, { Component } from 'react'
import { SearchIcon, AdidasIcon, ShoppingCartIcon, WishlistIcon, LoginIcon } from '../../icons'

import "./navbar.scss"

export default class Navbar extends Component {
  render() {
    const { openCart, handleOpenCart, state, cart } = this.props;

    // console.log(this.props)

    return (
      <div className="navbar">
        <div className="container">
          <div className="navbar__search-box">
            <div className="navbar__search-box__inner">
              <SearchIcon />
            </div>
            <input type="text" placeholder="Search" />
          </div>

          <img src="/images/adidas.png" alt='adidas' />

          <div className="navbar__icons">
            <button type="button" onClick={() => handleOpenCart(true)}>
              <ShoppingCartIcon />
              <div className="count">{cart.reduce((total, product) => total + product.quantity, 0)}</div>
              <span>Cart</span>
            </button>
            <button type="button">
              <WishlistIcon />
              <span>Wishlist</span>
            </button>
            <button type="button">
              <LoginIcon />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
