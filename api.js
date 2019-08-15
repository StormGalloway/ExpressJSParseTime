var express = require('express');
var app = express();
var url = require('url');

app.get('*', function(req, res){
    var parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
    var date = new Date(parsedUrl.query.iso);
    var path = parsedUrl.pathname
    var time = '';
    if (path === '/api/parsetime'){
        time = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        res.send(JSON.stringify(time));
        res.status(200).send();
    } else if (path === '/api/unixtime'){
        time = {
            unixtime: date.getTime()
        };
        res.send(JSON.stringify(time));
        res.status(200).send();
    } else {
        res.status(401).send("Oh uh, something went wrong...");
    };
}); 

console.log("Navigate to http://localhost:3000/");

app.listen(3000);