import React, { Component } from 'react'

import "./cart.scss"
import { CloseIcon } from '../../icons';

export default class Cart extends Component {
  render() {
    const { 
      handleOpenCart, 
      openCart, 
      removeProduct, 
      cart, 
    } = this.props;

    const closeCart = () => {
      handleOpenCart(false);
    }

    return (
      <div className="cart">
        {openCart && <div className="overlay" onClick={closeCart}></div>}

        <div className={`cart-box ${openCart ? "open" : "closed"}`}>

          <div className="cart__summary">
            {/* Close */}
            <button type="button" className="close-btn" onClick={closeCart}>
              <CloseIcon />
            </button>

            {/* Title */}
            <h3>My Cart</h3>

            {/* Inner */}
            <div className="cart__summary__inner">
              <h4>Cart Summary</h4>

              {
                cart.length === 0 && (
                  <div className="cart-empty">
                    <p>No items in the cart</p>
                  </div>
                )
              }

              <div className='cart-items'>
                {
                  cart.map((product) => (
                    <div className="cart-items__product" key={product.id}>
                      <img src={product.images[0]} alt="" />

                      <div className="cart-items__product_details">
                        <h4>{product.name}</h4>
                        <p className="quantity">Quantity: {product.quantity}</p>
                        <p className="price">
                          {(product.price?.new * product.quantity).toFixed(2)}
                          <span className="currency">{product.price?.currency}</span>
                        </p>

                        <button
                          type="button"
                          className="remove-btn"
                          onClick={() => removeProduct(product.id)}
                        >
                          Remove
                        </button>
                      </div>

                    </div>
                  ))
                }
                <p className='total'>Total: {cart.reduce((total, product) => total + product.price.new * product.quantity, 0).toFixed(2)} LE</p>

                {/* buttons */}
                <div className="cart-items__btns">
                  <button type="button">Review Cart</button>
                  <button type="button">Complete Checkout</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
