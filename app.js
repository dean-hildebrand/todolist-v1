const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.get('/', function(req, res){

  let today = new Date()

  if (today.getDay() === 6 || today.getDay() === 0){
    res.send("Yay! Its the weekend")
  } else {
    res.send("Boo, I have to work!")
  }
})







app.listen(3000, function(){
  console.log("Server is up and running on port 3000");
})
