<template>
  <div class="header-wrap">
    <router-link to="/sign-up">
      Sign UP
    </router-link>

    <div  @click="goTo('login')">
      <p  class="router-link">Login</p>
    </div>

    <router-link to="/game">
      Game
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  methods: {
    goTo(routeName) {
      this.$emit('changeRoute', routeName)
    }
  }
}
</script>

<style scoped>
.header-wrap {
  display: flex;
  justify-content: space-around;
  font-weight: bold;
}
.router-link {
  cursor: pointer;
}
.router-link:hover{
  color: darkblue;
}
.router-link-active {
  color: red;
}
</style>