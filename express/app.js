const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const configRoutes = require("./routes");

app.use(bodyParser.json());
configRoutes(app);


app.listen(3000, function(){
    console.log("Server is up and running on https://localhost:3000");
})