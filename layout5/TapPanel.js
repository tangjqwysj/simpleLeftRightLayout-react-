import React, { Component } from 'react'
import Layout from './layout4'

const leftStyle = {
  width: '100%',
  paddingBottom: '100%',
  background: 'black',
  color: '#fff'
}

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.LRender = this.LRender.bind(this)
    this.state = {
      leftStyle: leftStyle
    }
  }
  LRender(leftStyle) {
    this.setState(prevState => ({
      leftStyle: { ...prevState.leftStyle, ...leftStyle }
    }))
  }
  render() {
    const container = {
      width: '100%',
      paddingBottom: '100%',
      position: 'relative',
      overflow: 'hidden'
    }
    return (
      <div style={container}>
        <ul style={this.state.leftStyle}>
          <li>
            <Layout leftStyle={this.leftStyle} LRender={this.LRender} />
            <p>急口令艰苦飞机昆仑山分阶段考虑警方当时看来飞机迪斯科龙卷风迪斯科解放饭都十分都十分都十分大方都十分饭都十分大方地方都十分都十分大方放松放松的粉色呃呃呃恶霸vb</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default App
