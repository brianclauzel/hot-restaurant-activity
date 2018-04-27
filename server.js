var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [
    {
        name: "brian",
        phone: 6199712850,
        email: "funker321@gmail.com",
        uniqueID: 12
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/get/tables", function(req, res) {
    res.json(reservations);
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });


app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });

app.post("/tables", function(req, res){ 

    var newReservation = req.body;

    reservations.push(newReservation);

    res.json(newReservation);

    console.log(newReservation);

    
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  