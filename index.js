const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Rajesh D!')
  res.send(process.env.connection)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(process.env.connection)
})