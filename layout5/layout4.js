import React, { Component } from 'react'
import RightBlock from './rightBlock2'

const rightStyle = {
  position: 'absolute',
  top: 0,
  right: '-30%',
  width: '30%',
  paddingBottom: '100%',
  background: 'red',
}
class Layout extends Component {
  constructor(props, context) {
    super(props, context);
    this.Btnclick = this.Btnclick.bind(this)
    this.RRender = this.RRender.bind(this)
    this.state = {
      rightStyle: rightStyle,
      leftStyle: props.leftStyle
    }
  }
  RRender(rightStyle, leftStyle){
    this.setState((prevState)=>({
      rightStyle: {...prevState.rightStyle,...rightStyle},
    }))
  }
  Btnclick(e) {
    e.preventDefault();
    const rightStyle = {
      transform: 'translate3d(-100%,0,0)',
      transition: 'all 0.5s'
    }
    const leftStyle = {
      width: '70%',
      transition: 'all 0.5s'
    }
    this.RRender(rightStyle)
    this.props.LRender(leftStyle)
  }
  
  render() {
    const {leftStyle, ...otherProps} = this.props
    return (
      <div>
        <div>
          <button onClick={this.Btnclick}>帮助信息</button>
        </div>
        <RightBlock rightStyle={this.state.rightStyle} RRender={this.RRender} {...otherProps}></RightBlock>
      </div>
    );
  }
}

export default Layout
