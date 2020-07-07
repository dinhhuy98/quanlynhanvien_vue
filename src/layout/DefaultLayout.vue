<template>
  <div>
    <Header></Header>
    <div class="wrapper">
      <side-bar></side-bar>
     <!-- <employee @show-add-employee-form="showAddEmployeeForm"></employee> -->
     <slot name="content"></slot>
    </div>
    <Footer></Footer>
    <div class="modal" v-bind:style="{display: displayModal}">
      <div class="modal-content">
        <div class="modal-content-header">
          <div>
            <span class="close" v-on:click="closeModal()">&times;</span>
          </div>
          <div class="modal-title">{{modalTitle}}</div>
        </div>
        <div class="modal-content-body">
          <!-- <add-employee-form
            v-if="employee==null"
            v-on:cancelEvent="closeModal"
            v-on:addEmployeeEvent="addEmployee"
          ></add-employee-form>
          <edit-employee-form
            v-if="employee!=null"
            v-bind:employeeSelected="employee"
            v-on:cancelEvent="closeModal"
            v-on:editEmployeeEvent="editEmployee"
            
          ></edit-employee-form> -->
          <slot name="modal"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import SideBar from "../components/SideBar.vue";
import Footer from "../components/Footer.vue";
import AddEmployeeForm from "../components/AddEmployeeForm";
import EditEmployeeForm from "../components/EditEmployeeForm";
export default {
  data() {
    return {
     
    };
  },
  props:{
    displayModal:{
      type: String,
      default:'none'
    },
    modalTitle:{
      type: String,
      default:''
    },
  
  },
  components: {
    Header,
    SideBar,
    Footer,
    AddEmployeeForm,
    EditEmployeeForm
  },
  methods: {
    changeModalDisplay(value) {
      this.displayModal = value;
    },
    closeModal(){
      this.$emit('closeModalEvent');
    },
 
  }
};
</script>

<style>
.wrapper {
  background-color: blue;
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: row;
}


.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}


.modal-content {
  background-color: #fefefe;

  margin: 100px auto;
  padding: 10px 20px;
  border: 1px solid #888;
  width: 50%;
  height: auto;

  display: flex;
  flex-direction: column;
}
.modal-content-header{
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.close {
  color: #aaaaaa;

  float: right;

  font-size: 28px;
  font-weight: bold;
}
.close:hover {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-title{
  color: #0277bd;
  font-size: 25px;
}


</style>