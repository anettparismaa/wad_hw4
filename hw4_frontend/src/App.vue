<template>
  <div class="container">
    <!--<layout>-->
    <header>
      <TopBar />
    </header>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import TopBar from './components/TopBar.vue'


export default {
  name: 'app',
  components: {
    Footer,
    TopBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
