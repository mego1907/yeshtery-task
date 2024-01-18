import React, { Component } from 'react'

import "./bottom-navbar.scss";

const categories = [
  {
    name: "Men",
    slug: "men"
  },
  {
    name: "Women",
    slug: "women"
  },
  {
    name: "Unisex",
    slug: "unisex"
  },
  {
    name: "Kids",
    slug: "kids"
  },
  {
    name: "Best Sellers",
    slug: "best-sellers"
  },
  {
    name: "New Arrivals",
    slug: "new-arrivals"
  },
  {
    name: "Offers",
    slug: "offers"
  }
]


export default class BottomNavbar extends Component {


  render() {
    return (
      <div class="bottom-navbar">
        <div className="container">
          <ul>
            {
              categories.map(({ name, slug }) => (
                <li key={name}>
                  <a href={slug}>{name}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}
