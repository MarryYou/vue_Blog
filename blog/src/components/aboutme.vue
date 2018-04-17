<template>
	<div id="me">
		<div class="title">
		    Who am I ?
		</div>
		<!--:"-->
		<el-carousel :interval="400000000" type="card" height="440px" indicator-position="none" arrow="never">
	    <el-carousel-item >
	     <div class="info">
	     	 <div class="logo">
	     	 	<img src="../assets/senlanqing.jpg"/>
	     	 </div>
	      <div class="tag">
	      		<span class="key">Name</span><span class="value">范浩天 (FAN HAO TIAN )</span>
	      </div>
	      <div class="tag">
	      		<span class="key">Age</span><span class="value">95后 (外号 佛系90后 )</span>
	      </div>
	      <div class="tag">
	      		<span class="key">Work</span><span class="value">南京 </span>
	      </div>
	      <div class="tag">
	      		<span class="key">Gender</span><span class="value">男 </span>
	      </div>
	      <div class="tag">
	      		<span class="key">Desc</span><span class="value">前端半吊子 </span>
	      </div>
	     </div>
	    </el-carousel-item>
	    
	    <el-carousel-item >
	    <div class="info">
	    	<div class="freeZone"></div>
	     <div class="tag">
	      		<span class="key">School</span><span class="value">常州某不知名信息学院软件系 </span>
	      </div>
	      <div class="tag">
	      		<span class="key">Email</span><span class="value">614345508@qq.com</span>
	      </div>
	      <div class="tag">
	      		<span class="key">GitHub</span><span class="value"><a target="_blank" href="https://github.com/MarryYou">MarryYou</a></span>
	      </div>
	      <div class="tag" @click="Wchat()">
	      		<span class="key">Wchat</span><span  class="value">森蓝情。 </span>
	      </div>
	      <div class="tag">
	      		<span class="key">QQ</span><span class="value">614345508 </span>
	      </div>
	      <div class="tag">
	      		<span class="key">Sign </span><span class="value"> 处女座</span>
	      </div>
	      <div class="tag">
	      		<span class="key">Skills to</span><span class="value">前端 && node 的全栈工程师 </span>
	      </div>
	     </div>
	    </el-carousel-item>
	    <el-carousel-item >
	      <div class="info">
	      	<div class="tools">
	     	 	<h1>Skills Tag</h1>
	     	 </div>
	     	 <div class="skilList">
	     	 	<el-tag v-for="item in skils"size="medium" type="warning"color="#f5f7fa">{{item}}</el-tag>
	     	 </div>
	     	 <div class="tools">
	     	 	<h1>Faith motto</h1>
	     	 	<div class="letter">
	     	 		才20多一点，总不能一直止步不前的浪费青春吧。
	     	 		       总得学点东西，为以后发展方向付出努力吧。
	     	 		  
	     	 	</div>
	     	 </div>
	      </div>
	    </el-carousel-item>
	  </el-carousel>
	</div>
</template>

<script>
	import wchat from '../assets/wchat.js'
	export default {
		name:'',
		created(){

		},
		props:[],
		components:{
		},
		data() {
			return {
                skils:['vue','node','express','MongoDB','Jquery','ps','js','html','css','mobile WEB'] 
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
     }
		},
		watch:{			
			}
		}
</script>

<style lang="less" scoped="scoped">
	#me {
		.title{
			width: 100%;
			height: 100px;
			font-size: 40px;
			line-height: 100px;
			font-weight: 100;
			background: #748896;
			color: #FFF;
			text-align: center;
		}
	.el-carousel{
		margin-top: 20px;
		overflow-y: hidden;
		text-align: left;
	}
	.el-carousel__item{
		overflow: hidden !important;
		background: #607d8b;
		.info{
			 padding: 0 100px;
			.tools{
			 text-align: center;
			 line-height: 100px;
			 color: #fff; 	
			 .letter{
			 	line-height: 30px;
			 }
			 }
			 .el-tag--warning{
			 	color: #606266;
			 	margin: 5px 10px;
			 	font-size: 14px;
			 	font-weight: 500;
			 	line-height: 30px;
			 }

			.logo{
				width: 100px;
				height: 100px;
				overflow: hidden;
				border: 1px solid transparent;
				border-radius: 50%;
				margin: 0 auto;
				margin-top: 20px;
				margin-bottom: 20px;
				img{
					width: 100%;
				}
			}
			.freeZone{
				height: 30px;
			}
			.tag{
					
				    border: 1px solid #fff;
				    margin: 10px 0;
					color: #fff;
					.key{
						height: 100%;
						min-width: 60px;
						line-height: 30px;
						display: inline-block;
						padding: 5px 10px;
						background: #fff;
						color: #607d8b;
					}
					.value{
						height: 100%;
						display: inline-block;
						line-height: 30px;
						font-weight: 600;
						margin-left: 100px;
						cursor: pointer;
						a{
							color: #fff;
							text-decoration: none;
						}
					}
				}
		}
	}
	}
</style>
