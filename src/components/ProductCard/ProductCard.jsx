import React, { Component } from 'react'
import { Rotate360degIcon, StarIcon } from '../../icons'

import "./product-card.scss"


export default class ProductCard extends Component {
  render() {
    const { product, selectProduct } = this.props;

    return (
      <div className="product-card" onClick={() => selectProduct(product)}>

        <div className="product-card__img-container">
          <div className="rotate-box">
            <Rotate360degIcon />
          </div>
          <img src={product.images[0]} alt="product" />
        </div>

        <div className="product-card__details">
          <h4>{product.name}</h4>

          <div className="price-and-brand">
            <div className="price">
              <p className="new-price">
                <span className='price'>{product.price.new}</span>
                <span className='currency'>{product.price.currency}</span>
              </p>

              <p className="old-price">
                <span className='price'>{product.price.old} &nbsp;</span>
                <span className='currency'>{product.price.currency} &nbsp; </span>

                <div className="discount">
                  <span>{product.price.discount}</span>
                </div>
              </p>
            </div>

            <div>
              <img src={product.brandImg} alt="adidas" />
            </div>
          </div>

          <div className="ratings">
            <div className="ratings__stars">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon fill="#F6F6F6 " />
            </div>
            <span>{product.ratings}</span>
          </div>

          {
            product.pickup && (
              <div className="picup">
                <span>Pickup From:</span>
                <span>Genena Mall</span>
              </div>
            )
          }

          {
            product.from && (
              <div className="form-to-in">
                <p>Form: <span>{product.from}</span></p>
                <p>To: <span>{product.to}</span></p>
                <p>in: <span>{product.in}</span></p>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
