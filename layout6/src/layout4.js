import React from 'react'

const Layout = ({ LRender, helpMessage }) => {
  const Btnclick = e => {
    e.preventDefault()
    const rightStyle = {
      transform: 'translate3d(-100%,0,0)',
      transition: 'all 0.5s'
    }
    const leftStyle = {
      width: '70%',
      transition: 'all 0.5s'
    }
    LRender(leftStyle, rightStyle, helpMessage)
  }
  return (
    <div>
      <div>
        <button onClick={Btnclick}>帮助信息</button>
      </div>
    </div>
  )
}
export default Layout
