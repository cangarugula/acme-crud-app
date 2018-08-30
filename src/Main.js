import React, {Component} from 'react'
import axios from 'axios'
import Home from './Home'
import Users from './Users'
import NavBar from './NavBar'
import UserCreate from './UserCreate'
import UserUpdate from './UserUpdate'
import {HashRouter as Router, Route} from 'react-router-dom'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('/api/users')
    .then(response => this.setState({users: response.data}))
    .catch((err) => console.log(err))
  }

  render(){
    return (
      <div>
          <Router>
            <div>
            <NavBar users={this.state.users} />
            <Route exact path='/'  render={()=> <Home users={this.state.users}/> }></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/users' component={Users}></Route>
            <Route path='/users/create' component={UserCreate}></Route>
            <Route path='/users/update/:id' component={UserUpdate}></Route>
            </div>
          </Router>
      </div>
    )
  }
}

export default Main
