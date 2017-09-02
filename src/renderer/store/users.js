import fs from 'fs'

const USERS_PATH = './user.json'

var users

export default {
  getUser: function () {
    return users.users
  },
  setUser: function (name, icon) {
    users.id += 1
    let newUser = {
      id: users.id,
      user: name,
      icon: icon
    }
    users.users.push(newUser)
    return newUser.id
  },
  load: function () {
    if (!users) {
      var data = fs.readFileSync(USERS_PATH).toString()
      users = JSON.parse(data)
    }
  },
  store: function () {
    fs.writeFile(USERS_PATH, JSON.stringify(users), (err) => { if (err) console.log(err) })
  }
}
