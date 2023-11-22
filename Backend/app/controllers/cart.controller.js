const MongoService = require('../services/mongo.service')
const ErrorAPI  = require('../ErrorAPI');

exports.findByUID = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const giohang = Service.giohang
    const result  = await giohang.findOne({"UID" : req.params.uid*1})
    if(!result)
      return res.json({message : `Người Dùng có ID : ${req.params.uid} Không Tồn Tại`})
    return res.json(result) 
  } catch (error) {
    return next(new ErrorAPI(500 , "Get Error When Find By ID"))
  }
};

exports.updateCart = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const giohang = Service.giohang
    const result  = await giohang.findOneAndUpdate({"UID" : req.params.uid*1} , {$set : req.body})
    if(result)
      return res.json({message : "Cập Nhật Giỏ Hàng Thành Công"})
    return res.json({message : "Không Tìm Thấy Người Dùng"})
  
  } catch (error) {
    return next(new ErrorAPI(500,"Error When Update Cart"))
  }
};

exports.addItem = async (req,res,next) => {
  try {
    const Service = new MongoService()
    const giohang = Service.giohang

    // console.log(UID)
    const product = req.body
    delete product.quantity
    // console.log(product._id)
    const cart  = await giohang.findOne({"UID" : req.params.uid*1})
    const index = cart.prdId.findIndex( (value) => value._id == product._id )
    if(index !== -1)
    cart.quantity[index] += cart.quantity[index]++
    else 
    {
      cart.prdId.push(product)
      cart.quantity.push(1)
    }

    const result = await giohang.findOneAndUpdate({"UID" : req.params.uid*1} , {$set : {"prdId" : cart.prdId , "quantity" : cart.quantity}})

    res.json(result)
  } catch (error) {
    console.log(error)
    return next(new ErrorAPI(500,"Error When Add New Item To Cart "))
  }
}
