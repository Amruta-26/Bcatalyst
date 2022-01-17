const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// expecting json data from frontend
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.get("/", () => {
    res.sendfile(__dirname + "/public/index.html");
});
app.get("/test/:name", function (req, res) {
    res.send("Hello " + req.params.name + " !! Welcome to NodeJS App");
});

app.post("/test", function (req, res) {
    console.log(req.body);
    const username = req.body.username;
    res.send("Post Route Hit by : " + username);
});

app.listen(3000, function () {
    console.log("Server is up and running at port 3000");
});
