<template>
        <div class="card">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    
                    <li class="nav-item">
                        <a class="nav-link">
                            <router-link :to= "`/mybill/${props.id}`">
                                Đơn Hàng Hiện Tại
                            </router-link>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a  class="nav-link active">
                            Tất Cả Đơn Hàng
                        </a>
                    </li>

                </ul>
            </div>
            <div class="card-body" v-if='listBill.length > 0 '>
                <table class="table text-center" >
                                <thead>
                                        <tr>
                                                <th scope="col">Mã Hoá Đơn</th>
                                                <th scope="col">Tổng Hoá Đơn</th>
                                                <th scope="col">Ngày Đặt</th>
                                                <th scope="col">Trạng Thái</th>
                                                <th scope="col"></th>
                                        </tr>
                                </thead>
                                <tbody>
                                        <tr class="align-middle " v-for="i in listBill" :key="i._id">
                                                <th scope="row"> {{ i._id }} </th>
                                                <td> {{ i.value.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</td>
                                                <td> {{ i.createDate}}</td>
                                                <td> {{ indexStatus[i.status] }}</td>

                                                <td>
                                                        <button type="button" class="btn btn-outline-success" @click="$router.push(`/detail/${i._id}`)">Chi Tiết Hoá Đơn</button>   
                                                </td>
                                        </tr>
                                </tbody>
                        </table>
            </div>
            <div class="else text-center m-4" v-else>
                <h3>
                    Bạn Chưa Có Đơn Hàng Nào
                </h3>
            </div>
            <div class="card-footer text-center">
                <button class="btn btn-outline-danger" @click='$router.push("/info")'>Quay Lại</button>
            </div>
        </div>
</template>
    
<script setup>
import {ref} from 'vue'
import AxiosAPI from '../services/api.service'

const props = defineProps(['id'])
const listBill = ref([])
const indexStatus = ["Đã Huỷ" , "Chờ Xác Nhận" , "Đang Gói Hàng" , "Đang Giao Hàng" , "Đã Thanh Toán" , "Đã Huỷ"]

async function getListBill() 
{
    listBill.value = await AxiosAPI.getAllBillUID(props.id)  
}
getListBill()


</script>
    
<style scoped>
 .card{
    width: 75vw;
 }
</style>