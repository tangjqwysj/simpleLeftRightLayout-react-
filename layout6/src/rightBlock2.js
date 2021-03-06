import React from 'react'

const RightBlock = ({ rightStyle, LRender, helpMessage }) => {
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
    LRender(leftStyle, rightStyle)
  }

  return (
    <div style={rightStyle}>
      <button onClick={CBtnclick}>关闭</button>
      <div>{helpMessage}</div>
    </div>
  )
}

export default RightBlock
