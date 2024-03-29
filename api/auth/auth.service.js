const Cryptr = require('cryptr')
const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')
const cryptr = new Cryptr(process.env.SECRET1 || 'Secret-Puk-1234')

async function login(username, password) {
  logger.debug(`auth.service - login with username: ${username}`)
  console.log(username)
  const user = await userService.getByUsername(username)
  // if (!user) return Promise.reject('Invalid username or password')
  if (!user) throw new Error('Invalid username or password')
  // TODO: un-comment for real login
  // const match = await bcrypt.compare(password, user.password)
  // if (!match) return Promise.reject('Invalid username or password')

  delete user.password
  user._id = user._id.toString()
  return user
}

async function signup({ username, password, fullname }) {
  const saltRounds = 10

  logger.debug(
    `auth.service - signup with username: ${username}, fullname: ${fullname}`
  )

  // if (!username || !password || !fullname)
  //   return Promise.reject('fullname, username and password are required!')
  if (!username)
    return Promise.reject('fullname, username and password are required!')

  if (!password) password = '123'
  if (username === 'guest') username = 'guest' + _makeId()
  const userExist = await userService.getByUsername(username)
  if (userExist) return Promise.reject('Username already taken')

  // for real login
  // const hash = await bcrypt.hash(password, saltRounds)
  // return userService.add({ username, password: hash, fullname })
  return userService.add({ username, password, fullname })
}

function getLoginToken(user) {
  return cryptr.encrypt(JSON.stringify(user))
}

function validateToken(loginToken) {
  try {
    const json = cryptr.decrypt(loginToken)
    const loggedinUser = JSON.parse(json)
    return loggedinUser
  } catch (err) {
    console.log('Invalid login token')
  }
  return null
}

function _makeId(length = 3) {
  var txt = ''
  var possible = '0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return 0 + txt
}

module.exports = {
  signup,
  login,
  getLoginToken,
  validateToken,
}
