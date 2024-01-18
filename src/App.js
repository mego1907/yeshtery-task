import React, { Component } from 'react'
import { BottomNavbar, Navbar, TopNavbar, Footer, SimilarProducts, ProductDetails, Cart } from './components'

import productImg11 from "./images/product-1-1.png";
import productImg12 from "./images/Product-1-2.png";
import productImg13 from "./images/product-1-3.png";
import productImg14 from "./images/product-1-4.png";

import productImg21 from "./images/product-2-1.png";

import productImg31 from "./images/product-3-1.png";

import productImg41 from "./images/product-4-1.png";

const products = [
  {
    id: 1,
    image: "/images/product-1.png",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. - product 1",
    price: {
      old: 9.999,
      new: 9.999,
      discount: "50%",
      currency: "LE"
    },
    quantity: 1,
    images: [
      productImg11,
      productImg12,
      productImg13,
      productImg14,
      productImg11,
    ],
    // images: [
    //   "https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    //   "https://images.unsplash.com/photo-1682685797208-c741d58c2eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
    //   "https://images.unsplash.com/photo-1705005424662-fe7f355224dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1705336402584-b5deb3aa6cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1705228775052-250033f5c9aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://plus.unsplash.com/premium_photo-1664302990510-de01ecc54f77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMTN8fHxlbnwwfHx8fHw%3D"
    // ],
    ratings: "4.2 of 5",
    pickup: "Genena Mall",
    brandImg: "/images/adidas.png"
  },
  {
    id: 2,
    image: "/images/product-1.png",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. - Product 2",
    price: {
      old: 9.999,
      new: 9.999,
      discount: "50%",
      currency: "LE"
    },
    quantity: 1,
    images: [
      productImg21,
      productImg21,
      productImg21,
      productImg21,
      productImg21,
    ],
    // images: [
    //   "https://plus.unsplash.com/premium_photo-1705262413411-5e623427f90a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1705103325780-0bd586187adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1704913427542-edbd4c4f3134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1705311756049-d4720db623f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1568826197047-0fc0311f65fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjB8fHxlbnwwfHx8fHw%3D"
    // ],
    ratings: "4.2 of 5",
    from: "UK",
    to: "Egypt",
    in: 10,
    brandImg: "/images/adidas.png"
  },
  {
    id: 3,
    image: "/images/product-1.png",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. - Product 3",
    price: {
      old: 9.999,
      new: 9.999,
      discount: "50%",
      currency: "LE"
    },
    quantity: 1,
    images: [
      productImg31,
      productImg31,
      productImg31,
      productImg31,
      productImg31,
    ],
    // images: [
    //   "https://images.unsplash.com/photo-1682685795579-37e731bfefab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1705148390889-7ba06aedb464?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://plus.unsplash.com/premium_photo-1661869126805-269f83e44a87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1704972841788-86fac20fc87e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTB8fHxlbnwwfHx8fHw%3D",
    //   "https://plus.unsplash.com/premium_photo-1661943864527-d714736dfd16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjh8fHxlbnwwfHx8fHw%3D"
    // ],
    ratings: "4.2 of 5",
    pickup: "Genena Mall",
    brandImg: "/images/adidas.png"
  },
  {
    id: 4,
    image: "/images/product-1.png",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. - Product 4",
    price: {
      old: 9.999,
      new: 9.999,
      discount: "70%",
      currency: "LE"
    },
    quantity: 1,
    images: [
      productImg41,
      productImg41,
      productImg41,
      productImg41,
      productImg41,
    ],
    // images: [
    //   "https://images.unsplash.com/photo-1704118095891-92e7739fcaa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fHw%3D",
    //   "https://images.unsplash.com/photo-1705113165376-b14041df2059?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D",
    //   "https://images.unsplash.com/photo-1705154580249-55990fe3a8fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTJ8fHxlbnwwfHx8fHw%3D",
    //   "https://images.unsplash.com/photo-1705222594042-90f8f7280750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjB8fHxlbnwwfHx8fHw%3D",
    //   "https://images.unsplash.com/photo-1682685797439-a05dd915cee9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMzF8fHxlbnwwfHx8fHw%3D",
    // ],
    ratings: "4.2 of 5",
    from: "Egypt",
    to: "Egypt",
    in: "2 Days",
    brandImg: "/images/adidas.png"
  },
  {
    id: 5,
    image: "/images/product-1.png",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. - Product 5",
    price: {
      old: 9.999,
      new: 9.999,
      discount: "50%",
      currency: "LE"
    },
    quantity: 1,
    images: [
      productImg11,
      productImg12,
      productImg13,
      productImg14,
      productImg11,
    ],
    // images: [
    //   "https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    //   "https://images.unsplash.com/photo-1682685797208-c741d58c2eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
    //   "https://images.unsplash.com/photo-1705005424662-fe7f355224dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1705336402584-b5deb3aa6cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1705228775052-250033f5c9aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://plus.unsplash.com/premium_photo-1664302990510-de01ecc54f77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMTN8fHxlbnwwfHx8fHw%3D"
    // ],
    ratings: "4.2 of 5",
    pickup: "Genena Mall",
    brandImg: "/images/adidas.png"
  },
  {
    id: 6,
    image: "/images/product-1.png",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. - Product 6",
    price: {
      old: 9.999,
      new: 9.999,
      discount: "50%",
      currency: "LE"
    },
    quantity: 1,
    images: [
      productImg21,
      productImg21,
      productImg21,
      productImg21,
      productImg21,
    ],
    // images: [
    //   "https://plus.unsplash.com/premium_photo-1705262413411-5e623427f90a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1705103325780-0bd586187adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1704913427542-edbd4c4f3134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1705311756049-d4720db623f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1568826197047-0fc0311f65fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjB8fHxlbnwwfHx8fHw%3D"
    // ],
    ratings: "4.2 of 5",
    from: "UK",
    to: "Egypt",
    in: 10,
    brandImg: "/images/adidas.png"
  },
  {
    id: 7,
    image: "/images/product-1.png",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. - Product 7",
    price: {
      old: 9.999,
      new: 9.999,
      discount: "50%",
      currency: "LE"
    },
    quantity: 1,
    images: [
      productImg31,
      productImg31,
      productImg31,
      productImg31,
      productImg31,
    ],
    // images: [
    //   "https://images.unsplash.com/photo-1682685795579-37e731bfefab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1705148390889-7ba06aedb464?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://plus.unsplash.com/premium_photo-1661869126805-269f83e44a87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1704972841788-86fac20fc87e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTB8fHxlbnwwfHx8fHw%3D",
    //   "https://plus.unsplash.com/premium_photo-1661943864527-d714736dfd16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjh8fHxlbnwwfHx8fHw%3D"
    // ],
    ratings: "4.2 of 5",
    pickup: "Genena Mall",
    brandImg: "/images/adidas.png"
  },
  {
    id: 8,
    image: "/images/product-1.png",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. - Product 8",
    price: {
      old: 9.999,
      new: 9.999,
      discount: "70%",
      currency: "LE"
    },
    quantity: 1,
    images: [
      productImg41,
      productImg41,
      productImg41,
      productImg41,
      productImg41,
    ],
    // images: [
    //   "https://images.unsplash.com/photo-1704118095891-92e7739fcaa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fHw%3D",
    //   "https://images.unsplash.com/photo-1705113165376-b14041df2059?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D",
    //   "https://images.unsplash.com/photo-1705154580249-55990fe3a8fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTJ8fHxlbnwwfHx8fHw%3D",
    //   "https://images.unsplash.com/photo-1705222594042-90f8f7280750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjB8fHxlbnwwfHx8fHw%3D",
    //   "https://images.unsplash.com/photo-1682685797439-a05dd915cee9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMzF8fHxlbnwwfHx8fHw%3D",
    // ],
    ratings: "4.2 of 5",
    from: "Egypt",
    to: "Egypt",
    in: "2 Days",
    brandImg: "/images/adidas.png"
  },
]


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      openCart: false,
      cart: [],
      cartTotal: 0,
      selectedProduct: products[0],
      products: products
    }

    this.handleOpenCart = this.handleOpenCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
  }

  handleOpenCart(openCart) {
    this.setState({ ...this.state, openCart: openCart })
  }

  addToCart(newProduct) {
    const product = this.state.cart.find((item) => item.id === newProduct.id)

    if (product) {

      this.setState({
        ...this.state,
        cart: this.state.cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + this.state.selectedProduct.quantity }
          } else {
            return item
          }
        }),
        
      });

    } else {

      this.setState({
        ...this.state,
        cart: [ ...this.state.cart, newProduct],
      })
    }

  }

  selectProduct(product) {
    this.setState({
      ...this.state,
      selectedProduct: product
    })
  }

  changeSize(size) {
    this.setState({
      ...this.state,
      selectedProduct: { ...this.state.selectedProduct, size: size }
    })
  }

  changeColor(color) {
    this.setState({
      ...this.state,
      selectedProduct: { ...this.state.selectedProduct, color: color }
    })
  }

  removeProduct(id) {
    this.setState({
      ...this.state,
      cart: this.state.cart.filter((product) => product.id !== id)
    })
  }

  increaseQty() {
    this.setState({
      ...this.state,
      selectedProduct: {
        ...this.state.selectedProduct,
        quantity: this.state.selectedProduct.quantity + 1
      }
    })
  }

  decreaseQty() {
    this.setState({
      ...this.state,
      selectedProduct: {
        ...this.state.selectedProduct,
        quantity: this.state.selectedProduct.quantity <= 0 ? 0 : this.state.selectedProduct.quantity - 1
      }
    })
  }


  render() {
    return (
      <div className="app">
        <TopNavbar />
        <Navbar
          openCart={this.state.openCart}
          handleOpenCart={this.handleOpenCart}
          state={this.state}
          cart={this.state.cart}
        />
        <BottomNavbar />
        <ProductDetails
          product={this.state.selectedProduct}
          addToCart={this.addToCart}
          changeSize={this.changeSize}
          changeColor={this.changeColor}
          decreaseQty={this.decreaseQty}
          increaseQty={this.increaseQty}
          getCartTotal={this.getCartTotal}
        />
        <SimilarProducts
          products={this.state.products}
          selectProduct={this.selectProduct}
        />
        <Cart
          openCart={this.state.openCart}
          handleOpenCart={this.handleOpenCart}
          state={this.state}
          removeProduct={this.removeProduct}
          cart={this.state.cart}
          cartTotal={this.state.cartTotal}
        />
        <Footer />
      </div>
    )
  }
}

