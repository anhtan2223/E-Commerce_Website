<template>
        <div class="user bg-white">
            <h3 class="text-center mt-3 mb-3">Thông Tin Tài Khoản</h3>
            <hr>
            <div class="body-div">

                <div class="row align-items-center m-3">
                        <div class="col-2">
                            <label for="name" class="col-form-label">Họ và Tên</label>
                        </div>
                        <div class="col-4">
                            <input type="text" id="name" class="form-control " disabled v-model = 'info.name' v-if='!isSetting'>
                            <input type="text" id="name" class="form-control "  v-model='info.name' v-else>
                        </div>
                        <div class="col-2">
                            <label for="phone" class="col-form-label">Số Điện Thoại</label>
                        </div>
                        <div class="col-4">
                            <input type="text" id="phone" class="form-control " disabled v-model='info.phone' v-if='!isSetting'>
                            <input type="text" id="phone" class="form-control "  v-model='info.phone' v-else>
                        </div>
                </div>

                <div class="row align-items-center m-3">
                        <div class="col-2">
                            <label for="username" class="col-form-label">Tài Khoản</label>
                        </div>
                        <div class="col-4">
                            <input type="text" id="username" class="form-control " disabled :value='info.username'>
                        </div>
                        <div class="col-2">
                            <label for="email" class="col-form-label">Email</label>
                        </div>
                        <div class="col-4">
                            <input type="text" id="email" class="form-control " disabled v-model='info.email' v-if='!isSetting'>
                            <input type="text" id="email" class="form-control "  v-model='info.email' v-else>
                        </div>
                </div>

                <div class="row align-items-center m-3" v-if="isLogin === 'user'">
                        <div class="col-2">
                            <label for="email" class="col-form-label">Địa Chỉ</label>
                        </div>

                        <div class="col-10" >
                            <input type="text" id="email" class="form-control " disabled :value='info.address' v-if="!isSetting">
                            <input type="text" id="email" class="form-control " v-model='info.address' v-else>
                        </div>

                </div>
            </div>
            <hr>
            <div class="footer-element m-4">
                <div class="d-grid gap-3 d-md-flex justify-content-md-around">
                        <button class="btn btn-outline-primary" type="button" @click="isSetting = !isSetting" v-if="!isSetting">Sửa Thông Tin </button>
                        <button class="btn btn-outline-success"
                            type="button" 
                            @click="UpdateInfo"
                            v-else>Xác Nhận 
                        </button>
                            <router-link :to="'/info/doimk'">
                                <button class="btn btn-outline-primary" type="button">
                                    Đổi Mật Khẩu
                                </button>
                            </router-link>
                            <router-link :to="'/mybill/'+root._id" v-if="isLogin === 'user'">
                                <button class="btn btn-outline-primary" type="button">
                                   Đơn Hàng Của Tôi
                                </button>
                            </router-link>
                            <router-link :to="'/bill'" v-else>
                                <button class="btn btn-outline-primary" type="button">
                                    Quản Lý Đơn Hàng
                                </button>
                            </router-link>
                            <router-link to="/login">
                                <button class="btn btn-outline-danger " type="button" @click="DangXuat">
                                    Đăng Xuất
                                </button>
                            </router-link>
                        </div>
            </div>
        </div>
</template>
    
<script setup lang='ts'>
    import {ref} from 'vue'
    import AxiosAPI from '../../services/api.service'
    const root = JSON.parse(localStorage.info)
    const info = ref({...root})
    delete info.value._id
    const isLogin = localStorage.isLogin
    const isSetting = ref(false)
    async function UpdateInfo() 
    {
        isSetting.value = !isSetting.value 
        await AxiosAPI.UpdateAccount(root._id , info.value)
        alert("Cập Nhật Thông Tin Tài Khoản Thành Công")
        localStorage.info = JSON.stringify({"_id" : root._id , ...info.value})
    }
    function DangXuat()
    {
        localStorage.clear()
    }
</script>
    
<style>
    .user{
        border-radius: 20px;
        width: 75vw;
        /* height: 50vh; */
    }
</style>