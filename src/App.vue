<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";


</script>

<template>
  <div class="relative">
    <NavBar/>
    <div class="absolute">
      <router-view />
    </div>
  </div>
</template>

<style>
</style>
