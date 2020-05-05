const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, "public"))); // share public folder

app.get('/', function (request, response) {
    response.send(`
    <h1>Steko stat</h1>
    `);
});

app.post('/', bodyParser, (req, res, next) => {
    console.log(req.body)
    res.end();
})

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});