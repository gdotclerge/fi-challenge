import React, { Component } from 'react';

class Repo extends Component {
  state = {
    bgC: "",
    interval:""
  }

  render() {
    return (
      <div className="repo" onMouseEnter={this.backgroundColor} style={{background:`${this.state.bgC}`}}>
        {this.props.counter}
      </div>
    )
  }

  backgroundColor = () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = `rgb(${x},${y},${z})`;
    this.setState({
      bgC: bgColor
    })
  }
}

export default Repo;
