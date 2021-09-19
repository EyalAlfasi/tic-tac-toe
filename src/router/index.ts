import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import GameView from '../views/GameView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Game',
    component: GameView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
