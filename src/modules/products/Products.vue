<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import ProductsList from './components/ProductsList.vue';
import ProductItem from './components/ProductItem.vue';
import ProductListControl from './components/ProductListControl.vue';

import { defineComponent } from 'vue';
import { useProductsStore } from './store';
import { useCartStore } from '../cart/store';
import type { IProduct } from './types';

export default defineComponent({

	components: {
		ProductsList,
		ProductItem,
		ProductListControl,
	},

    setup(){
        const productsStore = useProductsStore(); 
		const cartStore = useCartStore();

		function addToCart(product: IProduct){
			productsStore.updateQuantityById(product.id, -1)
			cartStore.addProduct(product)
		}
		
        return { productsStore, addToCart }
    }
})

</script>

<template>
		<ProductListControl />
		<ProductsList>
			<ProductItem v-for="product in productsStore.products" :key="product.id" :product="product" @on-add-to-cart="addToCart"/>
		</ProductsList>
</template>