<template>
	<div id="comment">
	<div class="title">
	 Leave a message ?
	</div>
    <div class="top">
    <el-alert
    :title="message"
    type="error"
    center
    v-show="false"
    show-icon>
  </el-alert>
   <div class="textarea" contenteditable="true" ref='content'><br/></div>
   <div class="submit">
   	  <button @click="createComment()">发布</button>
   </div>
    </div>
    <div class="showMessage">
      <div class="letter" v-for="item in commentsList">
        <div class="letter-in">
       	<div class="left">
      		<div class="logo">
      			<img :src='item.avatar'/>
      		</div>
      	</div>
      	<div class="right">
      	  <div class="info">
      	  		<p class="name">{{item.username}} <i v-show="item.isAdmin" class="iconfont admin icon-administration"></i></p>
      	  		<p class="time">{{item.createtime}}</p>
      	  </div>
      	  <div class="content">
      	  	{{item.content}}
      	  </div>
      	</div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
	export default {
		name:'',
		created(){
          this.getComment()
		},
		props:[],
		components:{
		},
		data() {
			return {
              message:'留言內容不能為空',
              commentsList:[]
			}
		},
		methods: {
			createComment(){
				if(window.sessionStorage.getItem('name') &&window.sessionStorage.getItem('token')){
				let formata = {
					'username':window.sessionStorage.getItem('name'),
					'token'   :window.sessionStorage.getItem('token'),
					'content' :this.$refs.content.innerText.replace('\n','')
				}
                 if(formata.content.length>=0&&formata.content !==''){
                this.$http.post('/api/createcomment',formata).then((res)=>{
                	if(res.data.code === 1){
                		this.$http.get('/api/comment').then((res)=>{
                			this.commentsList = res.data.comment.reverse();
//              			console.log(res)
                		})
                	}
				})
                return;
                 }
                 
				}
			},
			getComment(){
			 this.$http.get('/api/comment').then((res)=>{
              	this.commentsList = res.data.comment.reverse();
//    			console.log(res)
          })
			}
		},
		watch:{			
			}
		}
</script>

<style lang="less" scoped="scoped">
	#comment {
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
		.top{
			padding: 20px 200px;
			.textarea{
			    width: 900px;
			    text-align: left;
			    text-indent: 1em;
			    min-height: 80px;
			    max-height: 300px;				        
			    margin-left: auto;
			    margin-right: auto;
			    padding: 3px;
			    outline: 0;
			    border: 1px solid #a0b3d6;
			    font-size: 12px;
			    line-height: 24px;
			    padding: 2px;
			    word-wrap: break-word;
			    overflow-x: hidden;
			    overflow-y: hidden;			 
			    border-color: rgba(82, 168, 236, 0.8);
			    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
			}
			.submit{
				button{
					border: 0;
					margin: 0;
					padding: 0;
					background: cadetblue;
					color: #fff;
					margin-top: 20px;
					padding: 10px 100px;
					cursor: pointer;
				}
			}
		}
		.showMessage{
			width: 900px;
			min-height: 250px;
			margin: 20px auto;
			/*border: 1px solid #000;*/
			 .letter{
                 padding: 0 20px 20px;
                 background: #fff;
               .letter-in{
               	display:flex;			
				border-bottom: 1px solid #eee;
               		.left{
					width: 60px;
                    /*border-bottom: 1px solid #000;*/
					.logo{
						width: 50px;
						height: 50px;
						margin-top: 10px;
						border: 1px solid #ccc;
						border-radius:50%;
						overflow: hidden;
						position: relative;
						img{
							width: 60px;
							position: absolute;
							left: 50%;
							top:50%;
							transform: translate(-50%,-50%);
						}
					}
				}
				.right{
					flex: 1;
					/*border: 1px solid #000088;*/
					padding-bottom: 10px;
					text-align: left;
					.info{
						margin-top: 8px;
					.name{
						font-weight: 400;
						color: #555;
						font-size: 18px;
						line-height: 18px;
						.admin{
							color: #ff9800;
						}
						}
						.time{
							font-size: 14px;
							color: #777;
							margin-top: 5px;
							line-height: 14px;
						}
					}
					.content{
						padding: 10px 0 0;
						padding-right: 100px;
						line-height: 20px;
						color: #555;
					}
				}
               }
			}
		}
	}
</style>