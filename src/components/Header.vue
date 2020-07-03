<template>
  <div class="header">
        <div class="iconbar">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div id="logo">
            <a href="">
                <img src="../assets/img/logo-MISA@2x.png" alt="Logo-misa">
            </a>
        </div>
        <div class="topmenu">
            <form class="search">
                <button type="submit"><i class="fa fa-search"></i> </button><!---->
                <input type="text" name="search" placeholder="Tìm kiếm nhanh...">
                
            </form>
            <div class="menu-user">
                <div class="notify">
                    <i class="fa fa-bell-o" aria-hidden="true"></i>
                </div>
                <div class="user-avatar">
                    <img src="../assets/img/ImageHandler.png" alt="">
                </div>
                <div class="user-name">Nguyễn Văn A</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.header{
    background-color: #0277BD;
    width: 100%;
    height: 60px;
    display: flex;
    margin-bottom: 0px;
    
}
#logo{
    width:20%;
    height:50px;
    padding: 5px 10px;
  
    
}
.iconbar{
    
    height: 100%;
    width: 60px;
    padding-left: 10px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-size: 20px;
}

#logo img{
    height:90%;
    width:auto;
    
}

.topmenu{
    width:80%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 30px;
    
}

.search{
    display: flex;
}
.search input{
    background-color: #0C68B4;
    padding: 10px;
    font-size: 17px;
    border: 1px solid #0277BD;
    color: white;
   
}

.search input::placeholder{
    color: white;
    opacity: 1;
}
.search button{
    background-color: #0C68B4;
    padding: 10px;
    font-size: 17px;
    border: 1px solid #0277BD;
    color: white;
    
   
}
.search button::focus{
    border: 2px;
}

.topmenu .menu-user{
    display: flex;
    align-items: center;
}
.topmenu .menu-user .user-name{
    color: white;
    padding: 0px 10px;
}
.menu-user .notify{
    padding-right: 10px;
}
.menu-user .notify i{
    font-size: 20px;
    color:white;
    
}

</style>