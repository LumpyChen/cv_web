import React from 'react'
import {NavLink} from 'react-router-dom'
import './menu.css'

const Menu = () => (
    <ul className="menuBar">
      <li><NavLink exact to="/firstpage" /></li>
      <li><NavLink to="/internship" /></li>
      <li><NavLink to="/project" /></li>
      <li><NavLink to="/advantage" /></li>
      <li><NavLink to="/education" /></li>
      <li><NavLink to="/lastpage" /></li>
    </ul>
)

export default Menu
