<template>
        <div class="card">
            <div class="card-header">
                <h3 class="text-center">
                    <slot></slot>
                </h3>
            </div>
            <div class="card-body text-center">
            <div class="row g-3 justify-content-center mb-3">
                <div class="col-3 text-start">
                    <strong>Tên Sản Phẩm</strong>
                </div>
                <div class="col-9">
                    <input v-model="Product.productName" type="text" class="form-control " >
                </div>
            </div>
            <div class="row g-3 justify-content-center mb-3">
                <div class="col-3 text-start">
                    <strong>Phân Loại</strong>
                </div>
                <div class="col-9">
                    <select class="form-select" v-model="Product.type" >
                                <option :value="0">Chọn Loại Sản Phẩm</option>
                                <option 
                                        v-for='i in listType' 
                                        :key="i._id" 
                                        :value='i._id'
                                        > {{ i.Name }} 
                                </option>
                        </select>
                </div>
            </div>
            <div class="row g-3 justify-content-center mb-3">
                <div class="col-3 text-start">
                    <strong>Giá Tiền</strong>
                </div>
                <div class="col-9">
                    <input v-model="Product.price" type="text" class="form-control " >
                </div>
            </div>
            <div class="row g-3 justify-content-center mb-3">
                <div class="col-3 text-start">
                    <strong>Số Lượng</strong>
                </div>
                <div class="col-9">
                    <input v-model="Product.quantity" type="text" class="form-control " >
                </div>
            </div>
            <div class="row g-3 justify-content-center mb-3">
                <div class="col-3 text-start">
                    <strong>Link Hình Ảnh</strong>
                </div>
                <div class="col-9">
                    <input v-model="Product.PrdImage" type="text" class="form-control " >
                </div>
            </div>
            <div class="row g-3 justify-content-center mb-3">
                <div class="col-12">
                    <div class="form-floating">
                        <textarea v-model="Product.description" class="form-control" placeholder="Nhập Mô Tả" id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Mô Tả</label>
                    </div>
                </div>
            </div>


            
        </div>
            <div class="card-footer">
                <div class="d-grid gap-3 d-md-flex justify-content-md-center">
                    <button class="btn btn-outline-success" 
                        type="button"
                        v-if="$props.id"
                        @click="update"
                        >
                        Xác Nhận
                    </button>

                    <button class="btn btn-outline-success" 
                        type="button"
                        @click="create"
                        v-else>
                        Thêm Mới
                    </button>

                    <button class="btn btn-outline-danger"
                        type="button"
                        @click.prevent = '$router.go(-1)' >
                            Quay Về
                    </button>
                </div>
            </div>
        </div>
</template>
    
<script setup >
    import AxiosAPI from '../services/api.service'
    import {ref} from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const props = defineProps(['id'])

    const Product = ref({
        "productName": undefined,
        "type": 0,
        "description": undefined,
        "price": undefined,
        "quantity": undefined,
        "PrdImage": undefined
    })

    async function getProduct(PID)
    {
        Product.value = await AxiosAPI.getProductByPID(PID)
    }
    if(props.id) getProduct(props.id)

    const listType = ref([])
    async function getAllType() 
    {
        listType.value = await AxiosAPI.getAllType()
    }
    getAllType()
    async function update()
    {
        if(!Product.value.productName) return alert("Không Thể Để Trống Tên Sản Phẩm")
        if(Product.value.type === 0) return alert("Không Thể Để Trống Loại Sản Phẩm")
        if(!Product.value.PrdImage) return alert("Không Thể Để Trống Đường Dẫn Hình Ảnh")
        if(!Product.value.description) return alert("Không Thể Để Trống Mô Tả")
        if(!(Number.isInteger(Product.value.quantity*1) && Product.value.quantity!=='' && Product.value.quantity*1 > 0))
        {
            Product.value.quantity = 1
            return alert("Số Lượng Sản Phẩm Phải Là Số Lớn Hơn 0")
        }
        if(!(Number.isInteger(Product.value.price*1) && Product.value.price!=='' && Product.value.price*1 > 0))
        {
            Product.value.price = 10000
            return alert("Giá Tiền Phải Là Số Lớn Hơn 0")
        }

        await AxiosAPI.updateProduct(props.id,Product.value)
        alert("Chỉnh Sửa Thành Công")
        router.go(-1)   
    }
    async function create() 
    {
        if(!Product.value.productName) return alert("Không Thể Để Trống Tên Sản Phẩm")
        if(Product.value.type === 0) return alert("Không Thể Để Trống Loại Sản Phẩm")
        if(!Product.value.PrdImage) return alert("Không Thể Để Trống Đường Dẫn Hình Ảnh")
        if(!Product.value.description) return alert("Không Thể Để Trống Mô Tả")
        if(!(Number.isInteger(Product.value.quantity*1) && Product.value.quantity!=='' && Product.value.quantity*1 > 0))
        {
            Product.value.quantity = 1
            return alert("Số Lượng Sản Phẩm Phải Là Số Lớn Hơn 0")
        }
        if(!(Number.isInteger(Product.value.price*1) && Product.value.price!=='' && Product.value.price*1 > 0))
        {
            Product.value.price = 10000
            return alert("Giá Tiền Phải Là Số Lớn Hơn 0")
        }

        await AxiosAPI.addProduct(Product.value)
        alert("Thêm Mới Thành Công")
        router.go(-1)
    }


    
</script>
    
<style scoped>
    .card{
        width: 50vw;
    }
</style>