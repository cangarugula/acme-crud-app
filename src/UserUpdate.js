import React, {Component} from 'react'

class UserUpdate extends Component {
  render() {
    return (
      <div>
        <h3>Update User</h3>
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


export default UserUpdate
