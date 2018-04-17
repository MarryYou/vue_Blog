<template>
	<div id="signin">
        <div class="message" v-show="alertFlag">
		   <el-alert
		    title="用户名或者密码错误"
		    type="error"
		    center		 
		    :closable="false"
		    show-icon>
		  </el-alert>
        </div>
		<div class="content">
		<h3>登录</h3>
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
			<div class="submit" @click="login()"><el-button :disabled="writeLength">登录</el-button></div>
			<div class="link">
				<router-link to="/Main/SignUp">没有账号&nbsp;</router-link>
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
                alertFlag:false
			}
		},
		methods: {
			login(){
				let formata  = {
					'username':this.username,
					'pwd'     :this.pwd
				}
				this.$http.post('/api/signin',formata).then((res)=>{
					if(res.data.code === 0){
						window.sessionStorage.setItem('token',res.data.token);
						window.sessionStorage.setItem('name',this.username);
                        window.sessionStorage.setItem('avatar',res.data.avatar);
                        window.sessionStorage.setItem('admin',res.data.isAdmin);
						this.$store.commit('changeState');
						this.$store.commit('changeAdmin');
						this.$store.commit('changeAvatar');
						this.$router.push({path:'/main'});
						this.pwd ='';
						return;
					}
						this.alertFlag = true;
						setTimeout(()=>{
							this.alertFlag = false;
						},2000);
						this.pwd ='';
				})
			}
		},
		computed:{
			writeLength :function(){
				return this.username.length>0 && this.pwd.length>0 ? false:true;
			}
		},
		watch:{	
			}
		}
</script>

<style lang="less" scoped="scoped">
	#signin {
		width: 500px;
		height: 400px;
		margin: 0px auto ;
		position: relative;
		top: 90px;
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
		.submit{
			margin: 30px auto;
			button{
				background: cadetblue;
				color: #fff;
				padding: 15px 110px;
			}
		}
		.message{
			position: absolute;
			width: 100%;
			left: 0;
			top: -45px;
		}


	}
</style>