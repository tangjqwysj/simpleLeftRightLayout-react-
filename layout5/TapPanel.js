import React, { Component } from 'react'
import Layout from './layout4'
import {messageJson} from './json'

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
          {
            messageJson.map(item => (
            <li>
              <Layout leftStyle={this.leftStyle} LRender={this.LRender} helpMessage={item.message} />
              <p>{item.info}</p>
            </li>
          ))
          }
        </ul>
      </div>
    )
  }
}

export default App
