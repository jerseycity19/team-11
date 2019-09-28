const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
let ObjectID = require('mongodb').ObjectID;

module.exports = {
    create: async function(identify,age,gender, country, language, status, discipline, sensitive){
        const userCollection = await users();

        /// create new user object to add to db.
        let newUser = {
            identification: identify,
            age: age,
            country: country,
            language: language,
            status: status,
            discipline: discipline,
            sensitivity: sensitive
        }

        const insertInfo = await userCollection.insertOne(newUser);

        // const newId = insertInfo.insertedId;
        // const newtemp = await this.get(newId);
        console.log(InsertInfo);

    }
}