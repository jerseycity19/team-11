const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;

router.get("/", async (req, res) =>{
    user1 = await userData.create("student", "20-29", "F", "South America", "Spanish", "part-time contract", "law", "somewhat sensitive")
    user2 = await userData.create("scholar","30-39", "M","Middle East", "Arabic", "adjunct", "natural science", "more sensitive than most")
    user3 = await userData.create("student","20-29", "F","Central Asia", "Chinese", "part-time no contract", "human rights", "extremely sensitive")
    user4 = await userData.create("administrator", "40-49", "M", "North Africa", "Arabic","tenure", "social sciences", "somewhat sensitive")
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

router.get("/remove", async(req, res) => {
    try{
        result = await userData.removeAll();
        console.log("removed");
    }catch(e){
        console.log(e);
    }
});

module.exports = router;