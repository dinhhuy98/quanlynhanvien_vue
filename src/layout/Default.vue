<template>
<div>
  <Header></Header>
  <div class="wrapper">
    <side-bar></side-bar>
    <employee @show-add-employee-form="showAddEmployeeForm"></employee>
  </div>
  <Footer></Footer>
  <div class="modal" v-bind:style="{display: modalDisplay}">
    <div class="model-header"></div>
      <div class="modal-content">
            <span class="close" v-on:click="changeModalDisplay('none')">&times;</span>
            
        </div>
  </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import SideBar from '../components/SideBar.vue'
import Employee from '../pages/Employee.vue'
import Footer from '../components/Footer.vue'
import AddEmployeeForm from '../components/AddEmployeeForm'
export default {
  data(){
    return {
      modalDisplay:'none',
    }
  },
  components:{
    Header,
    SideBar,
    Employee,
    Footer,
  },
  methods:{
    changeModalDisplay(value){
      this.modalDisplay=value;
    },
    showAddEmployeeForm(){
      this.changeModalDisplay('block');
    }
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

.modal{
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top:0;
    width:100%;
    height:100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}

.modal-content{
    background-color: #fefefe;
    margin:100px auto;
    padding:20px;
    border: 1px solid #888;
    width: 50%;

}
.close{
    color:#aaaaaa;
    float: right;
    font-size:28px;
    font-weight: bold;
}
.close:hover{
    color:#000;
    text-decoration: none;
    cursor:pointer;
}


</style>