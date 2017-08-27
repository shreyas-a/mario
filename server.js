var express = require("express");
var app = express();
var path = require("path");
var publicPath = __dirname + "/dist/";

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.use("/", express.static(publicPath));

app.listen(3000, function() {
  /* eslint-disable no-console */
  console.log("Listening on port 3000");
  /* eslint-enable no-console */
});
