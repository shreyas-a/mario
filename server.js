var express = require("express");
var app = express();
var path = require("path");
var publicPath = __dirname + "/dist/";

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.use("/", express.static(publicPath));

app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port " + process.env.PORT || 3000);
});