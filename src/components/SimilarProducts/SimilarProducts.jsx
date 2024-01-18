import React, { Component } from 'react';

import "./similar-Products.scss"
import ProductCard from '../ProductCard/ProductCard'



export default class SimilarProducts extends Component {
  render() {

    const { products, selectProduct } = this.props

    return (
      <div className="similar-products">
        <div className="container">
          <div className="similar-products__title">
            <h3>Similar Products</h3>
            <p>You may like these products also</p>
          </div>

          <div className="similar-products__list">
            {
              products.map((product, i) => <ProductCard product={product} key={i} selectProduct={selectProduct} /> )
            }
          </div>
        </div>
      </div>
    )
  }
}
