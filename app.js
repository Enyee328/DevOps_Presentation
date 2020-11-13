var express = require("express");
var app = express();
app.listen(8080, () => {
 console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
 res.send(["Welcome to ACE!"]);
});

app.get("/api", (req, res, next) => {
 res.json(["Feeling","Mood","Category","Time Zone"]);
});

app.get("/feeling", (req, res, next) => {
 res.json({"happinesses_rating": "8", "timestamp": "2020-11-11 11:23:35", "related_activities": "Happy"});
});

app.get("/scale_rating", (req, res, next) => {
 rand1 = Math.floor(Math.random() * 90) + 10;
 rand2 = Math.floor(Math.random() * 90) + 10;

 var today = new Date();
 var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 var dateTime = date+' '+time;

 res.json({"happiness_rating": "8" + rand1, "timestamp": dateTime, "related_activities": "." + rand2});
});

app.get("/random", (req, res, next) => {
 res.json([Math.floor(Math.random() * 90) + 10]);
});

app.get('*',function (req, res) {
        res.redirect('/');
    });

// node app.js
