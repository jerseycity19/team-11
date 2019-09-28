const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;

router.get("/", async (req, res) =>{
    res.json("Hello2");
});

router.post("/survey", async(req, res) => {
    let iden = req.body.identify_field;
    let age = req.body.age_field;
    let country = req.body.country_field;
    let language = req.body.language_field;
    let status = req.body.status_field;
    let discipline = req.body.discipline_field;
    let sensitivity = req.body.sensitivity_field;
    
    // error checking to make sure the input values are correct

    result = await userData.create(iden, age, country, language, status, discipline, sensitivity);
    return result;
});

module.exports = router;