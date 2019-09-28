const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
let ObjectID = require('mongodb').ObjectID;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const execa = require('execa');
// var PythonShell = require('python-shell');
module.exports = {
    create: async function(identify,age,gender, country, language, status, discipline, sensitive, often, aware, advised, primary, experienced, retaliation, compared){
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
            sensitivity: sensitive,
            often: often,
            aware: aware,
            advised: advised,
            primary: primary,
            experienced: experienced,
            retaliation: retaliation,
            compared: compared
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
                   {id: 'sensitivity', title: 'SENSITIVE'},
                   {id: 'often', title: 'OFTEN'},
                   {id: 'aware', title: 'AWARE'},
                   {id: 'advised', title: 'ADVISED'},
                   {id: 'primary', title: 'PRIMARY'},
                   {id: 'experienced', title: 'EXPERIENCED'},
                   {id: 'retaliation', title: 'RETALIATION'},
                   {id: 'compared', title: 'COMPARED'}
               ]
            });
            csvWriter.writeRecords(allUsers).then(() =>  {
                console.log("csv created");
            }); 
           
            // let options = {
            //     pythonPath: '/usr/bin/python3',
            //     args: ['GENDER']
            // }
            // var test = new PythonShell('piechart.py', options);
            // var spawn = require("child_process").spawn;
            // var process = spawn('python3', ["/c/Users/dshap/Documents/team-11/express/data/piechart.py", "GENDER"]);
            // console.log("Stopped")
            const path = require('path');
            const abspath = path.dirname(require.main.filename) + '/data/piechart.py'
            await execa('python3', [abspath, 'GENDER', abspath]);
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