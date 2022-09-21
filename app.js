const fs = require("fs");
var express = require("express");
const path = require("path");
var app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "source/public"), {index: false}));

const port = 3000
const public_ref = path.join(__dirname, "/source/public");

app.get('/', (req, res) => {
  res.sendFile(path.join(public_ref, "/homepage.html"))
  console.log('get request made');
})

/*app.get('/style.css', (req, res) => {
    res.sendFile(path.join(public_ref, "/style.css"));
    console.log("stylesheet request");
})*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})