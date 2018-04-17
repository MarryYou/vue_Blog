<template>
	<div id="signup">
        <div class="message" v-show="alertFlag">
		   <el-alert
		   	v-if="isSuccess"
		    title="注册成功"
		    type="success"
		    center
		    :closable="true"
		    show-icon>
		  </el-alert>
		  	<el-alert
		  	v-else
		    :title="alertmessage"
		    type="error"
		    center
		    :closable="false"
		    show-icon>
		  </el-alert>
        </div>
		<div class="content">
		<h3>注册</h3>
		<div class="avatar">
			<p>头像上传</p>
			<label for="xFile">
			<div class="broder">
				<div class="row"></div>
				<div class="colum"></div>
			</div>
			</label>
            <form><input ref='file' type="file" id="xFile" @change="onfilechange" style="position:absolute;clip:rect(0 0 0 0);"></form>
		<div class="showImg" v-show="showImg" ref='imgDiv'>
			<!--<img src="" width="100" height="100" ref='showavatar' />-->
			<i class="fa fa-minus-circle" aria-hidden="true" id="removeImg" @click="clearImg"></i>
		</div>
		</div>
		<div class="Username">
	    <p>用户名</p>
		<el-input
	    placeholder="请输入用户名"
	    prefix-icon="el-icon-mobile-phone"
	    clearable
	    v-model="username">
	     </el-input>
			</div>
		<div class="PassWord">
	    <p>密码</p>
		<el-input
	    placeholder="请输入密码"
	    type="password"
	    clearable
	    prefix-icon="el-icon-document"
	    v-model="pwd">
	     </el-input>
			</div>
		<div class="RepassWord">
	    <p>确认密码</p>
		<el-input
	    placeholder="再次输入密码"
	    type="password"
	    clearable
	    prefix-icon="el-icon-document"
	    v-model="repwd">
	     </el-input>
		</div>
			<div class="submit" @click="register()"><el-button :disabled="writeLength">注册</el-button></div>
					<div class="link">
				<router-link to="/Main/SignIn">去登陆&nbsp;</router-link>
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
                username:'',
                pwd:'',
                repwd:'',
                alertFlag:false,
                alertmessage:'',
                isSuccess:false,
                avatar:'',
                showImg:false,
                haveLogo:false,
			}
		},
		methods: {
			register(){

      let baseImg64 =''
			if(this.haveLogo){
      baseImg64 = document.querySelector('#avatar').src;
      }else{
      baseImg64 = 'default';
      }
			 let formata ={
			 	'username':this.username,
			 	'pwd':this.pwd,
			 	'repwd':this.repwd,
			 	'avatar':baseImg64
			 }
        this.$http.post('/api/signup',formata).then((res)=>{
        	if(res.data.code === 0){
        		this.isSuccess = true;
        		this.alertFlag = true;
        		setTimeout(()=>{
					this.alertFlag = false;
				    this.$router.push({path:'/main/signin'});
				},2000);
        		return;
        	}
         this.isSuccess = false;
         this.alertmessage = res.data.message;
          this.alertFlag = true;
				setTimeout(()=>{
					this.alertFlag = false;
				},2000);
				this.pwd ='';
				this.repwd ='';
        })

			},
			onfilechange(e){
        let file = this.$refs.file.files[0];
        this.haveLogo = true;
				let reader = new FileReader();
				reader.onloadend = function(){
				 let img = document.createElement('img');
				 img.src = reader.result;
				 img.id = 'avatar';
				 img.width = 100;
				 img.height = 100;
				 document.querySelector('.showImg').appendChild(img);
				}
				if(file){
					reader.readAsDataURL(file)
				}else{
					this.$refs.showavatar.src='null'
				}
				this.showImg = true;
			},
			clearImg(){
				this.showImg = false;
				let img = document.querySelector('.showImg').querySelector('img');
				 document.querySelector('.showImg').removeChild(img)
			}
		},
		computed:{
			writeLength :function(){
				return this.username.length>0 && this.pwd.length>0 &&this.repwd.length >0? false:true;
			}
		},
		watch:{
			}
		}
</script>

<style lang="less" scoped="scoped">
	#signup {
		width: 500px;
		height: 550px;
		margin: 0px auto ;
		position: relative;
		top: 20px;
		color: #3E5165;
		background: #eee;
		a{
			text-decoration: none;
			font-weight: 600;
			color: #3E5165;
		}
		h3{
			text-align: center;
			font-size: 25px;
			font-weight: 400;
			line-height: 80px;
		}
		.Username{
			padding:  0 80px;
			p{
				color: #3E5165;
				font-weight: 600;
				font-size: 14px;
				padding: 10px;
				text-align: left;
			}
		}
		.PassWord{
		     padding:  0 80px;
			p{
				color: #3E5165;
				font-weight: 600;
				font-size: 14px;
				padding: 10px;
				text-align: left;
			}
		}
		.RepassWord{
		     padding:  0 80px;
			p{
				color: #3E5165;
				font-weight: 600;
				font-size: 14px;
				padding: 10px;
				text-align: left;
			}

		}
		.avatar{
			  padding:  0 80px;
			  position: relative;
			  p{
				color: #3E5165;
				font-weight: 600;
				position: absolute;
				left: 75px;
				top: 30px;
				font-size: 14px;
				padding: 10px;
				text-align: left;
			}
			label{
				display: inline-block;
				width: 100px;
				height: 100px;
				margin: 0 auto;
			}
			.broder{
				margin: 0 auto;
				width: 100px;
				height: 100px;
				box-sizing: border-box;
				border:1px dashed  cornflowerblue;
				position:relative;
				cursor: pointer;
				.row{
						width: 20px;
						height: 1px;
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translateX(-50%);
						background: cornflowerblue;
					}
					.colum{
						width: 1px;
						height: 20px;
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translateY(-50%);
						background: cornflowerblue;
					}
			}
			.showImg{
				width: 100px;
				height: 100px;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				z-index: 100;
				/*display: none;*/
				top: 0;
				background: #fff;
				#removeImg{
					position: absolute;
					right: 2px;
					cursor: pointer;
					top: 2px;
				}
			}

		}
		.submit{
			margin: 30px auto 20px;
			button{
				background: cadetblue;
				color: #fff;
				padding: 15px 120px;
			}
		}
		.message{
			position: absolute;
			width: 100%;
			left: 0;
			top: -20px;
		}
	}
</style>
