import React, { Component } from 'react'
import { MinusIcon, PlusIcon, Rotate360degIcon, StarIcon } from '../../icons'
import ProductSlider from '../ProductSlider/ProductSlider';

import "./product-details.scss";

const sizes = ["Small", "Medium", "Large", "X Large", "XX Large"];

const colors = [
  {
    name: "black",
    img: "/images/color-1.png"
  },
  {
    name: "red",
    img: "/images/color-2.png"
  }
]

export default class ProductDetails extends Component {
  render() {

    const { 
      product, 
      addToCart, 
      changeSize, 
      changeColor, 
      increaseQty, 
      decreaseQty
    } = this.props;

    return (
      <div className="product-details">
        {/* slug */}
        <div className="product-details__slug">
          <div className="container">
            <ul>
              <li>
                <a href="#"> Men</a> / 
              </li>
              <li>
                <a href="#"> Clothing </a> / 
              </li>
              <li>
                <a href="#"> Tops </a> / 
              </li>
              <li>
                <a href="#"> Adidas </a> / 
              </li>
              <li>
                <a href="#"> Adidas Black T-Shirt </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          {/* product Details */}
          <div className='product-details__inner'>
            {/* Slider */}
            <div className="product-details__slider-container">
              <div className="rotate-box">
                <Rotate360degIcon />
              </div>
              <ProductSlider images={product.images} />
            </div>

            {/* Product Info */}
            <div className="product-info">
              {/* brand */}
              <img src="/images/adidas.png" alt="" className="brand" />

              {/* name */}
              <h2>{product.name}</h2>

              {/* category */}
              <p className='category'>{product.category}</p>

              {/* ratings */}
              <div className="product-info__ratings">
                <div className="stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon fill="#F6F6F6 " />
                </div>
                <p>
                  4.9 of 5
                </p>

                <span>22 Rates</span>
              </div>

              {/* price */}
              <div className="product-info__price">
                <div className="price">
                  <p className="new-price">
                    <span className='price'>{product.price?.new}</span>
                    <span className='currency'>{product.price?.currency}</span>
                  </p>

                  <p className="old-price">
                    <span className='price'>{product.price?.old} &nbsp;</span>
                    <span className='currency'>{product.price?.currency} &nbsp; </span>
                  </p>

                  <div className="discount">
                    <span>{product.price?.discount} Off</span>
                  </div>
                </div>
              </div>

              {/* size */}
              <div className="product-info__size">
                <h4 className="product-info__title">Size</h4>

                <div className="product-info__size__inner">
                  {
                    sizes.map((size, i) => (
                      <div 
                        className={`size ${product.size === size ? "selected" : ""}`} 
                        key={i} 
                        onClick={() => changeSize(size)}
                      >
                        <span>{size}</span>
                      </div>
                    ))
                  }

                </div>
              </div>

              {/* color */}
              <div className="product-info__colors">
                <h4 className="product-info__title">Color</h4>

                <div className="product-info__colors__inner">
                  {
                    colors.map((color, i) => (
                      <div 
                        className="color" 
                        key={i} 
                        onClick={() => changeColor(color.name)}
                      >
                        <img 
                          src={color.img} 
                          alt={color.name} 
                        />
                      </div>
                    ))
                  }
                </div>
              </div>

              {/* quantity */}
              <div className="product-info__quantity">
                <h4 className="product-info__title">Quantity</h4>

                <div className="product-info__quantity__inner">
                  <button 
                    type="button" 
                    onClick={() => decreaseQty()}
                  >
                    <MinusIcon />
                  </button>
                  <span>{product.quantity}</span>
                  <button 
                    type="button" 
                    onClick={() => increaseQty()}
                  >
                    <PlusIcon />
                  </button>
                </div>
              </div>

              {/* buttons */}
              <div className="product-info__btns">
                {/* Add Btn */}
                <button 
                  type="button" 
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>

                {/* Pickup */}
                <button 
                  type="button"
                >
                  Puckup From Store
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
