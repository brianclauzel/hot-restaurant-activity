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

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });


app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });

app.post("/table", function(req, res){
    var newReservation = req.body;
    
    

    
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
  