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
  }

  componentDidMount() {
    axios.get('/api/users')
    .then(response => this.setState({users: response.data}))
  }

  deleteUser(id,event) {
    event.preventDefault()
    const users = this.state.users.filter(user => user.id !== id)
    axios.delete(`/api/users/${id}`)
    .then( ()=> this.setState({users}))
  }


  render(){
    console.log(this.state.users)
    return (
      <div>
        <NavBar users={this.state.users} onClick={this.onClick}/>
        <Route exact path='/' render={()=> <Home users={this.state.users} />}></Route>
        <Route path='/home' render={ ()=> <Home users={this.state.users} />}></Route>
        <Route path='/users' render={()=> <Users users={this.state.users} deleteUser={this.deleteUser}/>}></Route>
        <Route path='/users/create' component={UserCreate}></Route>
        <Route exact path='/users/update' component={UserUpdate}></Route>
      </div>
    )
  }
}

export default Main
