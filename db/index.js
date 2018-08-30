const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DATABASE_URL, {logging: false})

const User = db.define('user',{
  name: Sequelize.STRING
})

const syncAndSeed = ()=> {
  db.sync({force:true})
  .then(()=> Promise.all([
    User.create({name: 'Moe'}),
    User.create({name: 'Larry'}),
    User.create({name: 'Curly'})
  ]))
  .then(()=> console.log('synced and seeded'))
}

module.exports = {
  User,
  syncAndSeed
}
