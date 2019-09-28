const firstScreen = require("./firstScreen");
const secondScreen = require("./sndScreen");
const thirdScreen = require("./thirdScren");

const constructorMethod = app => {
    app.use("/firstScreen", firstScreen);
    app.use("/sndScreen", secondScreen);
    app.use("./thirdScreen", thirdScreen);

    app.use("*", (req, res) =>{
        res.sendStatus(404);
    });
}

module.exports = constructorMethod;