<template>
  <div id="app">
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
    };
  },
   mounted() {
    if(!this.authenticated) {
      this.$router.replace({ name: "login" });
   }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  },
  components: {
    
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto Condensed', sans-serif !important;
  background-color: #E0E0E0 !important;
}

.width-100 {
    width: 100px;
}

#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #000000;
}
</style>