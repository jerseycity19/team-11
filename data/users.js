const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
let ObjectID = require('mongodb').ObjectID;

module.exports = {
    create: async function(id,age,gender, country, language, status, discipline, sensitive){
        const userCollection = await users();

        /// create new user object to add to db.
    }
}