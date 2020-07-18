const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day
  });
});

app.post("/", function(req, res) {
  let input = req.body.todo;

  console.log(input);
});

app.listen(3000, function() {
  console.log("Server is up and running on port 3000");
});
