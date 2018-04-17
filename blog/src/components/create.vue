<template>
	<div id="create">
	 <div class="editor">
      <div class="article">
      <el-input placeholder="请输入標題" v-model="title">
	    <template slot="prepend">標題</template>
	  </el-input> 	
      </div> 
       <div class="article">
      <el-input placeholder="请输入简介" v-model="desc">
	    <template slot="prepend">简介</template>
	  </el-input> 	
      </div> 
        <div class="tag">
        <el-select v-model="tag" size="medium" popper-class="tagSelect" multiple placeholder="请选择文章標籤" :multiple-limit="limit">
	    <el-option
	      v-for="item in options"
	      :key="item.value"
	      :label="item.label"
	      :value="item.value">
	    </el-option>
	  </el-select>
        </div>
 	    <vue-html5-editor :content="content" :height="500" @change="updateData" ref="editor" ></vue-html5-editor>
 	    <div class="submit">
 	    	  <el-button type="primary" @click="createArticle()">发表</el-button>
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
			content: '',
			 title :'',
			 desc  :'',
			 limit:4,
options: [{
		  value: 'HTML',
		  label: 'HTML'
		}, {
		  value: 'CSS',
		  label: 'CSS'
		}, {
		  value: 'JavaScript',
		  label: 'JavaScript'
		}, {
		  value: 'Vue',
		  label: 'Vue'
		}, {
		  value: 'NodeJS',
		  label: 'NodeJS'
		},{
		  value: '面试',
		  label: '面试'
		},{
		  value: '闲谈',
		  label: '闲谈'
		},{
		  value: '讨论',
		  label: '讨论'
		}
		],
    tag:[]
			}
		},
		methods: {
			updateData(data){
				this.content = data;
//				console.log(this.content)
			},
			createArticle(){
				if(this.tag !==''&&this.title !==''&&this.content !==''&&this.desc !==''){
					let formata ={
						 'username':window.sessionStorage.getItem('name'),
						 'content':this.content,
						 'articletitle':this.title,
						 'articletype':this.tag,
						 'desc':this.desc
					}
					this.$http.post('/api/createArticle',formata).then((res)=>{
						if(res.data.code ===1){
							this.$router.push({path:'/Main'});
						}
						
					})
				}
			}
		},
		watch:{			
			}
		}
</script>

<style lang="less" scoped="scoped">
	#create {
		.editor{
			width: 900px;
			margin: 100px auto;
			.submit{
			   text-align: center;
				button{
					margin: 20px;
					padding: 15px 150px;
				}
			}
		}
		.article{
			margin: 20px 0;

		}
		.tag{
			margin: 20px 0;
			.el-select{
				display: block !important;
			}
		}
	}
</style>