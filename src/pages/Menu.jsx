import React from 'react'
import { menuOne, menuTwo } from '../constants'

const Menu = () => {
  return (
    <div className="menu w-full">
      <div className="menuOne w-full">
        <img className="w-full" src={menuOne} alt="menu-image" />
      </div>
      <div className="menuTwo w-full">
        <img className="w-full" src={menuTwo} alt="menu-image" />
      </div>
    </div>
  )
}

export default Menu