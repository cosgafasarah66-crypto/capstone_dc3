import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RequirementsView from '../views/RequirementsView.vue'
import GuideView from '../views/GuideView.vue'
import BoardView from '../views/BoardView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/requirements', name: 'requirements', component: RequirementsView },
    { path: '/guide', name: 'guide', component: GuideView },
    { path: '/board', name: 'board', component: BoardView },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior: () => ({ top: 0 })
})