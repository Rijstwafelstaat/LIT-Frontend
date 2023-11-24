<template>
  <div class="flex w-auto justify-center pb-4">
    <router-link to="/" ><img src="/src/assets/Rijkswaterstaat-logo.png" class="h-24 pl-44 justify-center"></router-link>
  </div>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-400 mb-3 w-full overflow-visible">
    <div class="container px-2 mx-2 flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto px-2 lg:static lg:block lg:justify-start ">
        <div class="hidden lg:flex ">
          <router-link to="/" v-on:click="showMenu = false" class="btn-navbar" active-class="bg-opacity-30 bg-gray-500">Overzicht</router-link>
          <router-link to="/about" v-on:click="showMenu = false" class="btn-navbar" active-class="bg-opacity-30 bg-gray-500">Extra Functie?</router-link>
        </div>
        <button class=" lg:hidden" type="button"
                       v-on:click="toggleNavbar()">
          <img src="src/assets/burger-bar.png" class="w-12">
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:hidden items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <router-link v-on:click="showMenu = false" to="/" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75"/><span class="ml-2">LIT</span>
            </router-link>
            <router-link v-on:click="showMenu = false" to="/about" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75"/><span class="ml-2">Extra Functie?</span>
            </router-link>
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