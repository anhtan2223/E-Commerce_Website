<template >
    <Nav></Nav>
    <div class="body">
        <router-view></router-view>
    </div>
</template>
  
<script setup >
import Nav from './components/Navigation.vue'
</script>
  
<style>
Nav {
    display: inline-flexbox;
    position: top;
    height: 8vh;
}
.body {
    margin-top: 8vh ;
    background: linear-gradient(to right , #c72092 , #6c14d0);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>