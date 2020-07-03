<template>
  <div id="side-bar">
            
                <ul>
                    <li class="menu-item">
                        <div class="menu-item-icon">
                            <img src="../assets/img/home.png" alt="">
                        </div>
                        <div class="menu-item-text"><a href="">Bàn làm việc </a></div>
                    </li>
                    <li class="menu-item">
                        <div class="menu-item-icon">
                            <img src="../assets/img/profile.png" alt="">
                        </div>
                        <div class="menu-item-text"><a href="">Hồ sơ nhân viên </a></div>
                        <div class="menu-icon-expand">
                            <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </div>     
                    </li>
                    <li class="menu-item">
                        <div class="menu-item-icon">
                            <img src="../assets/img/salary.png" alt="">
                        </div>
                        <div class="menu-item-text"><a href="">Lương - Thuế - Bảo hiểm </a></div>
                        <div class="menu-icon-expand">
                            <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </div> 
                    </li>
                    <li class="menu-item">
                        <div class="menu-item-icon">
                            <img src="../assets/img/recruitment.png" alt="">
                        </div>
                        <div class="menu-item-text"><a href="">Tuyển dụng - Tiếp nhận </a></div>
                        <div class="menu-icon-expand">
                            <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </div> 
                    </li>
                    <li class="menu-item">
                        <div class="menu-item-icon">
                            <img src="../assets/img/train.png" alt="">
                        </div>
                        <div class="menu-item-text"><a href="">Đánh giá - Đào tạo - Phúc lợi </a></div>
                        <div class="menu-icon-expand">
                            <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </div> 
                    </li>
                    <li class="menu-item">
                        <div class="menu-item-icon">
                            <img src="../assets/img/accomplishment.png" alt="">
                        </div>
                        <div class="menu-item-text"><a href="">Khen thưởng </a></div>
                        <div class="menu-icon-expand">
                            <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </div> 
                    </li>
                    <li class="menu-item">
                        <div class="menu-item-icon">
                            <img src="../assets/img/report.png" alt="">
                        </div>
                        <div class="menu-item-text"><a href="">Báo cáo </a></div>
                        <div class="menu-icon-expand">
                            <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </div> 
                    </li>
                    <li class="menu-item">
                        <div class="menu-item-icon">
                            <img src="../assets/img/task.png" alt="">
                        </div>
                        <div class="menu-item-text"><a href="">Hệ thống </a></div>
                        <div class="menu-icon-expand">
                            <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </div> 
                    </li>
                </ul>
            
            
        </div>
</template>

<script>
export default {

}
</script>

<style>
#side-bar{
    background-color: #025F97;
    width:20%;
    height: 100%;
    margin-top: 0px;;
    
    
}
#sidebar .row{
    width:100%;
}

#side-bar>ul{
    list-style-type: none;
    padding: 0px;
    width:100%;
    
    
     
}
#side-bar ul>li.menu-item{
    background-color: #0277BD;
    
    width:100%;
    padding-top: 8px ;
    
    padding-bottom: 8px;
    display: flex;
   
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid #08598e;
    border-top: 1px solid #1b8bd4;

    
}


.menu-item:hover{
    background-color: #1b8bd4 !important;
    cursor: pointer;
}
.menu-item a{
    text-decoration: none;
    font-size: 15px;
    font-weight: 200;
    padding-left: 10px;
    color:white;
}
.menu-item-icon{
    color: white;
    padding-left: 15px;
}
.menu-item .menu-item-text{
    flex-grow: 1;
    
}
.menu-item .menu-icon-expand{
    color: white;
    padding-right: 10px;
    
}

</style>