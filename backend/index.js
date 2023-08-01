const connectToMongo = require('./db');
const express = require("express")

connectToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello Conected to world")
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})