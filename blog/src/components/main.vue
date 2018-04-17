<template>
	<div id="main">
    <nav-view></nav-view>
	 <!-- <h1>这是正式页面</h1> -->
     <div class="main">
      <router-view></router-view>
     </div>
	 <footer-view></footer-view>
	</div>
</template>

<script>
  import nav from './nav.vue';
  import Footer from './footer.vue';
	export default {
    name:'',
    created(){

    },
    data(){
      return{
        isfirst:this.$store.state.firstInto
      }
    },
    props:[],
    methods:{

    },
    components: {
      'nav-view':nav,
      'footer-view':Footer
    }
		}
</script>

<style lang="less" scoped="scoped">
	 #main {
       .main{
      	min-height: 600px;
      }
	}
</style>
