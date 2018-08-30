import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = ({users}) => {
  return (
    <div>
      <nav id='nav'>
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/users'>Users ({users.length})</Link></button>
        <button><Link to='/users/create'>Add a User</Link></button>
      </nav>
    </div>
  )
}

export default NavBar
