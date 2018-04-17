<template>
	<div id="footer">
     <div class="link">
     <span @click="Home()"><i class="fa fa-home" aria-hidden="true"></i></span>
	 <span @click="Github()"><i class="fa fa-github" aria-hidden="true"></i></span>
	 <span @click="Wchat()"><i class="fa fa-weixin" aria-hidden="true"></i> </span>
     </div>
      <div class="firendShare">
      	<span>友情推荐：</span>
      	<a target="_blank" href="https://cn.vuejs.org/"> vue</a>
      	<a target="_blank" href="http://element-cn.eleme.io">element</a>
      	<a target="_blank" href="http://www.fontawesome.com.cn"> fontawesome</a>
      	<a target="_blank" href="https://juejin.im/"> 掘金</a>
      </div>
      <div class="blogDesc">
      	<p>© Senlanqing 2018. 版权仅归个人所有.</p>
      </div>
	</div>
</template>

<script>
	import wchat from '../assets/wchat.js'
	export default {
		name:'footer',
		created(){

		},
		props:[],
		components:{
		},
		data() {
			return {
               
			}
		},
		methods: {
		Wchat() {
        this.$notify({
          title: 'Wchat',
          duration:0,
          type:'info',
          dangerouslyUseHTMLString: true,
          message:'<img width="200" src="'+wchat+'" /><p style="text-align:center;">Wchat 申请麻烦备注一下</p>'
        });
     },
     Github(){
     	window.open("https://github.com/MarryYou","_blank"); 
     },
     Home(){
     	this.$router.push({'path':'/'});
     	window.location.href=''
     }
		},
		watch:{			
			}
		}
</script>

<style lang="less" scoped="scoped">
	#footer {
		width: 100%;
		height: 170px;
		text-align: center;
		background: #748896;
	    .link{
	    	color: #fff;
	    	font-size: 30px;
	    	padding-top: 20px;
	    	margin:0 auto;
	       span{
	       	cursor: pointer;
	       	display: inline-block;
	       	padding: 10px;
	       }:hover{
	       	color:rgba(109,184,255,.5);
	       }
	    }
	    .firendShare{
	    	span {
	    		color: #fff;
	    	}
	    	a{
	    		color: #fff;
	    		display: inline-block;
	    		text-decoration: none;
	    		padding: 10px;
	    	}
	    }
	    .blogDesc{
	    	color: #fff;
	    	padding: 10px;
	    }
	    
	}
</style>