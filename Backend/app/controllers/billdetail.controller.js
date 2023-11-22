const MongoService = require('../services/mongo.service')
const ErrorAPI  = require('../ErrorAPI');

exports.updateDetailBill = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const chitiet = Service.chitiet
    const result  = await chitiet.findOneAndUpdate({"billNumber" : req.params.id*1} , {$set : req.body})
    if(result)
      return res.json({message : "Chi Tiết Hoá Đơn Thành Công"})
    return res.json({message : "Không Tìm Thấy Hoá Đơn"})
  
  } catch (error) {
    return next(new ErrorAPI(500,"Error When Update Chi Tiết Hoá Đơn"))
  }
};
