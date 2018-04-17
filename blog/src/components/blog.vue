<template>
	<div id="blog">	
	<div class="title">
	 Read the blogs ? 
    </div>
    <div class="articleList">
    	<div class="articleContent" v-for="item in articleList">
         <div class="article-in">
    		<div class="right">
    			<div class="tit">
    				<h3>{{item.articletitle}}</h3>
    			</div>
    			<div class="desc">
    				<p>{{item.desc}}</p>
    			</div>
    			<div class="tag">
    				<div class="tag-in" v-for="sub in item.tag">
    					<el-tag type="info" color="#e8e8e8"><span style="color: #9e9e9e; font-size: 16px;font-weight: 600; padding: 10px 10px;"><i class="fa fa-tag" style="font-size: 14px; margin-right: 10px;color: #7E7887;" aria-hidden="true"></i>{{sub}}</span></el-tag>   
    				</div>
    			</div>
    			<div class="author">
    				<span><i class="fa fa-user" aria-hidden="true"></i> {{item.username}}</span>
    				<span><i class="fa fa-clock-o" aria-hidden="true"></i> {{item.createtime}}</span>
    				<span><i class="fa fa-eye" aria-hidden="true"></i> {{item.PV}}</span>
    				<router-link :to="{path:'/Main/Article',query:{title:item.articletitle}}">Read More <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
    			</div>
    			
    		</div>   
         </div> 		
    	</div>
    </div>
	</div>
</template>

<script>
export default {
 name: 'editor',
 created(){
 	this.getArticle();
 },
 data () {
 return {
  articleList:[]
 }
 },
 methods: {
   getArticle(){
   	this.$http.get('/api/article').then((res)=>{
   		  res.data.article.forEach((item,index)=>{
   		  	item.tag = item.articletype.split(',');
   		  })
   		  this.articleList = res.data.article.reverse();
   	
   	})
   }
 }
}
</script>

<style lang="less" scoped="scoped">
	#blog {
		text-align: left;
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
		.articleList{
			width: 100%;
			padding: 20px 0;
		 .articleContent{
		 	padding: 0px 20px 5px;
		 	width: 1000px;
		    margin:  0 auto;	
			  	.article-in{	
			    display: flex;
			  	width: 1000px;
				margin:  0 auto;				
			    height: 200px;	
			    background: #fff;	
			     border-bottom: 1px solid #e8e8e8;     
                 .left{
                 	width: 200px;
                 	position: relative;
                 	img{
                 		position: absolute;
                 		width: 80%;
                 		left: 50%;
                 		top: 50%;
                 		transform: translate(-50%,-50%);
                 	}
                 }
                 .right{
                 	flex: 1;
                 	overflow: hidden;
                 	.tit{
                 		margin-top: 10px;
                 		padding: 0 150px 0 20px;
                 		font-size: 22px;
                 		line-height: 36px;
                 		cursor: pointer;
                 		color: #9e9e9e;
                 		word-wrap:break-word;
                 		h3{                			
                 			word-wrap: break-word;
                 		}
                 	}
                 	.desc{
                 		p{
                 			padding: 10px 20px;
                 			font-size: 18px;
                 			font-weight: 600;
                 			color: #9e9e9e;
                 		}
                 	}
                 	.tag{
                 		cursor: pointer;
                 		padding: 10px 20px;
                 		.tag-in{
                 			display: inline-block;
                 			margin: 0 10px 0 0;
                 		}
                 	}
                 	.author{
                 		padding: 10px 25px;
                 		  span{
                 			margin: 5px 10px 5px 0;
                 			color: #9e9e9e;
                 			font-size: 14px;
                 			font-weight: 600;
                 			cursor: pointer;
                 		}
                 		a{
                 			text-decoration: none;
                 			float: right;
                 			font-weight: 500;
                 			color: #ff9800;
                 		}
                 	}
                 }
			}	
			}		   
		}
		
	}
</style>