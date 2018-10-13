import Vue from 'vue'
import Router from 'vue-router'
import BVR from '@/components/BVR'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BVR',
      component: BVR
    }
  ]
})
