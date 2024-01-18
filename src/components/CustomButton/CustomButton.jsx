import React, { Component } from 'react'

export default class CustomButton extends Component {
  render() {
    return (
      <button type="button" className="custom-button">{this.props.children}</button>
    )
  }
}
