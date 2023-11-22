<template class="Test">
    <div class="fixed">

        <nav class="navbar navbar-expand-lg navbar-white bg-white">
            <div class="container-fluid" id='nav-before-login'>
                <span class="navbar-brand" href="#">
                    <!-- <img src="../img/Logo.png" alt="" width="" height="100" class="d-inline-block align-text-top" > -->
                    AT SHOP
                </span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item">
                    <router-link to="/">
                        <a class="nav-link " href="#">
                            Sản Phẩm
                            <i class="fas fa-box"></i>
                        </a>
                    </router-link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <router-link to="/cart">
                            Giỏ Hàng
                            <i class="fas fa-shopping-cart"></i>
                        </router-link>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <router-link to="/login">
                            Tài Khoản  
                            <i class="fa-solid fa-user"></i>
                        </router-link>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang='ts'>
    import {computed, ref} from 'vue'
    const ROLE = computed(()=>{
        return localStorage.isLogin === 'user'
    })
</script>

<style>
.navbar-nav > li
{
    padding-right: 30px;
}
.navbar {
    box-shadow: 0 0 30px rgb(82, 39, 82);
    background-color: #333;
}

.fixed{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 200;
}


.navbar-nav a{
    color: rgb(221, 40, 40);
}


.navbar-nav a:hover {
    color: rgb(16, 7, 7);
}
</style>