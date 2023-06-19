<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './modules/core/components/AppHeader.vue';

export default defineComponent({
  name: "App",
  components: {
   AppHeader 
  }
})
</script>

<template>
  <AppHeader />
  <RouterView />
</template>
