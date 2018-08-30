import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    axios.get('/api/users')
    .then(response => this.setState({users: response.data}))
    .catch((err) => console.log(err))
  }

  onClick(event) {

    axios.delete(`/api/users/${event.target.value}`)
    .then(() => {
      console.log('hello')
      this.setState({
      users: this.state.users.filter(user => user.id !== event.target.value)
    })}
  )
    .catch((err) => console.log(err))
  }




  render() {

    return (
      <div>
        <h3>Users</h3>
        <hr />
        {this.state.users.map(user => (
          <ul key={user.id}>
            <Link to='users/update/:id'>{user.name}</Link> <button type='submit' value={user.id} onClick={this.onClick}>X</button>
            <hr />
          </ul>
        ))}
        <hr />
      </div>
    )
  }
}

export default Users
