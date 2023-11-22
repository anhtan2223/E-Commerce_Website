module.exports = {
    app : {
        PORT : 3000
    } ,
    db : {
        url : "mongodb://127.0.0.1:27017" ,
        dbName : "QuanLyBanHang" ,
        collection : 
        {
            role    :   "BangChucVu" ,
            account :   "BangNguoiDung" ,
            sanpham :   "ThongTinSanPham" ,
            type    :   "LoaiSanPham" ,
            hoadon  :   "HoaDon" ,
            chitiet :   "ChiTietHoaDon" ,
            giohang :   "GioHang" ,
            truyvan :   "BangTruyVan"
        }

    }
}