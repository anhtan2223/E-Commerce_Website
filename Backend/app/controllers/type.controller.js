const MongoService = require('../services/mongo.service')
const ErrorAPI     = require('../ErrorAPI')

exports.getAll = async (req,res,next) =>{
    try {
      const Service = new MongoService()
      const type = Service.type
      const result = await type.find({}).toArray()
      res.json(result)
    } catch (error) {
      console.log(error)
      return next(new ErrorAPI(501 , "Error When Get All TypeProduct"))
    }
  }