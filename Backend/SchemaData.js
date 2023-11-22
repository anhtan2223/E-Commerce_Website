const role = 
{
    "_id"           : "int",
    "roleName"      : "string" 
}

const account = 
{
    "_id"       : "int",
    "username"  : "string",
    "password"  : "string",
    "name"      : "string",
    "address"   : "string",
    "email"     : "string",
    "phone"     : "string",  
    "role"      : "int"
}

const sanpham = 
{
    "_id"           : "int" ,
    "type"          : "string" ,
    "productName"   : "string",
    "description"   : "string",
    "price"         : "int",
    "quantity"      : "int",
    "PrdImage"      : "image"
}

const hoadon = 
{
    "_id"        : "int",
    "createDate"        : "date",
    "deliveryDate"      : "date",
    "status"            : "int",
    "UID"               : "int",
    "SID"               : "int"
}

const chitiet = 
{
    "_id"           : "int",
    "billNumber"    : "int",
    "prdId"         : ["SP1" , "Sp2"],
    "quantity"      : [  1   ,   3  ],
}

const giohang = 
{
    "_id"       : "int" ,
    "UID"       : "int" ,
    "prdId"     :["SP1" , "Sp2" ] ,
    "quantity"  :[  1   ,   3   ] ,
}

const roleInput = 
[
    {
        "_id": 1,
        "roleName": "Khach Hang"
    },
    {
        "_id": 2,
        "roleName": "Nhan Vien"
    },
    {
        "_id": 3,
        "roleName": "Admin"
    }
]
const accountInput = 
[
    {
        "_id": 1,
        "username": "admin",
        "password": "123",
        "name": "Người Quản Lý",
        "address": "Hé lô",
        "email": "admin@gmail.com",
        "phone": "1000",  
        "role": 3
    },
    {
        "_id": 2,
        "username": "staff",
        "password": "123",
        "name": "Nhân Viên",
        "address": "Hé lô",
        "email": "staff@gmail.com",
        "phone": "1000",  
        "role": 2
    },
    {
        "_id": 3,
        "username": "user",
        "password": "123",
        "name": "Khách Hàng",
        "address": "Hé lô",
        "email": "cus@gmail.com",
        "phone": "1000",  
        "role": 1
    },
    {
        "_id": 4,
        "username": "lsatan",
        "password": "123",
        "name": "Lê Sỹ Anh Tấn",
        "address": "Hé lô",
        "email": "user@gmail.com",
        "phone": "1000",  
        "role": 1
    },
    {
        "_id": 5,
        "username": "lpthinh",
        "password": "123",
        "name": "Lê Phu THinh",
        "address": "Hé lô",
        "email": "user@gmail.com",
        "phone": "1000",  
        "role": 1
    },
    {
        "_id": 6,
        "username": "php",
        "password": "123",
        "name": "Phạm Hoàng Phong",
        "address": "Hé lô",
        "email": "user@gmail.com",
        "phone": "1000",  
        "role": 1
    },
    {
        "_id": 7,
        "username": "staff2",
        "password": "123",
        "name": "Nhân Viên 2",
        "address": "Hé lô",
        "email": "user@gmail.com",
        "phone": "1000",  
        "role": 2
    }
]
const sanphamInput = 
[
    {
        "_id"           : 1 ,
        "productName"   : "Giầy Vàng",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 12000000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes1.png"
    },
    {
        "_id"           : 2 ,
        "productName"   : "Giầy Đen",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 950000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes2.png"
    },
    {
        "_id"           : 3 ,
        "productName"   : "Giầy Xanh",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 120000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes3.png"
    },
    {
        "_id"           : 4 ,
        "productName"   : "Giầy Xanh Trắng",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 10000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes4.png"
    },
    {
        "_id"           : 5 ,
        "productName"   : "Giầy Xám",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 215000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes5.png"
    },
    {
        "_id"           : 6 ,
        "productName"   : "Giầy Cam",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 1250000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes6.png"
    },
    {
        "_id"           : 7 ,
        "productName"   : "Giầy Đỏ",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 625000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes7.png"
    },
    {
        "_id"           : 8 ,
        "productName"   : "Giầy Đen Xanh",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 125000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes8.png"
    },
    {
        "_id"           : 9 ,
        "productName"   : "Giầy Thể Thao",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 325000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes.png"
    },
    {
        "_id"           : 10 ,
        "productName"   : "Giầy Đỏ Đen",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 650000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/giay9.jpg"
    },
    {
        "_id"           : 11 ,
        "productName"   : "Giầy Xám",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 285000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/giay10.jpg"
    },
    {
        "_id"           : 12 ,
        "productName"   : "Giầy Xanh Đen",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 345000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/giay11.jpg"
    },
    {
        "_id"           : 13 ,
        "productName"   : "Giầy Cổ Cao",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 950000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/giay12.jpg"
    },
    {
        "_id"           : 14 ,
        "productName"   : "Áo Đen",
        "type"          : 2 ,   
        "description"   : "Chiếc Áo Màu Sang Trọng",
        "price"         : 120000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/ao1.jpg"
    },
    {
        "_id"           : 15 ,
        "productName"   : "Áo Xanh",
        "type"          : 2 ,   
        "description"   : "Chiếc Áo Màu Sang Trọng",
        "price"         : 240000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/ao2.jpg"
    },
    {
        "_id"           : 16 ,
        "productName"   : "Áo Đỏ",
        "type"          : 2 ,   
        "description"   : "Chiếc Áo Màu Sang Trọng",
        "price"         : 888000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/ao3.jpg"
    },
    {
        "_id"           : 17 ,
        "productName"   : "Quần Đen Dài",
        "type"          : 3 ,   
        "description"   : "Chiếc Quần Màu Sang Trọng",
        "price"         : 545000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/quan1.jpg"
    },
    {
        "_id"           : 18 ,
        "productName"   : "Quần Xám Dài",
        "type"          : 3 ,   
        "description"   : "Chiếc Quần Màu Sang Trọng",
        "price"         : 240000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/quan2.jpg"
    },
    {
        "_id"           : 19 ,
        "productName"   : "Combo 3 Tất",
        "type"          : 4 ,   
        "description"   : "Chiếc Tất Màu Sang Trọng",
        "price"         : 55000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/vo1.jpg"
    },
    {
        "_id"           : 20 ,
        "productName"   : "Đồng Hồ Đen",
        "type"          : 5 ,   
        "description"   : "Đồng Hồ Màu Sang Trọng",
        "price"         : 25000000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/dongho1.jpg"
    },
    {
        "_id"           : 21 ,
        "productName"   : "Đồng Hồ Vàng",
        "type"          : 5 ,   
        "description"   : "Đồng Hồ Màu Sang Trọng",
        "price"         : 900000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/dongho2.jpg"
    },
    {
        "_id"           : 22 ,
        "productName"   : "Cà Chua",
        "type"          : 6 ,   
        "description"   : "Trái Cây Tươi",
        "price"         : 15000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/traicay1.png"
    },
    {
        "_id"           : 23 ,
        "productName"   : "Táo Đỏ",
        "type"          : 6 ,   
        "description"   : "Trái Cây Tươi",
        "price"         : 35000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/traicay2.png"
    },
    {
        "_id"           : 24 ,
        "productName"   : "Chuối Vàng",
        "type"          : 6 ,   
        "description"   : "Trái Cây Tươi",
        "price"         : 40000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/traicay3.png"
    },
    {
        "_id"           : 25 ,
        "productName"   : "Bắp Cải Xanh",
        "type"          : 6 ,   
        "description"   : "Trái Cây Tươi",
        "price"         : 10000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/traicay4.jpg"
    },
    {
        "_id"           : 26 ,
        "productName"   : "Đồng Hồ Vàng",
        "type"          : 5 ,   
        "description"   : "Đồng Hồ Màu Sang Trọng",
        "price"         : 799000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/dongho3.jpg"
    },
    {
        "_id"           : 27 ,
        "productName"   : "Quần Perry",
        "type"          : 3 ,   
        "description"   : "Chiếc Quần Màu Sang Trọng",
        "price"         : 40000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/quan3.png"
    },
    {
        "_id"           : 28 ,
        "productName"   : "Áo Perry",
        "type"          : 2 ,   
        "description"   : "Chiếc Áo Màu Sang Trọng",
        "price"         : 80000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/ao4.png"
    },
]
const TypeProductInput = 
[
    {
        "_id" : 1 ,
        "Name" : "Giầy" 
    },
    {
        "_id" : 2 ,
        "Name" : "Áo" 
    },
    {
        "_id" : 3 ,
        "Name" : "Quần" 
    },
    {
        "_id" : 4 ,
        "Name" : "Vớ" 
    },
    {
        "_id" : 5 ,
        "Name" : "Đồng Hồ" 
    },
    {
        "_id" : 6 ,
        "Name" : "Hoa Quả" 
    },
]
const hoadonInput = 
[
    {
        "_id"               : 1 ,
        "createDate"        : "2023-10-10",
        "deliveryDate"      : -1,
        "status"            : 1,
        "UID"               : 3,
        "SID"               : -1 ,
        "value"             : 40000 ,
    },
    {
        "_id"               : 2 ,
        "createDate"        : "2023-11-21" ,
        "deliveryDate"      : -1,
        "status"            : 1,
        "UID"               : 3,
        "SID"               : -1 ,
        "value"             : 25725000 ,
    }
]
//  Các Trạng Thái Ứng với Các Số 
//  Đã Huỷ          -> 0
//  Đã Đặt Hàng     -> 1
//  Đã Xác Nhận     -> 2
//  Đang Giao Hàng  -> 3
//  Đã Thanh Toán   -> 4
const chitietInput = 
[
    {
        "_id"       : 1,
        "billNumber": 1,
        "prdId": 
        [
              {
                "_id": 27,
                "productName": "Quần Perry",
                "type": 3,
                "description": "Chiếc Quần Màu Sang Trọng",
                "price": 40000,
                "PrdImage": "image/quan3.png"
              }
        ],
        "quantity":
        [
            1
        ]
    } ,
    {
        "_id" : 2 ,
        "billNumber": 2,
        "prdId": [
        {
            "_id": 19,
            "productName": "Combo 3 Tất",
            "type": 4,
            "description": "Chiếc Tất Màu Sang Trọng",
            "price": 55000,
            "PrdImage": "image/vo1.jpg"
        },
        {
            "_id": 27,
            "productName": "Quần Perry",
            "type": 3,
            "description": "Chiếc Quần Màu Sang Trọng",
            "price": 40000,
            "PrdImage": "image/quan3.png"
        },
        {
            "_id": 28,
            "productName": "Áo Perry",
            "type": 2,
            "description": "Chiếc Áo Màu Sang Trọng",
            "price": 80000,
            "PrdImage": "image/ao4.png"
        },
        {
            "_id": 20,
            "productName": "Đồng Hồ Đen",
            "type": 5,
            "description": "Đồng Hồ Màu Sang Trọng",
            "price": 25000000,
            "PrdImage": "image/dongho1.jpg"
        }
        ],
        "quantity": [
        3,
        4,
        5,
        1
        ]
    }
]
const giohangInput = 
[
    {
        "_id"       : 1 ,
        "UID"       : 3 ,
        "prdId"     :
        [
            {
                "_id"           : 19 ,
                "productName"   : "Combo 3 Tất",
                "type"          : 4 ,   
                "description"   : "Chiếc Tất Màu Sang Trọng",
                "price"         : 55000,
                "PrdImage"      : "image/vo1.jpg"
            },
            {
                "_id"           : 27 ,
                "productName"   : "Quần Perry",
                "type"          : 3 ,   
                "description"   : "Chiếc Quần Màu Sang Trọng",
                "price"         : 40000,
                "PrdImage"      : "image/quan3.png"
            },
            {
                "_id"           : 28 ,
                "productName"   : "Áo Perry",
                "type"          : 2 ,   
                "description"   : "Chiếc Áo Màu Sang Trọng",
                "price"         : 80000,
                "PrdImage"      : "image/ao4.png"
            },
            {
                "_id": 20,
                "productName": "Đồng Hồ Đen",
                "type": 5,
                "description": "Đồng Hồ Màu Sang Trọng",
                "price": 25000000,
                "PrdImage": "image/dongho1.jpg"
              }
        ] ,
        "quantity"  : [3,4,5,1] ,   
    },
    {
        "_id"       : 2 ,
        "UID"       : 4 ,
        "prdId"     : [] ,
        "quantity"  : [] ,   
    },
    {
        "_id"       : 3 ,
        "UID"       : 5 ,
        "prdId"     : [] ,
        "quantity"  : [] ,   
    },
    {
        "_id"       : 4 ,
        "UID"       : 6 ,
        "prdId"     : [] ,
        "quantity"  : [] ,   
    },
]
//Next Number
const BangTruyVan = 
[
    {
        "_id"           : 0 ,
        "account"       : 8 ,
        "sanpham"       : 29 ,
        "hoadon"        : 3 ,
        "chitiet"       : 3 ,
        "giohang"       : 5 ,
    }
]

module.exports = {
    role    : roleInput ,
    account : accountInput ,
    sanpham : sanphamInput ,
    type    : TypeProductInput ,
    hoadon  : hoadonInput  ,
    chitiet : chitietInput ,
    giohang : giohangInput ,
    truyvan : BangTruyVan  
}