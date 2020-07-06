<template>
  <default-layout
    v-bind:displayModal="displayModal"
    v-bind:modalTitle="modalTitle"
    v-on:closeModalEvent="closeModal"
    v-on:addEmployeeEvent="addEmployee"
  >
    <template slot="content">
      <div id="content">
        <div class="page-title">
          <h3>Danh mục nhân viên</h3>
        </div>
        <div class="page-body">
          <div class="toolbar">
            <button v-on:click="showAddEmployeeForm()">
              <img src="../assets/img/add.png" alt />Thêm
            </button>
            <button v-on:click="showEditEmployeeForm()">
              <img src="../assets/img/Edit16.png" alt />Sửa
            </button>
            <button v-on:click="deleteEmployee(rowSelected)">
              <img src="../assets/img/delete-24.png" alt />Xóa
            </button>
          </div>
          <div class="grid">
            <table border="1" cellpadding="0">
              <thead>
                <tr>
                  <th>Mã nhân viên</th>
                  <th>Tên nhân viên</th>
                  <th>Email</th>
                  <th>SĐT</th>
                  <th>Địa chỉ</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(employee,index) in listEmployee"
                  v-bind:key="index"
                  v-on:click="changeRowSelect(index)"
                  v-bind:style="{backgroundColor:index==rowSelected? bgColorActive:bgColorDefault}"
                >
                  <td>{{employee.employeeId}}</td>
                  <td>{{employee.employeeName}}</td>
                  <td>{{employee.employeeEmail}}</td>
                  <td>{{employee.employeePhone}}</td>
                  <td>{{employee.employeeAddress}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="paging"></div>
        </div>
      </div>
    </template>
    <template slot="modal">
      <add-employee-form
        v-if="action==1"
        v-on:cancelEvent="closeModal"
        v-on:addEmployeeEvent="addEmployee"
      ></add-employee-form>
      <edit-employee-form
        v-if="action==2"
        v-bind:employee="employeeSelected"
        v-on:cancelEvent="closeModal"
        v-on:editEmployeeEvent="editEmployee"
      ></edit-employee-form>
    </template>
  </default-layout>
</template>

<script>
import DefaultLayout from "../layout/DefaultLayout.vue";
import AddEmployeeForm from "../components/AddEmployeeForm";
import EditEmployeeForm from "../components/EditEmployeeForm";
import axios from "axios";
export default {
  name: "employee",
  components: {
    "default-layout": DefaultLayout,
    AddEmployeeForm,
    EditEmployeeForm
  },
  data() {
    return {
      listEmployee:[],
      rowSelected: -1,
      bgColorActive: "#1b8bd4",
      bgColorDefault: "white",
      displayModal: "none",
      modalTitle: " ",
      employeeSelected: null,
      action: 1
    };
  },
  methods: {
    changeRowSelect(index) {
      this.rowSelected = index;
      this.employeeSelected = Object.assign(
        {},
        this.listEmployee[this.rowSelected]
      );
    },

    deleteEmployee(index) {
      let response = confirm("Bạn chắc chắn muốn xóa?");
      if (response && index >= 0) this.listEmployee.splice(index, 1);

      //console.log("kjkjk");
      //  console.log(index);
    },

    showAddEmployeeForm() {
      //this.$emit("show-add-employee-form");
      this.action = 1;
      this.displayModal = "block";
      this.modalTitle = "Thêm mới nhân viên";
    },
    closeModal() {
      this.displayModal = "none";
    },

    addEmployee(employee) {
      //this.listEmployee.unshift(employee);
      this.displayModal = "none";
      console.log(employee);
      try{
        axios({
          method:'post',
          url:'https://localhost:44321/api/v1/employees',
          data:{
            employeeId : employee.employeeId,
            employeeEmail : employee.employeeEmail,
            employeeName : employee.employeeName,
            employeePhone : employee.employeePhone,
            employeeAddress : employee.employeeAddress
          }
        })
        .then(response=>{
          alert("Thêm mới thành công!");
        })
        .catch(e=>{

        });
      }
      catch(error){

      }

    },

    showEditEmployeeForm() {
      this.action = 2;
      if (this.rowSelected >= 0) {
        this.displayModal = "block";
        this.modalTitle = "Chỉnh sửa thông tin nhân viên";
      } else alert("Vui lòng chọn nhân viên cần  sửa");
    },
    editEmployee(employee) {
      this.listEmployee[this.rowSelected] = employee;
      this.displayModal = "none";
    }
  },

  created() {
   
    axios
      .get('https://localhost:44321/api/v1/employees')
      .then(response => {
        this.listEmployee = response.data;
      })
      .catch(e => {
        console.log(e);
      });
  },

  beforeUpdate(){
    axios
      .get('https://localhost:44321/api/v1/employees')
      .then(response => {
        this.listEmployee = response.data;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style>
.page-title {
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.page-body {
  border: 1px solid #ccc;
  position: absolute;
  top: 50px;
  left: 10px;
  right: 10px;
  bottom: 10px;
}
.page-body .toolbar {
  height: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgb(239, 239, 239);
}

.page-body .grid {
  height: calc(100% - 50px);
  width: 100%;
}

.page-body .paging {
  height: 25px;
  width: 100%;
}

.toolbar button {
  height: 100%;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: unset;
  padding-left: 5px;
  padding-right: 2px;
}
.toolbar button:hover {
  background-color: #1b8bd4;
  color: white;
}

.toolbar button:focus {
  outline: none;
}

/*Table*/
.grid table {
  width: 100%;
  border-collapse: collapse;
}
table td,
th {
  padding: 4px;
}
table thead {
  background-color: rgb(239, 239, 239);
}
table tbody tr:hover {
  background-color: #b8e3ff;
  cursor: pointer;
}
</style>