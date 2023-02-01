import React, { Component } from "react"

export class ImgComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.alt} width="100"></img>
      </div>
    )
  }
}

export default ImgComponent
