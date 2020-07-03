<template>
  <div id="content">
            <div class="page-title">
                <h3>Danh mục nhân viên</h3>
            </div>
            <div class="page-body">
                <div class="toolbar">
                    <button  v-on:click="showAddEmployeeForm()"><img src="../assets/img/add.png" alt="">Thêm</button>
                    <button><img src="../assets/img/Edit16.png" alt="">Sửa</button>
                    <button v-on:click="deleteEmployee(rowSelected)"><img src="../assets/img/delete-24.png" alt="" >Xóa</button>
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
                                <td>{{employee.id}}</td>
                                <td>{{employee.name}}</td>
                                <td>{{employee.email}}</td>
                                <td>{{employee.phone}}</td>
                                <td>{{employee.address}}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="paging">
        
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return {
            listEmployee:[
                {
                    "id":"NV0001",
                    "name":"Nguyen Van A",
                    "email":"ljklj@gmail.com",
                    "phone":"098378464",
                    "address":"Cau Giay"
                },
                {
                    "id":"NV0002",
                    "name":"Nguyen Van A",
                    "email":"ljklj@gmail.com",
                    "phone":"098378464",
                    "address":"Cau Giay"
                },
                {
                    "id":"NV0003",
                    "name":"Nguyen Van A",
                    "email":"ljklj@gmail.com",
                    "phone":"098378464",
                    "address":"Cau Giay"
                },
                {
                    "id":"NV0004",
                    "name":"Nguyen Van A",
                    "email":"ljklj@gmail.com",
                    "phone":"098378464",
                    "address":"Cau Giay"
                },
                {
                    "id":"NV0005",
                    "name":"Nguyen Van A",
                    "email":"ljklj@gmail.com",
                    "phone":"098378464",
                    "address":"Cau Giay"
                },
                {
                    "id":"NV0006",
                    "name":"Nguyen Van A",
                    "email":"ljklj@gmail.com",
                    "phone":"098378464",
                    "address":"Cau Giay"
                }
              
            ],
            rowSelected:-1,
            bgColorActive:'#1b8bd4',
            bgColorDefault:'white',
        }
    },
    methods:{
        changeRowSelect(index){
            this.rowSelected = index;
              
            
        },

        deleteEmployee(index){
            if(index>=0)
                this.listEmployee.splice(index,1);
           //console.log("kjkjk");
         //  console.log(index);
        },

        showAddEmployeeForm(){
            
            this.$emit('show-add-employee-form');
        }
    }
}
</script>

<style>
.page-title{
    
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    
}

.page-body{
    border: 1px solid #ccc;
    position: absolute;
    top:50px;
    left:10px;
    right: 10px;
    bottom: 10px;
}
.page-body .toolbar{
    
    height: 25px;
    width: 100%;
    display:flex;
    align-items: center;
    background-color: rgb(239, 239,239);
}

.page-body .grid{
 
    height: calc(100% - 50px);
    width: 100%;
}

.page-body .paging{
    
    height: 25px;
    width: 100%;
}


.toolbar button{
    height: 100%;
    display:flex;
    align-items: center;
    border: none;
    cursor: pointer;
    border-radius: unset;
    padding-left: 5px;
    padding-right: 2px;
    
}
.toolbar button:hover{
    background-color: #1b8bd4;
    color: white;
    
}

/*Table*/
.grid table{
    width:100%;
    border-collapse: collapse;
}
table td,th{
    padding: 4px;
}
table thead{
    background-color: rgb(239, 239,239);;
}
table tbody tr:hover{
    background-color: #b8e3ff;
    cursor: pointer;
}
</style>