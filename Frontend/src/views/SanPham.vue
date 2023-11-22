<template>
        <div class="big mt-4">
                <h1 class="text-center mb-3" style="color : white">Sản Phẩm</h1>

                <div class="inputSearch mt-3 text-center">
                        <input type="text" 
                        class="text-center" 
                        placeholder="Nhận Tên Sản Phẩm Cần Tìm"
                        @keyup.enter="getProductByName"
                        v-model="input"
                        >

                        <button  class="btn btn-dark" width="20px" @click='getProductByName'>
                                <i class="fas fa-search"></i>
                        </button>
                        
                        <button v-if='isLogin == "staff"' class="btn btn-primary align-middle" style="margin-top:-3px" @click="$router.push('/product')">
                                Thêm Mới
                                <i class="fas fa-plus"  width="20px"></i>
                        </button>

                </div>
                <div class="selectType mt-3 row">
                        <select class="form-select" v-model="type" @change='getProductByName'>
                                <option :value="0">Tất Cả</option>
                                <option 
                                        v-for='i in typeList' 
                                        :key="i._id" 
                                        :value='i._id'
                                        > {{ i.Name }} 
                                </option>
                        </select>
                </div>
                <div class="card-group" v-if="productList.length != 0">
                        <div class="card" v-for="i in productList" :key="i._id">
                                <div class="card-body text-center">
                                       <img :src="i.PrdImage" alt="PrdImage">
                                </div>
                                <div class="products_text text-center">
                                        <h2>{{  i.productName }}</h2>
                                        <p>
                                               {{ i.description }}
                                        </p>
                                        <h3>{{ i.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</h3>

                                        <button class="btn add-cart m-3" v-if="isLogin !== 'staff'" @click="addItem(i)">Thêm Vào Giỏ Hàng</button>
                                        <div v-else>
                                                <button 
                                                class="btn btn-outline-success m-3"
                                                @click="$router.push(`/product/${i._id}`)"
                                                >
                                                        Chỉnh Sửa
                                                </button>
                                                <button 
                                                class="btn btn-outline-danger m-3"
                                                @click='deleteProduct(i._id)'
                                                >Xoá</button>
                                        </div>
                                </div>
                        </div>
                        <!-- {{ productList }} -->
                </div>
                <h2 class="text-center mt-5" style="color:white" v-else>Không Tìm Thấy Sản Phẩm</h2>
        </div>
</template>
    
<script setup >
        import {ref} from 'vue'
        import AxiosAPI from '../services/api.service'
        import { useRouter } from 'vue-router'

        const productList = ref([])
        const typeList = ref([])
        const type = ref(0)
        const input = ref("")
        const router = useRouter()
        var uid = localStorage.info ? JSON.parse(localStorage.info)._id : null 
        const isLogin = localStorage.isLogin
        async function getProduct()
        {
                productList.value = await AxiosAPI.getAllProduct()
        }
        getProduct()

        async function getProductByName()
        {
                const TYPE = type.value == 0 ? undefined : type.value 
                productList.value = await AxiosAPI.getProductByName(input.value , TYPE)
        }

        async function getType()
        {
                typeList.value = await AxiosAPI.getAllType()
        }
        getType()
        async function addItem(product) 
        {
                if(!uid)
                {
                        alert("Đăng Nhập Để Thêm Vào Giỏ Hàng")
                        router.push('/login')
                }
                else
                {
                        await AxiosAPI.addProductToCart(uid , product)
                        alert(`Đã Thêm Sản Phẩm ${product.productName} Vào Giỏ Hàng`)     
                }
        }
        async function deleteProduct(PID) 
        {
                await AxiosAPI.deleteProduct(PID)
                alert('Xoá Thành Công')
                getProductByName()
        }

        
</script>
    
<style scoped>
    .card {
        box-shadow: 0 0 20px rgb(255, 255, 255);
        margin : 1.5vw ;
        min-width: 22vw;
        max-width: 22vw;
    }
    .card-group{
        margin-left: 4vw  ;
        margin-bottom : 20px ;
    }
    .card:first-child{
        margin-left: 0px;
    }
    .card:hover{
        transform: translateX(30);
    }
    .card img {
        width: 10vw;
        transition: 0.5s;
    }
    .card img:hover{
        transform: scale(1.2);
    }
    .card .add-cart {
        color: rgb(255, 255, 255);
        background: linear-gradient(to right, #c72092 , #6c14d0);
    }
    .inputSearch input{
        width: 40vw;
        height: 31px;
    }
    .inputSearch .btn{
        height: auto;
    }
    .selectType{
        /* width: 52vw; */
        /* margin-left: 24vw; */
        width: 40vw;
        margin-left: 50%;
        transform:translateX(-50%);
    }

    .card p {
        height : 10vh ;
    }
    
</style>