<template>
  <form class="login">
    <h1>KiMiA</h1>
    <h6>Sign in</h6>
    <input type="text" placeholder="username"/>
    <input type="password" placeholder="password"/>
    <button @click="signin()">Sign in</button>
  </form>
</template>

<script>
import store from '../store'

export default {
  methods:{
    signin:function name() {
      store.state.loginState = true
    }
  }
}
</script>
