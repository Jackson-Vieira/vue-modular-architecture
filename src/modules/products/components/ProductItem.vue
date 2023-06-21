<template>
    <div @click="emit('on-add-to-cart', product)">
        {{ product }}
    </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
import type { IProduct } from '../types';

const props = defineProps<{
    product: IProduct
}>()

const { product } = toRefs(props)

const emit = defineEmits<{
    (e: "on-add-to-cart", product: IProduct): void
}>()

</script>

<style scoped>

</style>