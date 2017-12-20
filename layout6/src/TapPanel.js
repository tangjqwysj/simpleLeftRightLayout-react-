import React, { Component } from 'react'
import Layout from './layout4'
import { messageJson } from './json'
import RightBlock from './rightBlock2'

const leftStyle = {
  width: '100%',
  paddingBottom: '100%',
  background: 'black',
  color: '#fff'
}
const rightStyle = {
  position: 'absolute',
  top: 0,
  right: '-30%',
  width: '30%',
  paddingBottom: '100%',
  background: 'red'
}
class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.LRender = this.LRender.bind(this)

    this.state = {
      leftStyle: leftStyle,
      rightStyle: rightStyle,
      message: ''
    }
  }
  LRender(leftStyle, rightStyle, message) {
    this.setState(prevState => ({
      leftStyle: { ...prevState.leftStyle, ...leftStyle },
      rightStyle: { ...prevState.rightStyle, ...rightStyle },
      message: message
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
          {messageJson.map(item => (
            <li key={item.message}>
              <Layout
                leftStyle={this.state.leftStyle}
                rightStyle={this.state.rightStyle}
                LRender={this.LRender}
                helpMessage={item.message}
              />
              <p>{item.info}</p>
            </li>
          ))}
          <RightBlock rightStyle={this.state.rightStyle} LRender={this.LRender} helpMessage={this.state.message} />
        </ul>
      </div>
    )
  }
}

export default App
