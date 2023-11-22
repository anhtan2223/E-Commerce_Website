const MongoService = require('../services/mongo.service')
const ErrorAPI     = require('../ErrorAPI')

exports.createProduct = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const sanpham = Service.sanpham
    const truyvan = Service.truyvan
    const index   = await truyvan.findOneAndUpdate({} , {$inc : {sanpham : 1}})
    // console.log(index.sanpham)
    const result  = await sanpham.insertOne({"_id" : index.sanpham , ...req.body})
    if(result.acknowledged)
      return res.json({message : "Thêm Mới Sản Phẩm Thành Công"})
    return res.json({message : "Thêm Mới Sản Phẩm Thất Bại"})
  
  } catch (error) {
    console.log(error)
    return next(new ErrorAPI(500,"Error When Create sanpham"))
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const sanpham = Service.sanpham
    const result  = await sanpham.deleteOne({_id : req.params.id*1})
    if(result.deletedCount === 0)
      return res.json({message : "Không Tồn Tại Sản Phẩm "})
    
    return res.json({message : "Xoá Sản Phẩm Thành Công"})
  } catch (error) {
    return next(new ErrorAPI(500,"Error When Delete sanpham"))
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const sanpham = Service.sanpham
    const result  = await sanpham.findOneAndUpdate({"_id" : req.params.id*1} , {$set : req.body})
    if(result)
      return res.json({message : "Cập Nhật Sản Phẩm Thành Công"})
    return res.json({message : "Không Tìm Thấy Sản Phẩm"})
  
  } catch (error) {
    return next(new ErrorAPI(500,"Error When Update sanpham"))
  }
};

exports.findProductbyId = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const sanpham = Service.sanpham
    const result  = await sanpham.findOne({"_id" : req.params.id*1})
    if(!result)
      return res.json({message : `Sản Phẩm có ID : ${req.params.id} Không Tồn Tại`})
    return res.json(result) 
  } catch (error) {
    return next(new ErrorAPI(500 , "Get Error When Find By ID"))
  }
};

exports.findProductbyType = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const sanpham = Service.sanpham
    const result = await sanpham.find({type : req.params.type*1}).toArray()
        if(result.length === 0) 
            return res.json({message :`Không Tìm Thấy Sản Phẩm có Loại ${req.params.type}`})
    res.json(result)
} catch (error) {
    console.log(error)
    return next(new ErrorAPI(501 , "Error When Find User By productType"))
}
};

exports.findProductByName = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const sanpham = Service.sanpham
    var result
    if(req.body.type)
      result = await sanpham.find({productName : {$regex : new RegExp(req.body.productName) , $options : "i"} , type : req.body.type*1}).sort({_id : -1}).toArray()
    else 
      result = await sanpham.find({productName : {$regex : new RegExp(req.body.productName) , $options : "i"} }).sort({_id : -1}).toArray()
    res.json(result)
} catch (error) {
    console.log(error)
    return next(new ErrorAPI(501 , "Error When Find User By productName"))
}
};

exports.getAll = async (req,res,next) =>{
  try {
    const Service = new MongoService()
    const sanpham = Service.sanpham
    const result = await sanpham.find({}).sort({_id : -1}).toArray()
    res.json(result)
  } catch (error) {
    console.log(error)
    return next(new ErrorAPI(501 , "Error When Get All Product"))
  }
}
