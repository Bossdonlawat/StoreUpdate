<template>
    <div class="wrapper">
        <div class="sidebar">
            <h6>China InwZa<br>chinapanda@contact.com</h6>
            <ul>
                <li><b-icon-house-door-fill class="menu-icon"/><router-link to="/">HOME</router-link></li>
                <li><b-icon-square-fill class="menu-icon"/><router-link to="/product">PRODUCT</router-link></li>
                <li><b-icon-square-fill class="menu-icon"/><router-link to="/inventory">INVENTORY</router-link></li>
                <li><b-icon-person-fill class="menu-icon"/><router-link to="/customer">CUSTOMER</router-link></li>
                <li><b-icon-square-fill class="menu-icon"/><router-link to="/">ORDER</router-link></li>
            </ul> 
        </div>
    </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: sans-serif;
}

body{
   background-color: #ffffff;
}

.menu-icon{
  margin-right: 10px;
}

.wrapper{
  display: flex;
}

.wrapper .sidebar{
  width: 380px;
  height: 100%;
  background: #000;
  position: fixed;
}

.wrapper .sidebar h6{
  color: #fff;
  text-align: left;
  margin-left: 50px;
  margin-top: 100px;
  margin-bottom: 100px;
}

.wrapper .sidebar ul li{
  padding: 30px;
}    

.wrapper .sidebar ul li a{
  color: #ffffff;
}

.wrapper .sidebar ul li a .fas{
  width: 25px;
}

.wrapper .sidebar ul li:hover{
  background-color: #fff;
}
    
.wrapper .sidebar ul li:hover a{
  color: #000;
}

.menu-icon {
  color:  white;
}

.wrapper .sidebar ul li:hover .menu-icon{
  color: #000;
}

</style>