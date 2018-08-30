import React from 'react'

const Home =({users})=> {

  return (
    <div>
      <h1>Home</h1>
      <hr />
      <p>
        Welcome to Acme Users! We have {users.length} users!
      </p>
    </div>
  )

}

export default Home
