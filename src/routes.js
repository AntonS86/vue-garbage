import VueRouter from "vue-router";
import Home from "./pages/Home";
import CarFull from "./pages/CarFull";
import ErrorCmp from "./pages/Error";
import ServerTest from "./pages/ServerTest";
import VuexTest from "./pages/VuexTest";

const Cars = (resolve) => {
  require.ensure(['./pages/Cars.vue'], () => {
    resolve(
      require('./pages/Cars.vue')
    )

  })
}

const Car = (resolve) => {
  require.ensure(['./pages/Car.vue'], () => {
    resolve(
      require('./pages/Car.vue')
    )
  })
}

export default new VueRouter({
  routes: [
    {
      path     : '',
      component: Home,
    },
    {
      path     : '/cars',
      component: Cars,
      name     : 'cars'
    },
    {
      path     : '/servertest',
      component: ServerTest,
      name     : 'servertest'
    },
    {
      path     : '/vuextest',
      component: VuexTest,
      name     : 'vuex'
    },
    {
      path     : '/car/:id',
      component: Car,
      children : [
        {
          path     : 'full',
          component: CarFull,
          name     : 'carFull',
          beforeEnter(to, from, next) {
            next()
          }
        }
      ]
    },
    {
      path    : '/none',
      //redirect: '/cars'
      redirect: {
        name: 'cars'
      }
    },
    {
      path     : '*',
      component: ErrorCmp
    }
  ],
  mode  : 'history',
  scrollBehavior(to, from, savePosition) {

    if (savePosition) {
      return savePosition;
    }

    if (to.hash) {
      return {selector: to.hash}
    }

    return {
      x: 0,
      y: 700
    }
  }
})
