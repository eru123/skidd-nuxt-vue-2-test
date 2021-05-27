const express = require('express')
const admin = require('firebase-admin')
const serviceAccount = require('../serviceAccount.json')

const fire = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    'https://eru123-sc-default-rtdb.europe-west1.firebasedatabase.app',
})

const app = express()

app.get('/', (req, res) => {
  res.send(fire.name)
})

module.exports = {
  path: '/api/',
  handler: app,
}
