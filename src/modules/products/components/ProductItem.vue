<template>
    <div>
        {{ props.product }}
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { IProduct } from '../types';

export default defineComponent({
    props: {
        product: {
            type: Object as PropType<IProduct>,
            required: true
        }
    },
    setup(props) {
        return { props }
    },
})
</script>

<style scoped>

</style>