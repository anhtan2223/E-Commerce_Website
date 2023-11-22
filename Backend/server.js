const app = require('./app.js')
const config = require('./app/config')
const Mongo = require('./app/utils/mongo.utils')
const Service = require('./app/services/mongo.service')
const InitData = require('./SchemaData')

async function startServer()
{
    try {
        await Mongo.connect(config.db.url)
        console.log("Connect To MongoDB Success");
        const Port = config.app.PORT
        app.listen(Port , ()=>{console.log(`Now Server Run On ${Port}`);})
    } catch (error) {
        console.log('Connect To DB has Error', error)
    }
}

async function InitServer()
{
    try {
        await Mongo.connect(config.db.url)
        console.log("Init Data MongoServer Success");
        const collection = new Service()
        
        await collection.role.deleteMany({})
        await collection.account.deleteMany({})
        await collection.sanpham.deleteMany({})
        await collection.type.deleteMany({})
        await collection.hoadon.deleteMany({})
        await collection.chitiet.deleteMany({})
        await collection.giohang.deleteMany({})
        await collection.truyvan.deleteMany({})


        await collection.role.insertMany(InitData.role)
        await collection.account.insertMany(InitData.account)
        await collection.sanpham.insertMany(InitData.sanpham)
        await collection.type.insertMany(InitData.type)
        await collection.hoadon.insertMany(InitData.hoadon)
        await collection.giohang.insertMany(InitData.giohang)
        await collection.truyvan.insertMany(InitData.truyvan)
        await collection.chitiet.insertMany(InitData.chitiet)
       
    } catch (error) {
        console.log("Error When Init With MongoDB" , error)
    }
}

InitServer()    
startServer()