<template>
  <form action class="add-emplyoee-form" v-on:submit.prevent="addEmployee()">
    <div class="add-employee-content">
      <label for="employee-name">
        <b>Tên:</b>
      </label>
      <input type="text" placeholder="Nhập tên" name="employee-name" v-model="employee.employeeName" required />
      <label for="employee-email">
        <b>Email:</b>
      </label>
      <input type="employee-email" placeholder="Nhập email" name="employee-email" v-model="employee.employeeEmail" required />
      <label for="employee-phone">
        <b>SĐT:</b>
      </label>
      <input type="text" placeholder="Nhập số điện thoại" name="employee-phone" v-model="employee.employeePhone" required />
      <label for="employee-address">
        <b>Địa chỉ:</b>
      </label>
      <input type="text" placeholder="Nhập địa chỉ" name="employee-address" v-model="employee.employeeAddress" required />
      <div class="from-button">
        <button type="submit">Thêm mới</button>
        <button type="button" v-on:click="cancel()">Quay lại</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      employee: {
        id: "",
        name: "",
        email: "",
        phone: "",
        address: ""
      }
    };
  },
  methods: {
    cancel() {
      this.$emit("cancelEvent");
    },
    addEmployee() {
      
      this.employee.employeeId='';
      this.$emit("addEmployeeEvent", this.employee);
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