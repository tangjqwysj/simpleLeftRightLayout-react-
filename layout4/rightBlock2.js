import React from 'react'

const RightBlock = ({ rightStyle, sRender }) => {
  const CBtnclick = e => {
    e.preventDefault()
    const rightStyle = {
      transform: 'translate3d(0,0,0)',
      transition: 'all 0.5s'
    }
    const leftStyle = {
      width: '100%',
      transition: 'all 0.5s'
    }
    sRender(rightStyle, leftStyle)
  }
  return (
    <div style={rightStyle}>
      <button onClick={CBtnclick}>关闭</button>
      <div>电风扇地方第三方的房贷首付电风扇地方都十分大方</div>
    </div>
  )
}
export default RightBlock
