<style scoped>
@import './detail.css';
</style>
<template>
	<div id="detail" >
        <div class="grey_black"></div>
        <div class="item flex">
            <div class="item_header">
                商户全称
            </div>
            <div  class="w400">肥肥烤肉店</div>
        </div>
        <div class="item flex">
            <div class="item_header">
                店铺全称
            </div>
            <div  class="w400">肥肥烤肉店</div>
        </div>
        <div class="item flex">
            <div class="item_header">
                联系人
            </div>
            <div  class="w400">黄小刚</div>
        </div>
        <div class="item flex">
            <div class="item_header">
                联系电话
            </div>
            <div  class="w400">18774101447</div>
        </div>
        <div class="item flex">
            <div class="item_header">
                产品类型
            </div>
            <div  class="w400">芸连接</div>
        </div>
        <div class="grey_black"></div>
        <div class="item flex">
            <div class="item_header">
                商户行业
            </div>
            <div  class="w400">餐饮</div>
        </div>
        <div class="item flex">
            <div class="item_header">
                所属支行
            </div>
            <div  class="w400">长沙市芙蓉支行</div>
        </div>
        <div class="item flex">
            <div class="item_header">
                所属区域
            </div>
            <div  class="w400">岳麓区</div>
        </div>
        <div class="item flex">
            <div class="item_header">
                所属镇、街道
            </div>
            <div  class="w400">文轩路麓谷街道</div>
        </div>
        <div class="item flex">
            <div class="item_header">
                详细地址
            </div>
            <div class="w400">麓谷企业广场A4栋406</div>
        </div>
        <div class="grey_black"></div>
        <div class="item flex">
            <div class="item_header">
                服务商名称
            </div>
            <div  class="w400">湖南大业创展科技</div>
        </div>
        <div class="item flex">
            <div class="item_header">
                所属支行
            </div>
            <div  class="w400">长沙市芙蓉支行</div>
        </div>
        <div class="item flex">
            <div class="item_header">
                操作员
            </div>
            <div  class="w400">大胖娟</div>
        </div>
        <div class="item flex">
            <div class="item_header">
                登录账号
            </div>
            <div  class="w400">feifei</div>
        </div>
        <div class="grey_black"></div>
        <template v-if="type==2">
            <div class="item flex">
                <div class="item_header flex_align">
                    <img src="@/assets/image/vip-crown-2-fill@2x.png" alt="" class="w36h36">
                    <span>套餐</span>
                </div>
                <div  class="w400">
                    旗舰版(<span class="color_green”">3800.00</span>元/年)
                </div>
            </div>
            <div class="item_special flex">
                <div class="item_header ">
                    <span>套餐使用权</span>
                </div>
                <div  class="w400">
                    <div class="flex_align mb20">
                        <img src="@/assets/image/Bitmap@2x (1).png" class="w32h32" alt="">
                        <div>电器商城</div>
                    </div>
                    <div class="flex_align mb20">
                        <img src="@/assets/image/Bitmap@2x (1).png" class="w32h32" alt="">
                        <div>外卖零售</div>
                    </div>
                </div>
            </div>
            <div class="item_special flex">
                <div class="item_header ">
                    <span>启用功能</span>
                </div>
                <div  class="w400">
                    <div class="flex_align mb20">
                        <img src="@/assets/image/Bitmap@2x (1).png" class="w32h32" alt="">
                        <div>数据</div>
                    </div>
                    <div class="flex_align mb20">
                        <img src="@/assets/image/Bitmap@2x (1).png" class="w32h32" alt="">
                        <div>装修店铺</div>
                    </div>
                    <div class="flex_align mb20">
                        <img src="@/assets/image/Bitmap@2x (1).png" class="w32h32" alt="">
                        <div>模板市场</div>
                    </div>
                </div>
            </div>
            <div class="item_special flex pb50">
                <div class="item_header ">
                    <span>营销功能</span>
                </div>
                <div  class="w400">
                    <div class="flex_align mb20">
                        <img src="@/assets/image/Bitmap@2x (1).png" class="w32h32" alt="">
                        <div>优惠券</div>
                    </div>
                    <div class="flex_align mb20">
                        <img src="@/assets/image/Bitmap@2x (1).png" class="w32h32" alt="">
                        <div>会员卡</div>
                    </div>
                    <div class="flex_align mb20">
                        <img src="@/assets/image/Bitmap@2x (1).png" class="w32h32" alt="">
                        <div>会员卡</div>
                    </div>
                </div>
            </div>
        </template>
        <div class="grey_black"></div>
        <div class="item flex">
            <div class="item_header">
                有效时间
            </div>
            <div  class="w400">2029-10-18</div>
        </div>
        <div class="grey_black"></div>
        <div class="grey_black"></div>
	</div>
</template>

<script>
export default {
		name: 'detail',

		data () {
			return {
                fullHeight: document.documentElement.clientHeight,
                type:''
			}
		},
		created(){
		},
		mounted(){
            if (!this.$route.params.type) {
                this.$router.replace('/store')
            }
			this.type = this.$route.params.type
		},
		methods:{
		},
		watch:{
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->