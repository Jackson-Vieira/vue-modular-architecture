<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { defineComponent, onBeforeMount, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// import { storeToRefs } from 'pinia';
import { useProductsStore } from './store';
import type { IProduct } from './types';

export default defineComponent({

    setup(){
        const productsStore = useProductsStore(); 
        const route = useRoute()
        const router = useRouter()
        const id = route.params.id

        const state = reactive({
            product: {} as IProduct
        })

        onBeforeMount(() => {
            const index = productsStore.findIndexById(id as string)
            if(index === -1){
                router.push("/")
                return
            }
            state.product = productsStore.products[index]
        })
        return { state }
    }
})

</script>

<template>
	<div>
		{{ state.product }}
	</div>
</template>