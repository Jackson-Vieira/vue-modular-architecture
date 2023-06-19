import { defineStore } from "pinia"
import { type IProduct } from "./types"

export interface ProductStateStore {
    products: IProduct[]
}

export const useProductsStore = defineStore('products', {
    state: (): ProductStateStore => ({
        products: [
            {
                id: "1",
                name: "Product 1",
                quantity: 5,
                description: "This is product 1",
                price: 10,
                category: "Category 1"
            },
            {
                id: "2",
                name: "Product 2",
                quantity: 3,
                description: "This is product 2",
                price: 20,
                category: "Category 2"
            },
            {
                id: "3",
                name: "Product 3",
                quantity: 8,
                description: "This is product 3",
                price: 15,
                category: "Category 1"
            },
            {
                id: "4",
                name: "Product 4",
                quantity: 2,
                description: "This is product 4",
                price: 25,
                category: "Category 2"
            },
            {
                id: "5",
                name: "Product 5",
                quantity: 10,
                description: "This is product 5",
                price: 30,
                category: "Category 1"
            },
            {
                id: "6",
                name: "Product 6",
                quantity: 10,
                description: "This is product 6",
                price: 30,
                category: "Category 3"
            },
        ]
    }),

    getters: {
        filterByCategory: (state: ProductStateStore) => {
            return (category: string) => state.products.filter((product) => product.category = category)
        },
        sortByQuantity: (state: ProductStateStore) => state.products.sort((a, b) => a.quantity - b.quantity)
    },

    actions: {
        updateQuantityById(id: string, quantity: number){
            if (!id && !quantity) return false

            const index = this.findIndexById(id)
            if (index !== -1) {
                this.products[index].quantity += quantity
                return true
            }

            return false
        },
        
        findIndexById(id: string){
            return this.products.findIndex((product) => product.id === id)
        }
    }
})