var express = require("express");
var routes = require("./routes/api");
var app = express();

app.listen( process.env.PORT || 80 ,  () => console.log("Server is running") );

app.use('/', routes);
