const express = require('express')

const app = express()
const port = 3000

//basic hompage
app.get('/', (req, res) => {
    res.send("Hello, World!")
})

//about page
app.get('/about', (req, res) => {
    res.send("About Us")
})


app.listen(port, ()=>{
    console.log(`Server listening at port ${port}`)
})
