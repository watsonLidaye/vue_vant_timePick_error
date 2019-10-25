<style scoped>
@import './index.css';
</style>
<template>
	<div id="index" :style="{'height':fullHeight+'px'}">
		<img src="@/assets/image/logo@2x.png" alt="" class="w130h130">
		<div class="title">银行商户连接器服务商管理系统</div>
		<div class="input_unit">
			<input type="text" maxlength="20"  placeholder="请输入账号" v-model="name" />
			<div class="info" @click="showInfo()">
				<img src="@/assets/image/question-line@2x.png" alt="" class="w40h40">
			</div>
		</div>
		<div class="input_unit mb60">
			<input type="password"  maxlength="18" placeholder="请输入密码" v-model="password" />
		</div>
		<div class="bottom_btn" @click="sign()">登录</div>
		<div class="bottom">
			©湖南大业创展科技. All rights reserved
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
export default {
		name: 'index',

		data () {
			return {
				fullHeight: document.documentElement.clientHeight,
				name:'',
				password:'',
				toast:''
			}
		},
		created(){
			
		},
		mounted(){
			if (Lockr.get('name')) {
				this.name = Lockr.get('name')
			}
			if (Lockr.get('password')) {
				this.password = Lockr.get('password')
			}
		},
		methods:{
			showInfo(){
				Toast({message:'账号、密码与PC管理端一致'})
			},
			sign(){
				if (!this.name) {
					Notify({ type: 'warning', message: '请输入账号' })
					return false
				}
				if (!this.password) {
					Notify({ type: 'warning', message: '请输入密码' })
					return false
				}
				 this.toast = Toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                    duration:0
                })
				let data = {}
				data.userName = this.name
				data.passWord = this.password
				this.$utill.api.pwd(data).then(res => {
					 this.toast.clear()
					this.$router.push('/store')
					Toast.success('登录成功')
					Lockr.set('token',res.data)
					Lockr.set('name',this.name)
					Lockr.set('password',this.password)
				}).catch(res => {
					this.toast.clear()
					Toast({message:res.msg})
				})
			}
		},
		watch:{
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->