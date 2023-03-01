const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
    
});

app.post("/bmicalculator", function(req, res){
    var weight = Number(req.body.weight);
    var height = parseFloat(req.body.height)/100;
    var bmi = weight/Math.pow(height,2);
    res.send("Your bmi is equal to: " + bmi);
});

app.listen("3000", function(){
    console.log("Server started on port 3000");
});