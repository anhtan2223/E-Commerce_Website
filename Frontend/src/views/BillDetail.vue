<template>
       <div class="card">
            <div class="card-header text-center">
                <h3>Chi Tiết Hoá Đơn</h3>
            </div>
            <div class="card-body">
                <!-- {{ bill }} -->
                <div class="row mt-3">
                    <div class="col-3">
                        <strong>Mã Hoá Đơn</strong>
                    </div>
                    <div class="col-4">{{ bill._id }}</div>

                    <div class="col-2">
                        <strong>Giá Trị Hoá Đơn</strong>
                    </div>
                    <div class="col-3">{{ bill.value.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</div>
                </div>

                <div class="row mt-3">
                    <div class="col-3">
                        <strong>Ngày Đặt Hàng</strong>
                    </div>
                    <div class="col-4">{{ bill.createDate }}</div>
                    <div class="col-2">
                        <strong>Ngày Giao Hàng</strong>
                    </div>
                    <div class="col-3">{{ bill.deliveryDate==-1 ? "Chưa Giao Hàng" : bill.deliveryDate }}</div>
                </div>

                <div class="row mt-3 mb-3">
                    <div class="col-3">
                        <strong>Trạng Thái</strong>
                    </div>
                    <div class="col-4">{{ indexStatus[bill.status] }}</div>
                </div>

                <div class="row mt-3">
                    <table class="table text-center" >
                                <thead>
                                        <tr>
                                                <!-- <th scope="col">Hình Ảnh</th> -->
                                                <th scope="col">Tên Sản Phẩm</th>
                                                <th scope="col">Giá Tiền</th>
                                                <th scope="col">Số Lượng</th>
                                                <th scope="col">Tổng Tiền</th>
                                        </tr>
                                </thead>
                                <tbody>
                                        <tr class="align-middle" v-for="(i,index) in bill.detail.prdId" :key="i._id">
                                                <!-- <th scope="row">
                                                        <img class="image" :src="i.PrdImage" alt="">
                                                        <img class="image" src="../image/quan3.png" alt="">
                                                        {{ i.PrdImage }}
                                                </th>  -->
                                                <td>{{ i.productName }}</td>
                                                <td> {{ i.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</td>
                                                <td>
                                                        {{ bill.detail.quantity[index]}}
                                                </td>
                                                <td>{{ (i.price*bill.detail.quantity[index]).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</td>

                                        </tr>
                                </tbody>
                        </table>
                </div>
            </div>
            <div class="card-footer text-center">
                <button class="btn btn-outline-danger" @click='$router.go(-1)'>Quay Lại</button>
            </div>
       </div>
</template>
    
<script setup >
    const props = defineProps(['mahoadon'])
    import {ref} from "vue"
    import AxiosAPI from '../services/api.service'

    const indexStatus = ["Đã Huỷ" , "Chờ Xác Nhận" , "Đang Gói Hàng" , "Đang Giao Hàng" , "Đã Thanh Toán" , "Đã Huỷ"]


    const bill = ref()
    const user = ref()
    async function getInfo() 
    {
        bill.value = await AxiosAPI.getBillDetailByID(props.mahoadon)
        // user.value = await AxiosAPI.
    }
    getInfo()
     
</script>
    
<style scoped>
.card{
    width : 80vw;
} 
.image {
                height: 8vh;
        }
</style>