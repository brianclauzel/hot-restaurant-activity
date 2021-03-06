var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var twilio = require("twilio");
var accountSid = process.env.accountID;
var authToken = process.env.token;
var client = new twilio(accountSid, authToken);

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

app.post("/api/clear", function(req, res) {
    reservations = [];
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



client.messages.create({
  body: 'You are next in line for a table!',
  to: "number",
  from: "+18582958452"
})
.then((message) => console.log(message.sid));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  