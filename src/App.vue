<script lang="ts">
import AppHeader from './modules/core/components/AppHeader.vue';

export default {
  name: "App",
  components: {
   AppHeader 
  }
}

</script>

<template>
  <AppHeader />
  <div class="text-green-696 text-xl">Hello, from TailwindCSS!</div>
  <RouterView />
</template>
