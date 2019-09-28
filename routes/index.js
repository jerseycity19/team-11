const firstScreen = require("./firstScreen");
const secondScreen = require("./secondScreen");
const thirdScreen = require("./thirdScreen");

const constructorMethod = app => {
    app.use("/firstScreen", firstScreen);
    app.use("/secondScreen", secondScreen);
    app.use("./thirdScreen", thirdScreen);

    app.use("*", (req, res) =>{
        res.sendStatus(404);
    });
}

module.exports = constructorMethod;