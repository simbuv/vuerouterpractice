<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/" >Hello</router-link>
    <router-link to="contact">Contact</router-link>
     <router-link to="accounts">Accounts</router-link>
      <router-link to="friends/1/2/3">Friends</router-link>
     
    <router-view/>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>
<script>
export default {
  name : 'app',
  created:function()
  {
    console.log('App created')
  },
  beforecreate:function(){
    console.log('App Before create')
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
  margin-top: 60px;
}
</style>
