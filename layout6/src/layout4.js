import React, { Component } from 'react'

class Layout extends Component {
  constructor(props, context) {
    super(props, context)

    this.Btnclick = this.Btnclick.bind(this)
    this.state = {
      rightStyle: props.rightStyle,
      leftStyle: props.leftStyle,
      helpMessage: props.helpMessage
    }
  }

  Btnclick(e) {
    e.preventDefault()
    const rightStyle = {
      transform: 'translate3d(-100%,0,0)',
      transition: 'all 0.5s'
    }
    const leftStyle = {
      width: '70%',
      transition: 'all 0.5s'
    }
    this.props.LRender(leftStyle, rightStyle, this.state.helpMessage)
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.Btnclick}>帮助信息</button>
        </div>
      </div>
    )
  }
}

export default Layout
