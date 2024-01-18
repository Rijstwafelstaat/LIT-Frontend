<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";


</script>

<template class="scroll-smooth">
  <NavBar />
  <router-view />
</template>

<style>
@font-face {
  font-family: RijksoverheidSansHeading;
  src: url('~@/assets/fonts/rijksoverheidsansheading-bold.ttf');
}
@font-face {
  font-family: RijksoverheidSansText;
  src: url('~@/assets/fonts/rijksoverheidsanstext-regular.ttf');
}
</style>
