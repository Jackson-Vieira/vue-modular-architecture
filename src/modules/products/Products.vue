<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import ProductsList from './components/ProductsList.vue';
import ProductItem from './components/ProductItem.vue';
import ProductListControl from './components/ProductListControl.vue';

import { defineComponent } from 'vue';
import { useProductsStore } from './store';

export default defineComponent({

	components: {
		ProductsList,
		ProductItem,
		ProductListControl,
	},

    setup(){
        const productsStore = useProductsStore(); 
        return { productsStore }
    }
})

</script>

<template>
		<ProductListControl />
		<ProductsList>
			<ProductItem v-for="product in productsStore.products" :key="product.id" :product="product"/>
		</ProductsList>
</template>