import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/Dashboard.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import { store } from "../store";


import PostShow from "../views/PostShow.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/Dashboard.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/post/:id",
      name: "post",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PostShow.vue"),
    },

    {
      path: "/login",
      name: "login",
      component: Login,
       
    },

    //register
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});



router.beforeEach((to, from, next) => {
  const protectedRoute = to.matched.some(record => record.meta.requiresAuth)
  //if (protectedRoute && !localStorage.getItem("auth")) {

  if (protectedRoute && !store.state.user.token) {
      next('/login');
  }
  else if(store.state.user.token && (to.name === 'login' || to.name === 'register'))
  {
    next('/dashboard');

  }else{
    next();
  }

})
export default router;
