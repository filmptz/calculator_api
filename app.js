var express = require("express");
var routes = require("./routes/api");
var app = express();

app.listen(3000, ()=> {
  console.log("server start on port 3000");
});

app.use('/', routes);
