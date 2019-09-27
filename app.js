const express = require("express");


const app = express();

const configRoutes = require("./routes");

configRoutes(app);







app.listen(3000, function(){
    console.log("Server is up and running on https://localhost:3000");
})