<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  created(){
  },
  data(){
  return{
 
  }
  },
  methods:{
        setAdmin(){
        	this.$store.commit('changeAdmin');
        }
  },
  watch: {
  '$route':'setAdmin'
  }
 }


</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,body{
  width: 100%;
  height: 100%;
  background: #fffafa;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;

}
</style>
