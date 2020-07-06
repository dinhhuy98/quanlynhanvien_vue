<template>
<default-layout>
  <h1>{{modalDisplay}}</h1>
</default-layout>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout.vue'
export default {
    components:{
        DefaultLayout
    },
    data(){
        return{
            check:1,
        }
    }

}
</script>

<style>

</style>