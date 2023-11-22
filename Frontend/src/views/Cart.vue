<template>
        <div class="container bg-white text-center">
                <h3 class="text-center m-3 header-cart">Giỏ Hàng</h3>
                <hr>
                <div class="card-body" v-if="quantity.length != 0">
                        <table class="table" >
                                <thead>
                                        <tr>
                                                <th scope="col">Hình Ảnh</th>
                                                <th scope="col">Tên Sản Phẩm</th>
                                                <th scope="col">Giá Tiền</th>
                                                <th scope="col">Số Lượng</th>
                                                <th scope="col">Tổng Tiền</th>
                                        </tr>
                                </thead>
                                <tbody>
                                        <tr class="align-middle" v-for="(i,index) in cart.prdId" :key="i._id">
                                                <th scope="row">
                                                        <img class="image" :src="i.PrdImage" alt="">
                                                </th>
                                                <td>{{ i.productName }}</td>
                                                <td> {{ i.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</td>
                                                <td>
                                                        <input type="number" 
                                                        name="" id="" 
                                                        class="form-control"
                                                        v-model="quantity[index]" 
                                                        min="0"
                                                        max="200"
                                                        @change="updateItem(index)"
                                                        >
                                                </td>
                                                <td>{{ (i.price*quantity[index]).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</td>
                                                <td>
                                                        <button type="button" class="btn btn-outline-danger" @click="deleteItem(index)">Xoá </button>   
                                                </td>
                                        </tr>
                                </tbody>
                        </table>

                        <div class="detail text-end me-4">
                                <strong>Tổng Tiền : {{ SumMoney.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</strong>
                        </div>

                        <div class="footer mb-3">
                                <button class="btn btn-outline-success" @click="createBill">Xác Nhận Đặt Hàng</button>
                        </div>

                </div>

                <div class="card-body" v-else>
                        <h3>Bạn Chưa Thêm Món Nào Vào Giỏ Hàng</h3>
                </div>
                <hr>
        </div>
        
</template>
        
<script setup lang='ts'>
import { useRouter } from "vue-router"
import { ref , computed} from "vue"
import AxiosAPI from '../services/api.service'
const router = useRouter()
if(localStorage.isLogin !== 'user')
{
        alert("Vui Đăng Nhập Tài Khoản Khách Hàng")
        router.push('/login')
}
const cart = ref()
const quantity = ref([])
const UID = JSON.parse(localStorage.info)._id
async function GetCart() 
{
        cart.value = await AxiosAPI.getCart(UID)        
        quantity.value = cart.value.quantity        
}
GetCart()
const SumMoney = computed(()=>{
        return quantity.value.reduce((acc , value , index) => { 
                return acc + value * cart.value.prdId[index].price
        },0)
})
async function updateItem(index)
{
        if(quantity.value[index] === 0)
                deleteItem(index)
        else await AxiosAPI.updateCart(UID , {quantity : quantity.value})
}

async function deleteItem(index) 
{
        const newprdId = cart.value.prdId.filter((val , ind ) => ind != index)
        const newQuantity = quantity.value.filter((val , ind ) => ind != index)
        await AxiosAPI.updateCart(UID,{prdId : newprdId , quantity : newQuantity})
        GetCart()
}
async function clearCart() 
{
        const newprdId = []
        const newQuantity = []
        await AxiosAPI.updateCart(UID,{prdId : newprdId , quantity : newQuantity})
        GetCart()
}
function getNow()
   {
        const now = new Date()
        const date = now.getDate()
        const mounth = now.getMonth()+1
        const year = now.getFullYear()
        return `${year}-${mounth}-${date}`
   }
const now = getNow()
const newBill = ref()
async function createBill() 
{
        newBill.value = 
        {
                info : 
                {
                        "UID" : UID ,
                        "SID" : -1 ,
                        "status" : 1 ,
                        "createDate" : now ,
                        "deliveryDate" : -1 ,
                        "value" : SumMoney ,
                },
                detail : 
                {
                        prdId : cart.value.prdId ,
                        quantity : quantity.value ,
                }
        }
        await AxiosAPI.createBill(newBill.value.info,newBill.value.detail)
        await clearCart()
        alert("Đặt Hàng Thành Công")
        router.push(`/mybill/${UID}`)
}

</script>
        
<style scoped>
        .image {
                height: 8vh;
        }

        .item {
                color: rgb(181, 39, 39);
        }
        .container{
                border-radius: 20px;
        }

</style>