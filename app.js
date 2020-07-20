const express = require("express");
const bodyParser = require("body-parser");
// created our own module and require it with this const
const date = require(__dirname + "/date.js")


const app = express();

let items = ["Feed the dog", "Walk the dog"];
let workItems = []

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res) {

  let day = date()

  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

app.post("/", function(req, res) {

  let item = req.body.newItem;
console.log(req.body.list);
  if(req.body.list === "Work"){
      workItems.push(item)
      res.redirect('/work')
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get('/about', function(req, res){
  res.render('about')
})

app.get('/work', function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems})
})


app.post('/work', function(req, res){
  let item = req.body.newItem
  workItems.push(item)
  res.redirect('/work')
})

app.listen(3000, function() {
  console.log("Server is up and running on port 3000");
});
