import React, { Component } from 'react'

const rightStyle = {
  position: 'absolute',
  right: '-30%',
  width: '30%',
  paddingBottom: '100%',
  background: 'red',
}
const leftStyle = {
  width: '100%',
  paddingBottom: '100%',
  background: 'black',
  position: 'absolute',
  color: '#fff'
}
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.Btnclick = this.Btnclick.bind(this)
    this.CBtnclick = this.CBtnclick.bind(this)
    this.state = {
      rightStyle: rightStyle,
      leftStyle: leftStyle
    }
  }
  sRender(rightStyle, leftStyle){
    this.setState((prevState)=>({
      rightStyle: {...prevState.rightStyle,...rightStyle},
      leftStyle: {...prevState.leftStyle,...leftStyle}
    }))
  }
  Btnclick() {
    const rightStyle = {
      transform: 'translate3d(-100%,0,0)',
      transition: 'all 0.5s'
    }
    const leftStyle = {
      width: '70%',
      transition: 'all 0.5s'
    }
    this.sRender(rightStyle, leftStyle)
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
    this.sRender(rightStyle, leftStyle)
  }
  
  render() {
    const container = {
      width: '100%',
      paddingBottom: '100%',
      position:'relative',
      overflow: 'hidden'
    }
    return (
      <div style={container}>
        <div style={this.state.leftStyle}>
          <button onClick={this.Btnclick}>帮助信息</button>
          <p>就立刻飞机升空拦截疯狂的疯狂的了就富士康大陆军方开始多了几分看到了福建省的刻录机房价快速龙卷风发牢骚肯德基反抗螺丝钉解放</p>
        </div>
        <div style={this.state.rightStyle}>
          <button onClick={this.CBtnclick}>关闭</button>
          <div>
            电风扇地方第三方的房贷首付
          </div>
        </div>
      </div>
    );
  }
}

export default App
