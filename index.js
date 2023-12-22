const express = require('express')
const path = require('path')
const logger = require('./middleware/Logger')
const members = require('./Members')


// init express framework
const app = express() 

// set static folder
app.use(express.static(path.join(__dirname, 'public')))
// PORT
const port = 3000

// init middleware
app.use(logger)


//Get All members
app.get('/api/members', (req, res) => res.json(members))

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}`)
})
