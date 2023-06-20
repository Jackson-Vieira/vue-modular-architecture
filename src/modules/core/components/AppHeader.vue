<script lang="ts">
export default {
  name: "NavBar",
  setup(){

  }
};
</script>

<template>
    <header class="p-6 bg-white shadow-md">
      <nav>
        <ul class="flex justify-center text-lg">
          <li class="hover:text-blue-500 cursor-pointer px-4">
            <router-link to="/">Home</router-link>
          </li>
          <li class="hover:text-blue-500 cursor-pointer px-4">
            <router-link to="/products">Products</router-link>
          </li>
          <li class="hover:text-blue-500 cursor-pointer px-4">
            <router-link to="/cart">Cart</router-link>
          </li>
        </ul>
      </nav>
    </header>
</template>