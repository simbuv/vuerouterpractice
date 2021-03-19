<template>
    <div id="App">
        <ul><li v-for="user in users" :key="user.name">{{user.name}}</li></ul>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

export default {
    name : 'axiospractice',
    data: function()
    {
      return {
        users: []
      }
    },
    mounted() {
    
    
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data
      })
      .catch(function(error){
        console.log(error)
      })
    }
}
</script>