<template>
	<div id="aboutblog">
		<div class="title">
		   Why do it ?
		</div>
		<div class="content">
			<div class="tit">
				<h1>About Blog</h1>
				<div class="litter">
				说来惭愧，本来早就想着做一个网站。但由于以前node方面技术的欠缺导致了我这个计划搁置到了现在。
				 这个博客我一个人走了一遍 前端样式  数据结构 以及后端api的编写。 <br /><br />
				 前端技术采用的是 vue + element ，字体icon采用的是fontawesome ,css预处理语言选择的是 less ，基本上用了vue的全家桶,vuex
				 存储了 前端的 用户 token 。这是初版设计稿，没有做响应式的处理，
				 后期维护在考虑做一下响应式的布局。<br /><br />
				 后端技术采用的是 express +Mongodb ，整体的业务逻辑参考的github 的N-blog 作品。
				 由于是第一次全栈开发，所以很多细节不够完善，后期维护在慢慢的完善功能。<br /><br />
				 网站是博客类性质的个人站，主要分享自己在web前端学习过程中的一些体会和技术上的心得，没有标注的均为自己原创，转载请注明出处。<br />
				前端半吊子 在这里恭候大佬们的参观和细节建议，请在留言栏里留下宝贵的意见。
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'',
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
		},
		watch:{			
			}
		}
</script>

<style lang="less" scoped="scoped">
	#aboutblog {
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
		.content{
			text-align: left;
			height: 470px;
			margin: 15px 120px 0px;
			padding: 0 50px;
			background: #748896;
			.tit{
				color: #fff;
				line-height: 50px;
				padding: 20px;
			}
			.litter{
				margin-top: 20px;
				line-height: 30px;
			}
		}
	}
</style>