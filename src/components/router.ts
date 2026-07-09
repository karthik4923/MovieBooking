import { createRouter, createWebHistory } from 'vue-router'
import mainpage from './Project/MainPage.vue'
import home from './Project/Home.vue'
import live from './Project/Live.vue'
import profile from './Project/profile.vue'
import movie from './Project/Movie.vue'
import book from './Project/Book.vue'
import bookmain from './Project/Bookmain.vue'
import login from './Project/Login.vue'
import theater from './Project/theater.vue'
import payment from './Project/payment.vue'
import buy from './Project/buy.vue'
import show from './Project/showbooker.vue'
const routes = [
  { path:'/',name:'login',component: login },
  {
    path: '/main', name: 'mainpage', component: mainpage,
    children: [
      { path: '', redirect: '/main/home' },
      { path: 'home', name: 'homes', component: home },
      { path: 'live', name: 'lives', component: live },
      { path: 'movie', name: 'movies', component: movie },
      { path: 'profile', name: 'profiles', component: profile },
    ]
  },
  { path: '/bookmain', name: 'bookmain', component: bookmain },
  { path:'/theater',name:'theaters',component:theater},
  { path: '/book', name: 'book', component: book },
  { path: '/payment', name: 'payment', component: payment },
  { path: '/buy', name: 'buy', component: buy },
  { path:'/show',name:'show',component:show},
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
