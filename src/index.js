import React from 'react'
import {render} from 'react-dom'
import Main from './Main'
import {HashRouter as Router} from 'react-router-dom'


const app = document.getElementById('app')

render(<Router>
  <Main />
  </Router>,app)
