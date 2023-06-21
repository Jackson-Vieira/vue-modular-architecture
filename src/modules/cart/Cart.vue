<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { useCartStore } from './store';

const cartStore = useCartStore()

</script>
<template>
    {{ cartStore.cart.length > 0 ? cartStore.cart : "No Items in cart :(" }}
</template>