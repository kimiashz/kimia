<template>
  <div id="app">
    <login v-if="!$store.state.loginState"/>
    <template v-else >
      <nav-bar/>
      <section><router-view/></section>
    </template>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Login
  }
}
</script>

<style lang="sass">
@import "./sass/main.sass";
</style>
