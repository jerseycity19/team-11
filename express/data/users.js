const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
let ObjectID = require('mongodb').ObjectID;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const mkdirp = require('mkdirp');
module.exports = {
    create: async function(identify,age,gender, country, language, status, discipline, sensitive){
        const userCollection = await users();

        /// create new user object to add to db.
        let newUser = {
            identification: identify,
            age: age,
            gender: gender,
            country: country,
            language: language,
            status: status,
            discipline: discipline,
            sensitivity: sensitive
        }

        const insertInfo = await userCollection.insertOne(newUser);

        // const newId = insertInfo.insertedId;
        // const newtemp = await this.get(newId);
        // console.log(insertInfo);

    },
    getAll: async function(){
        try{
            const userCollection = await users();
            const allUsers = await userCollection.find({}).toArray();
            console.log(allUsers);
            // const path = await mkdirp('/testCSVs');
            // console.log(path);
            const csvWriter = createCsvWriter({
               path:  './test.csv',
               header: [
                   {id: 'identification', title: 'IDENTIFICATION'},
                   {id: 'age', title: 'AGE'},
                   {id: 'gender', title: 'GENDER'},
                   {id: 'country', title: 'COUNTRY'},
                   {id: 'language', title: 'LANGUAGE'},
                   {id: 'status', title: 'STATUS'},
                   {id: 'discipline', title: 'DISCIPLINE'},
                   {id: 'sensitivity', title: 'SENSITIVE'}
               ]
            });
            csvWriter.writeRecords(allUsers).then(() =>  {
                console.log("csv created");
            }); 
        }catch(e){
            console.log(e);
        }
    },
    removeAll: async function(){
        try{
            const userCollection = await users();
            await userCollection.remove({});
        }catch(e){
            console.log(e);
        }
    }
}