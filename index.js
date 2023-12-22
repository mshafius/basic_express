const express = require('express')
const path = require('path')
const logger = require('./middleware/Logger')
const members = require('Members')


// init express framework
const app = express() 

// set static folder
app.use(express.static(path.join(__dirname, 'public')))
// PORT
const port = 3000

// init middleware
app.use(logger)


//List View
app.get('/api/members', (req, res) => res.json(members))


//Detail View
app.get('/api/members/:id', (req, res) => {
    
    //check if user exist
    const found = members.some(member => member.id === parseInt(req.params.id))

    //if user exist
    if (found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    }
    else{
        res.status(400).json({msg: "User does not exist!"})
    }
})



app.listen(port, ()=>{
    console.log(`Server listening at port ${port}`)
})
