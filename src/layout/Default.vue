<template>
<div>
  <Header></Header>
  <div class="wrapper">
    <side-bar></side-bar>
    <employee></employee>
  </div>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import SideBar from '../components/SideBar.vue'
import Employee from '../pages/Employee.vue'
import Footer from '../components/Footer.vue'
export default {
  components:{
    Header,
    SideBar,
    Employee,
    Footer,
  }
}
</script>

<style>
.wrapper{
    background-color: blue;
    width: 100%;
    height: 900px;
    display:flex;
    flex-direction: row;
}
#content{
    background-color: white;
    height: 100%;
    width: 85%;
    position: relative;
}


</style>