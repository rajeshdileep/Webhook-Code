const express = require('express')
const app = express()
const port = 3020

app.get('/', (req, res) => {
  res.send('Hello Rajesh D!')
  res.send(console.log(process.env.connection))
})

app.listen(port, () => {
  const conn = "Rajesh Ames";
  console.log(`Example app listening on port ${port}`)
  console.log(process.env.connection)
  console.log(process.env.uname)
  console.log(process.env.password)
})