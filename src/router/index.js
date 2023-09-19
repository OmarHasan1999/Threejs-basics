import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },/*
    {
      path: '/services',
      name: 'Services',
      component: () => import('../views/ServicesView.vue')
    },*/
    /*
    {
      path: "/projects",
      name: "Projects",
      component: () =>
        import("../views/ProjectsView.vue"),
    },
    {
      
        path: "/contact",
        name: "Contact",
        component: () =>
          import("../views/ContactView.vue"),
      
    }*/
  ]
});
/*
 router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  
  document.title = `${to.name}-MARK`;

  next()
})*/

export default router
