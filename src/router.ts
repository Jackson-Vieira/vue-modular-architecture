import { createRouter, createWebHistory } from 'vue-router'
import ProductsRoutes from "./modules/products/routes"
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...ProductsRoutes
  ]
})

export default router