var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });

app.post("/table", function(req, res){
    var newReservation = req.body;
    

    
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  