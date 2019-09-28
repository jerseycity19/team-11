const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;

router.get("/", async (req, res) =>{
    result = await userData.create("test", "testage", "testcountry", "testlanguage", "teststatus", "testdiscipline", "testsensitivity");
    console.log("Created");
});

router.get("/get", async(req, res) =>{
    try{
        result = await userData.getAll();
        console.log("arrived");
        res.json(result);
    }catch(e){
        console.log(e);
    }

});

module.exports = router;