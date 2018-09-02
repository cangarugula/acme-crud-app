import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Users = ({users,deleteUser})=> {

    return (
      <div>
        <h3>Users</h3>
        <hr />
        {users.map(user => (
          <ul key={user.id}>
            <Link to={`/users/update/${user.id}`} >{user.name}</Link> <button key={user.id} type='submit' value={user.id} onClick={(event)=> deleteUser(user.id,event) }>X</button>
            <hr />
          </ul>
        ))}
        <hr />
      </div>
    )


}

export default Users
