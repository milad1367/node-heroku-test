const express = require('express')
const PORT = process.env.PORT || 3000

express()
  .get('/', (req, res) => res.send('home page'))
  .get('/cool', (req, res) => res.send('you are cool'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))