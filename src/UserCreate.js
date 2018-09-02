import React, {Component} from 'react'
import axios from 'axios'

class UserCreate extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault()
    axios.post('/api/add',this.state)
    .then((response)=> {
      this.props.addUser(response.data)
      this.setState({name: ''})
    })
    .catch(err => { console.log(err) })
  }


  render() {
    return (
      <div>
        <h3>Add a User</h3>
        <hr />
        <form onSubmit={this.onSubmit}>
          <label>Name:</label>
          <input type='text' name='name' value={this.state.name} onChange={this.onChange}></input>
          <button>Save</button>
        </form>
      </div>
    )
  }
}


export default UserCreate
