import { createRouter, createWebHistory } from 'vue-router'
import ProductsRoutes from "./modules/products/routes"
import CartRoutes from "./modules/cart/routes"
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...ProductsRoutes,
    ...CartRoutes
  ]
})

export default router