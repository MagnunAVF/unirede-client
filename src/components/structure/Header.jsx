import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Página Inicial</Link></li>
        <li><Link to='/users'>Usuários</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header