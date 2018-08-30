const express = require('express')
const path = require('path')
const { User, syncAndSeed } = require('./db')
const app = express()

app.use(require('body-parser').urlencoded({extended: false}))

app.get('/',(req,res,next) => {
  res.sendFile(path.join(__dirname,'index.html'))
})

app.use('/dist',express.static(path.join(__dirname,'dist')))

app.get('/api/users',(req,res,next)=> {
  User.findAll()
    .then(users => res.send(users))
    .catch(next)
})

app.get('/api/users/:id', (req,res,next) => {
  User.findById(req.params.id)
    .then(user => res.send(user))
    .catch(next)
})

app.post('/api/add',(req,res,next) => {
  User.create(req.body)
    .then(user => res.send(user))
    .catch(next)
})

app.put('/api/users/:id', (req,res,next) => {
  User.findById(req.params.id)
    .then(user => user.update(req.body))
    .catch(next)
})

app.delete('/api/users/:id', (req,res,next) => {
  return User.destroy({
    where: {
      id: req.params.id
    }
  })
})

syncAndSeed()

const port = process.env.PORT || 3000

app.listen(port, ()=> { console.log(`listening to port: ${port}`)})
