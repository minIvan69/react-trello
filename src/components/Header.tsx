import React from 'react'
import logo from '../assets/trello.svg'


function Header() {
  return (
    <header className="App-header">
        <div className="header-logo">
          <img className="header-logo___img" src={logo} />
          <h1 className="header-logo___text">Trello</h1>
        </div>
    </header>
  )
}

export default Header;