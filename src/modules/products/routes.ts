import Products from "./Products.vue"
import ProductDetail from "./ProductDetail.vue"

export default [
    {
        path: "/products",
        name: "products-list",
        component: Products,
    }, 
    {
        path: "/products/:id",
        name: "product-detail",
        component:  ProductDetail 
    }
]