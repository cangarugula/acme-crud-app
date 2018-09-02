import React, {Component} from 'react'
import axios from 'axios'
import Home from './Home'
import Users from './AllUsers'
import NavBar from './NavBar'
import UserCreate from './UserCreate'
import UserUpdate from './UserUpdate'
import {Route} from 'react-router-dom'

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    this.deleteUser = this.deleteUser.bind(this)
    this.addUser = this.addUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    axios.get('/api/users')
    .then(response => this.setState({users: response.data}))
  }

  deleteUser(id) {
    const users = this.state.users.filter(user => user.id !== id)
    axios.delete(`/api/users/${id}`)
    this.setState({users})
  }

  addUser(user) {
    const users = this.state.users.concat([user])
    this.setState({users})
  }

  updateUser(user) {
    const users = this.state.users.map((_user,i) => {
      if(_user.id === user.id) {
        _user = user
      }
      return _user
    })
    this.setState({users})
  }


  render(){

    return (
      <div>
        <NavBar users={this.state.users} />
        <Route exact path='/' render={()=> <Home users={this.state.users} />}></Route>
        <Route path='/home' render={()=> <Home users={this.state.users} />}></Route>
        <Route path='/users' render={()=> <Users users={this.state.users} deleteUser={this.deleteUser}/>}></Route>
        <Route path='/users/create' render={()=> <UserCreate addUser={this.addUser}/>}></Route>
        <Route path='/users/update/:id' render={(props)=> <UserUpdate updateUser={this.updateUser} id={props.match.params.id}/>}></Route>
      </div>
    )
  }
}

export default Main
