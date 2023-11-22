const Mongo = require('../utils/mongo.utils')
const collectionName = require('../config/index').db.collection

class MongoService
{
    constructor(db = Mongo.db)
    {
        this.role       = db.collection(collectionName.role)
        this.account    = db.collection(collectionName.account)
        this.sanpham    = db.collection(collectionName.sanpham)
        this.type       = db.collection(collectionName.type)
        this.hoadon     = db.collection(collectionName.hoadon)
        this.chitiet    = db.collection(collectionName.chitiet)
        this.giohang    = db.collection(collectionName.giohang)
        this.truyvan    = db.collection(collectionName.truyvan)   
    }
}

module.exports = MongoService