<template>
  <form action class="add-emplyoee-form" v-on:submit.prevent="editEmployee()">
    <div class="add-employee-content">
      <label for="employee-name">
        <b>Tên:</b>
      </label>
      <input type="text" placeholder="Nhập tên" name="employee-name"
       v-model="employee.name" required />
      <label for="employee-email">
        <b>Email:</b>
      </label>
      <input type="employee-email" placeholder="Nhập email" name="employee-email"
      v-model="employee.email"
       />
      <label for="employee-phone">
        <b>SĐT:</b>
      </label>
      <input type="text" placeholder="Nhập số điện thoại" name="employee-phone"
      v-model="employee.phone"
      />
      <label for="employee-address">
        <b>Địa chỉ:</b>
      </label>
      <input type="text" placeholder="Nhập địa chỉ" name="employee-address"
      v-model="employee.address"
      />
      <div class="from-button">
        <button type="submit" >Cập nhật </button>
        <button type="button" v-on:click="cancel()">Quay lại</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
       
    };
  },
  props:{
      employee:{
          type:Object,
          default:null
      }
  },
  methods: {
    cancel() {
      this.$emit("cancelEvent");
    },
    editEmployee() {
    //  this.employee.name= this.employeeAfterEdit.name;
    //  this.employee.email= this.employeeAfterEdit.email;
    //  this.employee.phone= this.employeeAfterEdit.phone;
    //  this.employee.address= this.employeeAfterEdit.email;
   
    this.$emit("editEmployeeEvent",this.employee);    
    }
  }
};
</script>

<style>
.add-employee-content {
  display: flex;
  flex-direction: column;
  padding: 0px 40px;
}

.add-employee-content input {
  padding: 10px 10px;
  margin: 0px 10px 20px 10px;
  border: none;
  border-bottom: 2px solid #0277bd;
}
.add-employee-content input:focus {
  outline: none;
}
.from-button {
  padding: 20px;
  display: flex;
  justify-content: center;
}
.from-button button:first-child {
  margin-right: 10px;
}
.from-button button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: #0277bd;
  color: white;
  font-weight: bold;
}
.from-button button:hover {
  background-color: #0c68b4;
}
.from-button button:focus {
  outline: none;
}
</style>