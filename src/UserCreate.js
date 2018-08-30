import React, {Component} from 'react'

class UserCreate extends Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  render() {
    return (
      <div>
        <h3>Add a User</h3>
        <hr />
        <form>
          <label>Name:</label>
          <input type='text' name='name'></input>
          <button>Save</button>
        </form>
      </div>
    )
  }
}


export default UserCreate
