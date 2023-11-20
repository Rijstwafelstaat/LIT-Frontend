<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-400 mb-3">
    <div class="container px-2 mx-2 flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto px-2 lg:static lg:block lg:justify-start ">
        <div class="hidden lg:flex ">
          <router-link to="/" class="btn-navbar" active-class="bg-opacity-30 bg-gray-500">LIT</router-link>
          <router-link to="/about" class="btn-navbar" active-class="bg-opacity-30 bg-gray-500">About</router-link>
        </div>
        <button class="btn-navbar lg:hidden" type="button"
                       v-on:click="toggleNavbar()">
          <span class="uppercase">Kaas</span>   <!-- TODO: Enter hamburgermenu icon -->
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75"/><span class="ml-2">Share</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      showMenu: false,
      home: false
    }
  },
  methods: {
    toggleNavbar: function (){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style scoped>

</style>