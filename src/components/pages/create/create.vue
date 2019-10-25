<style scoped>
@import './index.css';
</style>
<template>
	<div id="create" >
        <div class="plate jub_jub_center "  @click="showOp('create')">
            <div class="flex_align">
                <img src="@/assets/image/213@2x.png" class="w32h32" alt="">
                <div>商户类型</div>
            </div>
            <div class="flex_align mr30">
                <div class="mr20">{{this.createType}}</div>
                <img src="@/assets/image/arrow@2x.png" class="w24h16" alt="">
            </div>
        </div>
        <div class="grey_black"></div>
        <div class="plate_input jub_jub_center " >
            <div >
               商户全称
            </div>
            <div class="flex_align mr30">
               <input type="text" class="input" placeholder="请输入商户全称">
            </div>
        </div>
        <div class="plate_input jub_jub_center " >
            <div >
               店铺全称
            </div>
            <div class="flex_align mr30">
               <input type="text" class="input" placeholder="请输入店铺全称">
            </div>
        </div>
        <div class="plate_input jub_jub_center " >
            <div >
               联系人
            </div>
            <div class="flex_align mr30">
               <input type="text" class="input" placeholder="请输入联系人姓名">
            </div>
        </div>
        <div class="plate_input jub_jub_center " >
            <div >
               联系电话
            </div>
            <div class="flex_align mr30">
               <input type="text" class="input" placeholder="请输入联系人电话">
            </div>
        </div>
        <div class="plate jub_jub_center "  @click="showOp('industryList')">
            <div>商户行业</div>
            <div class="flex_align mr30">
                <div class="mr20 " :class="{'color_cc':!industryName}">{{industryName?industryName:'请选择'}}</div>
                <img src="@/assets/image/arrow@2x.png" class="w24h16" alt="">
            </div>
        </div>
        <div class="plate jub_jub_center "  @click="showOp('bankList')">
            <div>所属支行</div>
            <div class="flex_align mr30">
                <div class="mr20 "  :class="{'color_cc':!bankName}">{{bankName?bankName:'请选择'}}</div>
                <img src="@/assets/image/arrow@2x.png" class="w24h16" alt="">
            </div>
        </div>
        <div class="plate jub_jub_center "   @click="showOp('city')">
            <div>所属区县</div>
            <div class="flex_align mr30">
                <div class="mr20 "  :class="{'color_cc':!cityName}">{{cityName?cityName:'请选择'}}</div>
                <img src="@/assets/image/arrow@2x.png" class="w24h16" alt="">
            </div>
        </div>
        <div class="plate jub_jub_center "  @click="showOp('street')">
            <div>所属镇、街道</div>
            <div class="flex_align mr30">
                <div class="mr20 " :class="{'color_cc':!streetName}">{{streetName?streetName:'请选择'}}</div>
                <img src="@/assets/image/arrow@2x.png" class="w24h16" alt="">
            </div>
        </div>
        <div class="plate_input jub_jub_center " >
            <div >
               详细地址
            </div>
            <div class="flex_align mr30">
               <input type="text" class="input" placeholder="请填写">
            </div>
        </div>
        <div class="grey_black"></div>
        <div class="plate_input jub_jub_center " >
            <div >
               登录账号
            </div>
            <div class="flex_align mr30">
               <input type="text" class="input" placeholder="请输入账号">
            </div>
        </div>
        <div class="plate_input jub_jub_center " >
            <div >
               登录密码
            </div>
            <div class="flex_align mr30">
               <input type="text" class="input" placeholder="请输入密码">
            </div>
        </div>
        <div class="grey_black"></div>
        <!-- 惠连接单独 -->
        <template v-if="createType=='慧连接'">
            <div class="plate jub_jub_center "  @click="showOp()">
                <div class="flex_align">
                    <img src="@/assets/image/vip-crown-2-fill@2x.png" alt="" class="w36h36 mr10">
                    <div class="color_66">套餐</div>
                </div>
                <div class="flex_align mr30">
                    <div class="mr20">请选择</div>
                    <img src="@/assets/image/arrow@2x.png" class="w24h16" alt="">
                </div>
            </div>
            <div class="smallpro">
                <div class="pl30 color_66 pt30 pb50">套餐使用权</div>
                <div class="flex_wrab">
                    <div class="juc_colum_b w_33 mb50" >
                        <div class="flex_align">
                            <img src="@/assets/image/Bitmap@2x (1).png" class="w40h40 mr10" alt="">
                            <div>数据</div>
                        </div>
                    </div>
                    <div class="juc_colum_b w_33 mb50" >
                        <div class="flex_align">
                            <img src="@/assets/image/Bitmap@2x (1).png" class="w40h40 mr10" alt="">
                            <div>数据</div>
                        </div>
                    </div>
                    <div class="juc_colum_b w_33 mb50" >
                        <div class="flex_align">
                            <img src="@/assets/image/Bitmap@2x (1).png" class="w40h40 mr10" alt="">
                            <div>数据</div>
                        </div>
                    </div>
                    <div class="juc_colum_b w_33 mb50" >
                        <div class="flex_align">
                            <img src="@/assets/image/Bitmap@2x (1).png" class="w40h40 mr10" alt="">
                            <div>数据</div>
                        </div>
                    </div>

                </div>
                <div class="pl30 color_66 pt30 pb50">套餐使用权</div>
                <div class="flex_wrab">
                    <div class="juc_colum_b w_33 mb50" >
                        <div class="flex_align">
                            <img src="@/assets/image/Bitmap@2x (1).png" class="w40h40 mr10" alt="">
                            <div>数据</div>
                        </div>
                    </div>
                    <div class="juc_colum_b w_33 mb50" >
                        <div class="flex_align">
                            <img src="@/assets/image/Bitmap@2x (1).png" class="w40h40 mr10" alt="">
                            <div>数据</div>
                        </div>
                    </div>
                    <div class="juc_colum_b w_33 mb50" >
                        <div class="flex_align">
                            <img src="@/assets/image/Bitmap@2x (1).png" class="w40h40 mr10" alt="">
                            <div>数据</div>
                        </div>
                    </div>
                    <div class="juc_colum_b w_33 mb50" >
                        <div class="flex_align">
                            <img src="@/assets/image/Bitmap@2x (1).png" class="w40h40 mr10" alt="">
                            <div>数据</div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="grey_black"></div>
        </template>
        <div class="plate jub_jub_center "  @click="showOp('time')">
            <div>有效时间</div>
            <div class="flex_align mr30">
                <div class="mr20 ">{{currentDate| formatDates}}</div>
                <img src="@/assets/image/calendar-line@2x.png" class="w32h32" alt="">
            </div>
        </div>
        <div class="grey_black"></div>
        <div class="grey_black"></div>
         <div class="bottom">
            <div class="add" @click="create()">创建商户账号</div>
        </div>
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
        <van-popup v-model="showModel"  position="bottom">
            <template v-if="pickType!='time'">
                <van-picker :columns="columns" @change="onChange" />
            </template>
            <template v-if="pickType=='time'">
                <van-datetime-picker
                v-model="currentDate"
                type="date"
                :min-date="minDate"
                :max-date="maxDate"
                :show-toolbar='false'
                />
            </template>
        </van-popup>
	</div>
</template>

<script>
import { formatDate } from '@/assets/js/date.js'
import Vue from 'vue'
import {ActionSheet,DatetimePicker,Picker,Notify} from 'vant'
Vue.use(ActionSheet)
Vue.use(DatetimePicker)
Vue.use(Picker)
Vue.use(Notify)

export default {
		name: 'detail',
        filters: {
            formatDates(time){
                var date = new Date(time)
                return formatDate(date)
            }
        },
		data () {
			return {
                fullHeight: document.documentElement.clientHeight,
                type:'',
                show:false,
                showModel:false,
                currentDate: new Date(),
                value:'',
                createType:'芸连接',
                pickType:'', //弹框选择类型
                columns: ['芸连接', '慧连接'],
                actions: [],
                minDate: new Date('2000-01-01'),
                maxDate:new Date('3000-01-01'),
                industryList:[],
                industryId:'',
                industryName:'',
                bankList:[],
                bankId:'',
                bankName:'',
                city:[],
                cityId:'',
                cityName:'',
                streetList:[],
                streetId:'',
                streetName:'',

			}
		},
		created(){},
		mounted(){
            this.industryListGet()
            this.bankListGet()
            this.cityListGet()
             this.currentDate = new Date(new Date().getTime()+365*10*3600*24*1000)
		},
		methods:{
            onChange(picker, value, index) {
                console.log(`当前值：${value}, 当前索引：${index}`)
            },
            showOp(type){
                if (type=='street'&&!this.cityId) {
                    Notify({ type: 'warning', message: '请先选择所属区县' })
					return false
                }
                 if (type!='time') {
                    this.show = true
                }
                
                switch (type) {
                    case 'time':
                        this.showModel = !this.showModel
                            if (this.showModel) {
                                this.pickType = type
                            }
                    break
                    case 'create':
                        this.pickType = 'create'
                        this.actions=[ 
                            { name: '芸连接' },
                            { name: '慧连接' }
                        ]
                    break
                    case 'industryList':
                        this.pickType = 'industryList'
                        this.actions=this.industryList
                    break
                    case 'bankList':
                        this.pickType = 'bankList'
                        this.actions=this.bankList
                    break
                    case 'city':
                        this.pickType = 'city'
                        this.actions=this.city
                    break
                    case 'street':
                        this.pickType = 'street'
                        this.actions=this.streetList
                    break
                }
            },
            industryListGet(){
                this.$utill.api.industryList().then(res => {
                    let temlist = res.data
                  
                   for (let i in temlist) {
                       temlist[i].name = temlist[i].industryName
                   }
                    this.industryList=temlist
				}).catch(res => {
				})
            },
            bankListGet(){
                this.$utill.api.bankList().then(res => {
                    let temlist = res.data
                  
                   for (let i in temlist) {
                       temlist[i].name = temlist[i].bankName
                   }
                    this.bankList=temlist
				}).catch(res => {
				})
            },
            cityListGet(id){
                let data  = {}
                data.parentId = id?id:''
                this.$utill.api.areaList(data).then(res => {
                    let temlist = res.data
                   for (let i in temlist) {
                       temlist[i].name = temlist[i].areaName
                   }
                   if (this.cityId) {
                        this.streetList=temlist
                   } else {
                       this.city=temlist
                   }
				}).catch(res => {
				})
            },
            create(){
                this.$router.replace('/result')
            },
            onSelect(item) {
                switch (this.pickType) {
                    case 'create':
                        this.createType = item.name
                        break
                    case 'industryList':
                        this.industryId = item.id
                        this.industryName = item.name
                        break
                    case 'bankList':
                        this.bankId = item.id
                        this.bankName = item.name
                        break
                    case 'city':
                        this.cityId = item.id
                        this.cityName = item.name
                        this.streetId = ''
                        this.streetName =''
                         this.cityListGet(item.id)
                        break
                    case 'street':
                        this.streetId = item.id
                        this.streetName = item.name
                        break
                }
               
                this.pickType = ''
                this.show = false
                }
		},
		watch:{
			showModel(val){
                if (!val) {
                    this.pickType = ''
                }
            }
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->