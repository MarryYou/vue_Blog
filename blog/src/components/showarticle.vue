<template>
	<div id="showarticle">
	 <div class="content">
	 	<div class="tit">
	 		<p>{{content.articletitle}}</p>
	 	<div class="desc">
	 		<span><i class="fa fa-user" aria-hidden="true"></i> {{content.username}}</span>
    		<span><i class="fa fa-clock-o" aria-hidden="true"></i> {{content.createtime}}</span>
    	    <span><i class="fa fa-eye" aria-hidden="true"></i> {{content.PV}}</span>
	 	</div>
	 	</div>

	 	<div class="content-in"v-html="content.content">
	 		
	 	</div>
	 </div>
	</div>
</template>

<script>
	export default {
		name:'',
		created(){
        this.getOneArticle();
		},
		props:[],
		components:{
		},
		data() {
			return {
              title:this.$route.query.title,
              content:'',
			}
		},
		methods: {
		  getOneArticle(){
		  	this.$http.get('/api/article').then((res)=>{
		  	this.content = res.data.article.filter((item,index)=>{
		  			return this.title === item.articletitle
		  		})
		  	this.content = this.content[0];
		  	this.updatePV();
		  	})
		  },
		updatePV(){
			let url = '/api/updatePV/'+this.content.articletitle;
   			this.$http.get(url).then((res)=>{
//		  			console.log(res)
		  			this.content.PV = res.data.PV;
		  		})
   }
		},
		watch:{			
			}
		}
</script>

<style lang="less" scoped="scoped">
	#showarticle {
		.content{
			width: 1000px;
			margin: 20px auto;
			padding: 0px 100px;
			.tit{		
				text-align: center;
				padding-top: 20px;
				padding-left: 20px;	
				padding-bottom: 20px;					
				background: #fff;
				border-bottom:1px solid  #e8e8e8;
				color: #444;
				p{
				font-size: 30px;
				font-weight: 500;
				}
                .desc{
                	margin-top: 20px;
                   span{
					   	margin: 5px 10px 5px 0;
                 			color: #444;
                 			font-size: 14px;
                 			padding-top: 20px;
                 			font-weight: 600;
                 			cursor: pointer;
				}
                }
			}
			.content-in{
				background: #fff;
				min-height: 500px;
				padding: 50px 100px;
				text-align: left;
				font-size: 16px;
				line-height: 20px;
			}
		}
	}
</style>