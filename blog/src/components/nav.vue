<template>
	<div id="nav">
	 <div class="container">
	  <div class="nav-logo">
	  	<h1><a href="javascript:;"><img src="../assets/fastmao.png"/></a></h1>
	  </div>
	  <div class="nav-list">
	  	<ul class="nav-list-type">
	  		<li>
	  			<router-link to="/main">博客</router-link>
	  		</li>
	  		<li v-show="$store.state.isAdmin">
	  			<router-link to="/main/create">发表文章</router-link>
	  		</li>
	  		<li>
	  		   <router-link to="/Main/Comment">交流</router-link>
	  		</li>
	  		<li>
	  			<router-link to="/Main/AboutMe">关于作者</router-link>
	  		</li>
	  		<li>
	  			<router-link to="/Main/AboutBlog">关于Blog</router-link>
	  		</li>
	  	</ul>
	  </div>
	  <div class="nav-menu">
	  	<div class="userMenu" v-if="this.$store.state.isLogin">
	  		<el-dropdown trigger="click" placement ='top' @command="handleCommand">
			  <span class="el-dropdown-link dropdown">
			    <img :src="$store.state.avatar"/>
			  </span>
			  <el-dropdown-menu  slot="dropdown">
			    <!--<el-dropdown-item command="a">个人中心</el-dropdown-item>-->
			    <!--<el-dropdown-item command="b">个人设置</el-dropdown-item>-->
			    <el-dropdown-item command="c">退出</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
	  		
	  	</div>
	  	<ul class="nav-menu-type" v-else>
	  		<li>
	  			<router-link to="/main/signin">登录</router-link>
	  		</li>
	  		<li>
	  			<router-link to="/main/signup">注册</router-link>
	  		</li>
	  	</ul>
	  </div>
	 </div>
	</div>
</template>

<script>
	export default {
		name:'',
		created(){
         if(window.sessionStorage.getItem('token')){
         	this.$store.commit('changeState')
         }
		},
		props:[],
		components:{

		},
		data() {
			return {
                 LoginFlag:true
			}
		},
		methods: {
          handleCommand(command){
          	switch (command){
          		case 'a':
          
          			break;
          		case 'b':
                    
          			break;
          		case 'c':
                       this.signOut()
          			break;	
          		default:
          			break;
          	}
          },
         signOut(){
         	let formata = {
         		'username':window.sessionStorage.getItem('name'),
         		'token'   :window.sessionStorage.getItem('token')
         	}
         	this.$http.post('/api/signout',formata).then((res)=>{
//       		console.log(res);
         		if(res.data.code == 0){
         			this.$store.commit('resetState');
         			this.$store.commit('resetAdmin');
         			window.sessionStorage.setItem('name','');
         			window.sessionStorage.setItem('token','');
         			window.sessionStorage.setItem('admin','');
         			this.$router.push({path:'/Main'});
         		}
         	})
         },
         privateZone(){
         	
         },
         privateSetting(){
         	
         }
		},
		watch:{
		 
		}
		}
</script>

<style  scoped="scoped">
	#nav {
		width: 100%;
		overflow: hidden;
		background: #748896;
	}
	.container{
			width: 1200px;
			height: 80px;
			margin: 0 auto;
			text-align: left;
			display: flex;
			overflow: hidden;
		}
	.nav-logo{
				width: 50px;
				height: 100%;
				display: inline-block;
				overflow: hidden;
			}
     .nav-logo img{
     	width: 100%;
     	position: relative;
     	top:20px;
     }
     .nav-list{
     	width: 700px;
     	height: 100%;
     	display: inline-block;
     }
     .nav-list .nav-list-type{
     	list-style: none;
     }
     .nav-list .nav-list-type li{
     	display: inline-block;
     	margin: 0 10px;
     }
     .nav-list .nav-list-type li a{
     	color: #fff;
     	text-decoration: none;
     	font-size: 20px;
     	font-weight: 500;
     	line-height: 90px;
     	padding: 15px;
     }
     .nav-menu{
     	height: 100%;
     	flex: 1;
     	position: relative;
     }
     .nav-menu .nav-menu-type{
     	list-style: none;
     	float: right;
     }
     .nav-menu .nav-menu-type li{
     	display: inline-block;
     	margin: 0 10px;
     }
      .nav-menu .nav-menu-type li a{
     	color: #fff;
     	text-decoration: none;
     	font-size: 20px;
     	font-weight: 500;
     	line-height: 90px;
     	padding: 15px;
     }
     .nav-menu .userMenu{
      position: absolute;
      right: 60px;
      top: 10px;
     }
     .nav-menu .userMenu .dropdown {
     	display: inline-block;
     	width: 60px;
     	height: 60px;
     	cursor: pointer;
     	background: #fff;
     	border: 1px solid transparent;
     	border-radius: 50%;
     	overflow: hidden;
     }
     .nav-menu .userMenu img{
          height: 60px;     	
      }
</style>
