
import React, { Component } from 'react'

class RightBlock extends Component {
  constructor(props, context) {
    super(props, context);
    this.CBtnclick = this.CBtnclick.bind(this)
  }
  CBtnclick() {
    const rightStyle = {
      transform: 'translate3d(0,0,0)',
      transition: 'all 0.5s'
    }
    const leftStyle= {
      width: '100%',
      transition: 'all 0.5s'
    }
    this.props.sRender(rightStyle, leftStyle)
  }
  render() {
    return (
      <div style={this.props.rightStyle}>
        <button onClick={this.CBtnclick}>关闭</button>
        <div>
          电风扇地方第三方的房贷首付电风扇地方都十分大方
        </div>
      </div>
    )
  }
}

export default RightBlock