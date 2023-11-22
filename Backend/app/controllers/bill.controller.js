const MongoService = require('../services/mongo.service')
const ErrorAPI     = require('../ErrorAPI')

exports.createBill = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const hoadon = Service.hoadon
    const chitiet = Service.chitiet
    const truyvan = Service.truyvan
    const detail  = req.body.detail || {prdID : [] , quantity : []}
    const index   = await truyvan.findOneAndUpdate({} , {$inc : {hoadon : 1 , chitiet : 1}})
    // console.log(index.hoadon)
    const result  = await hoadon.insertOne({"_id" : index.hoadon , ...req.body.info})
    await chitiet.insertOne({"_id" : index.chitiet , "billNumber" : index.hoadon , ...detail})
    if(result.acknowledged)
      return res.json({message : "Thêm Mới Hoá Đơn Thành Công"})
    return res.json({message : "Thêm Mới Hoá Đơn Thất Bại"})
  
  } catch (error) {
    return next(new ErrorAPI(500,"Error When Create hoadon"))
  }
};

exports.updateBill = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const hoadon = Service.hoadon
    const result  = await hoadon.findOneAndUpdate({"_id" : req.params.id*1} , {$set : req.body})
    if(result)
      return res.json({message : "Cập Nhật Hoá Đơn Thành Công"})
    return res.json({message : "Không Tìm Thấy Hoá Đơn"})
  
  } catch (error) {
    return next(new ErrorAPI(500,"Error When Update Hoa Don"))
  }
};

exports.cancelBill = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const hoadon = Service.hoadon
    const result  = await hoadon.findOneAndUpdate({"_id" : req.params.id*1} , {$set : {status : 0}})
    if(result)
      return res.json({message : "Huỷ Hoá Đơn Thành Công"})
    return res.json({message : "Không Tìm Thấy Hoá Đơn"})
  } catch (error) {
    return next(new ErrorAPI(500,"Error When Update Hoa Don"))
  }
};

exports.findBillbyId = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const hoadon = Service.hoadon
    const chitiet = Service.chitiet
    const result  = await hoadon.findOne({"_id" : req.params.id*1})
    const detail  = await chitiet.findOne({"billNumber" : req.params.id*1})
    if(!result)
      return res.json({message : `Hoá Đơn có ID : ${req.params.id} Không Tồn Tại`})
    return res.json({...result , detail : detail}) 
  } catch (error) {
    return next(new ErrorAPI(500 , "Get Error When Find HoaDon By ID"))
  }
};

exports.nextStatus = async (req, res, next) => {
  try {
    const status = ["Đã Huỷ" , "Đã Đặt Hàng" , "Đã Xác Nhận" , "Đang Giao Hàng" , "Đã Thanh Toán"]
    const Service = new MongoService()
    const hoadon = Service.hoadon
    const result  = await hoadon.findOneAndUpdate({"_id" : req.params.id*1} , {$inc : {status : 1}})
    if(result.status >= 4)
      return res.json({message : "Hoá Đơn Đã Được Thanh Toán"})
    if(result)
      return res.json({message : `Cập Nhật Trạng Thái Hoá Đơn Thành ${status[result.status + 1]} Thành Công`})
    return res.json({message : "Không Tìm Thấy Hoá Đơn"})
  
  } catch (error) {
    return next(new ErrorAPI(500,"Error When Update Hoa Don"))
  }
};

exports.validBill = async (req,res,next) => {
  try {
    const service = new MongoService()
    const hoadon = service.hoadon
    const result = await hoadon.findOneAndUpdate({"_id" : req.params.id*1} , {$set : {"status" : 2 , "SID" : req.body.SID}})
    
    res.json(result)

  } catch (error) {
    return next(new ErrorAPI(500,"Error When Update Hoa Don"))
  }
}

exports.doneBill = async (req,res,next) => {
  try {
    const service = new MongoService()
    const hoadon = service.hoadon
    // console.log(req.body);

    const result = await hoadon.findOneAndUpdate({"_id" : req.params.id*1} , {$set : {"status" : 4 , "deliveryDate" : req.body.deliveryDate}})
    
    res.json(result)

  } catch (error) {
    return next(new ErrorAPI(500,"Error When Update Hoa Don"))
  }
}


exports.getBillByUID = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const hoadon = Service.hoadon
    const result  = await hoadon.find({"UID" : req.params.uid*1}).sort({"_id" : -1}).toArray()
    return res.json(result) 
  } catch (error) {
    return next(new ErrorAPI(500 , "Get Error When Get HoaDon By UID"))
  }
};
exports.getAvailableBillByUID = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const hoadon = Service.hoadon
    // const result  = await hoadon.find({"UID" : req.params.uid*1 , {$and : [{$ne : 0 } , {$ne : 5}]} }).sort({"_id" : -1}).toArray()
    const result  = await hoadon.find({ $and : [{'status':{$ne : 0 }} , {'status':{$ne : 4 }} , {"UID" : req.params.uid*1} ]}).sort({"_id" : -1}).toArray()
    return res.json(result) 
  } catch (error) {
    return next(new ErrorAPI(500 , "Get Error When Get HoaDon By UID"))
  }
};

exports.getBillBySID = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const hoadon = Service.hoadon
    // const result  = await hoadon.find({"SID" : req.params.sid*1} , {"status" : }).toArray()
    const result  = await hoadon.find({ $and : [{'status':{$lt : 4 }} , {"SID" : req.params.sid*1}]}).toArray()
    return res.json(result) 
  } catch (error) {
    return next(new ErrorAPI(500 , "Get Error When Get HoaDon By SID"))
  }
};

exports.getAllBillBySID = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const hoadon = Service.hoadon
    const result  = await hoadon.find({"SID" : req.params.sid*1}).sort({"_id" : -1}).toArray()
    // const result  = await hoadon.find({ $and : [{'status':{$ne : 0 }} , {'status':{$ne : 4 }} , {"SID" : req.params.sid*1}]}).toArray()
    return res.json(result) 
  } catch (error) {
    return next(new ErrorAPI(500 , "Get Error When Get HoaDon By SID"))
  }
};

exports.getNewBill = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const hoadon = Service.hoadon
    const result  = await hoadon.find({"status" : 1}).toArray()
    return res.json(result) 
  } catch (error) {
    return next(new ErrorAPI(500 , "Get Error When Get New HoaDon"))
  }
};