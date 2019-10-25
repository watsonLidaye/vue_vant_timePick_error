<style scoped>
@import './index.css';
</style>
<template>
	<div id="result" >
        <img src="@/assets/image/Bitmap@2x (1).png" class=" mb10" alt="">
        <div class='ft32 mb60'>创建成功</div>
        <div class="result_info">“肥肥烤肉店”创建成功，账号:feifei,密码：123456 详情请前往商户列表查看</div>
        <div class="store" @click="goMain()">商户列表</div>
	</div>
</template>

<script>

export default {

		name: 'result',
        
		data () {
			return {

			}
		},
		created(){
		},
		mounted(){

		},
		methods:{
            goMain(){
                this.$router.replace('/store')
            }
		},
		watch:{

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->