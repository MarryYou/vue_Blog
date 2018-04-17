<template>
  <div id="Home">
    <canvas></canvas>
    <div id="content">
     <div class="logo">
     <img src="../assets/senlanqing.jpg"/>
     </div>
     <div class="desc">
     	<h3>A simple express && vue 2.x Blog</h3>
     </div>
     <div class="link">
     	<ul>
       <li><span @click="ToBlog()">BLOG</span></li>
       <li><span @click="ToComment()">COMMENT</span></li>
       <li><a target="_blank" href="https://github.com/MarryYou"> GITHUB</a></li>
       <li><span @click="ToMe()">ME</span></li>
        <li><span @click="ToAbout()">ABOUT</span></li>
     	</ul>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created(){
  	
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	ToBlog(){
  	this.$router.push({path:'/Main/Blog'});
  	this.$store.commit('changeAdmin');
  	},
  	ToComment(){
    this.$router.push({path:'/Main/Comment'});
  	this.$store.commit('changeAdmin');
  	},
  	ToMe(){
    this.$router.push({path:'/Main/AboutMe'});
  	this.$store.commit('changeAdmin');
  	},
  	ToAbout(){
  		  this.$router.push({path:'/Main/AboutBlog'});
  	this.$store.commit('changeAdmin');
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#Home{
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
  #content{
    width: 800px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    .logo{
    	width: 100px;
    	height: 100px;
    	text-align: center;
    	margin: 10px auto 20px;
    	border: 2px solid  #748896;
    	overflow: hidden;
    	border-radius:50% ;
    	img{
    		width: 100%;
    		height: 100%;
    	}
    }
    .desc{
    	font-family: 'Raleway';
    	color: #3e5165;
    	font-size: 24px;
     font-weight: bold;
    }
    .link {
    	ul {
    		li{
    		  padding: 10px;
    		  margin: 30px;
    		  font-weight: 600;
    		  font-size: 18px;
    		  a{
    		  	color: rgba(116,136,150,1);
    		  	text-decoration: none;
    		  }
    		  span{
    		  	color: rgba(116,136,150,1);
    		  	cursor: pointer;
    		  }
    		}
    	}
    }
  }
}
</style>
