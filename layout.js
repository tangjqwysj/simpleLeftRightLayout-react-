import React, { Component } from 'react'


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.Btnclick = this.Btnclick.bind(this)
    this.CBtnclick = this.CBtnclick.bind(this)
    this.rightRef = this.rightRef.bind(this)
    this.leftRef = this.leftRef.bind(this)
  }
  Btnclick() {
    this.rightpane.style.transform = 'translate3d(-100%,0,0)'
    this.rightpane.style.transition = 'all 0.5s'
    this.leftpane.style.width = '70%'
    this.leftpane.style.transition = 'all 0.5s 0.2s'
    
  }
  CBtnclick() {
    this.rightpane.style.transform = 'translate3d(100%,0,0)'
    this.rightpane.style.transition = 'all 0.5s 0.2s'
    this.leftpane.style.width = '100%'
    this.leftpane.style.transition = 'all 0.5s'
  }
  rightRef(node){
    this.rightpane = node
  }
  leftRef(node){
    this.leftpane = node
  }
  render() {
    const container = {
      width: '100%',
      position:'relative',
    }
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
    return (
      <div style={container}>
        <div style={leftStyle} ref={this.leftRef}>
          <button onClick={this.Btnclick}>帮助信息</button>
          <p>就立刻飞机升空拦截疯狂的疯狂的了就富士康大陆军方开始多了几分看到了福建省的刻录机房价快速龙卷风发牢骚肯德基反抗螺丝钉解放</p>
        </div>
        <div style={rightStyle} ref={this.rightRef}>
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
