import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import Routers from '@/router/route';
// import Auth from '@/service/Auth';

Vue.use(Vuex);
Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'onstate',
  routes: Routers,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return savedPosition ? savedPosition : new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 });
        }, 500);
      });
    }
  }
});

router.beforeEach((to, from, next) => {
  // You can register global guards using router.beforeEach
  console.log(to);
  document.title = to.meta.title;
  next();
  /*

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!Auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      // check permission etc... 
      next()
    }
  } else {
    next() // make sure to always call next()!
  }

  */
})

router.afterEach((to, from) => {
  alert ('After each route called');
})

export default router;
