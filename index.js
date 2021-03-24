let http = require('http');
let fs = require('fs');
var express = require('express');
let ejs = require("ejs");
let path = require("path");
var htmlDocx = require("html-docx-js")
var app = express();
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodi

var pathval = path.join(__dirname, '/views/', "index.ejs")



var resdata = {
    firstName: "Vidya Sagar",
    lastName: "Mavuduru",
    address: "Burja Village",
    phoneNo: "132345",
    email: "vidya@gmail.com",
    birthDate: "1999-24-08",
    namevalue: "vidya"
}

var pathejs = path.join(__dirname, 'views/', "resume8.ejs");

app.post('/', function (req, res) {

    ejs.renderFile(pathejs, req.body, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.set('Content-Type', 'text/html');
            res.send(Buffer.from(data.toString()));
        }
    })

})
const PORT = 3001

app.listen(PORT, (req, res) => {
    console.log(`Listening on ${PORT}`);
});










