import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import SideBar from "../components/SideBar.vue";
import Dashboard from "../views/Dashboard.vue";
import Inventory from "../views/Inventory.vue";
import CustomerAdd from "../views/CustomerAdd";
import CustomerOverview from "../views/CustomerOverview";
import CustomerUpdate from "../views/CustomerUpdate";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    redirect: {
      name: "login"
    }
  },
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
  }
];

const router = new VueRouter({
  routes
});

export default router;
