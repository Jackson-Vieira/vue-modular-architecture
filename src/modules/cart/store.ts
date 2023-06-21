import { defineStore } from "pinia";
import type { ICartProduct } from "./types";
import type { IProduct } from "../products/types";

const productToCartProduct = (product: IProduct) => {
    const cartProductBase = { quantity: 0 }
    return { ...product, cartProductBase }
}

export const useCartStore = defineStore("cart", {
    state: () => ({
        cart: [] as ICartProduct[]
    }),

    actions: {
        addProduct(product: IProduct){
            const cartProduct = productToCartProduct(product)
            const alreadyInCart = this.updateProductQuantity(cartProduct.id, -1)
            if(alreadyInCart) return true
            this.cart.push(cartProduct)
        },

        updateProductQuantity(productId: string, quantity: number){
            const index = this.findIndexById(productId)
            if (index === -1 || quantity === 0) return false
            const product = this.cart[index]
            product.quantity += quantity
            return true
        },

        findIndexById(id: string){
            return this.cart.findIndex((product) => product.id === id)
        }
    }

})