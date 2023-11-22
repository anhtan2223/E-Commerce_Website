<template>
        <ChangePass :info="info"></ChangePass>
</template>
    
<script setup lang='ts'>
    import {ref} from 'vue'
    import ChangePass from '../../components/ChangePassword.vue'
    const info = ref(JSON.parse(localStorage.info))
</script>
    
<style>
    
</style>