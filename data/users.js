const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
let ObjectID = require('mongodb').ObjectID;

module.exports = {
    create: async function(identify,age,gender, country, language, status, discipline, sensitive){
        const userCollection = await users();

        /// create new user object to add to db.
        let temp = {
            identification: "student",
            age: 23,
            country: "USA"
        }

        const insertInfo = await userCollection.insertOne(temp);

        const newId = insertInfo.insertedId;
        const newtemp = await this.get(newId);
        console.log(newTemp);

    },
    get: async function(id){

    }
}