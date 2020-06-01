import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import SideBar from "../components/SideBar.vue";
import Dashboard from "../views/Dashboard.vue";
import Inventory from "../views/Inventory.vue";
import CustomerAdd from "../views/CustomerAdd.vue";
import CustomerOverview from "../views/CustomerOverview.vue";
import CustomerUpdate from "../views/CustomerUpdate.vue";
import Product from "../views/Product";
import ProductAdd from "../views/ProductAdd";
import ProductUpdate from "../views/ProductUpdate";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/testsidebar",
    name: "SideBar",
    component: SideBar
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: Inventory
  },
  {
    path: "/customeradd",
    name: "CustomerAdd",
    component: CustomerAdd
  },
  {
    path: "/customer",
    name: "CustomerOverview",
    component: CustomerOverview
  },
  {
    path: "/customerupdate",
    name: "CustomerUpdate",
    component: CustomerUpdate
  },
  {
    path: "/product",
    name: "Product",
    component: Product
  },
  {
    path: "/prodcutadd",
    name: "ProductAdd",
    component: ProductAdd
  },
  {
    path: "/prodcutupdate",
    name: "ProductUpdate",
    component: ProductUpdate
  }
];

const router = new VueRouter({
  routes
});

export default router;
