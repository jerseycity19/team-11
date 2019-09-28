const MongoClient = require("mongodb").MongoClient;

let _connection = undefined;
let _db = undefined;

const settings = {
    mongoConfig:{
        serverUrl : "mongodb://localhost:27017/",
        database: "SAR_users"
    }
};

let fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;

module.exports = async()=>{
    if(! _connection){
        _connection = await MongoClient.connect(settings.mongoConfig.serverUrl);
        _db = await _connection.db(settings.mongoConfig.database);
       
    }
    return _db;
};