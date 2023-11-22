const {MongoClient} = require('mongodb')
const dbName = require('../config/index').db.dbName

module.exports = class {
    static connect = async (url)=>{
        if(!this.db) 
            this.db = (new MongoClient(url)).db(dbName)
        return this.db
    }
}