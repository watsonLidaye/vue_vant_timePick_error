<style scoped>
@import 'main.css';
</style>
<template>
	<div id="mains">
        <div class="header ">
            <div class="flex h87">
                <div class="header_item juc_colum" @click="headerOp(1)">
                    <div class="header_plate  " :class="{'header_act':header_index==1}" >芸连接</div>
                </div>
                <div class="header_item juc_colum"  @click="headerOp(2)">
                    <div class="header_plate" :class="{'header_act':header_index==2}">慧连接</div>
                </div>
            </div>
        </div>
        <div class="plate" :style="{'min-height':fullHeight+'px'}">
            <div class="search flex_align">
                <div class="w614">
                    <input type="text" class="ft28 w_100 h_100"  @keyup.enter="search()" v-model="selectInput" placeholder="搜索店铺名称/联系人">  
                    <img src="@/assets/image/Shape@2x.png" class="w30h28" alt="">
                </div>
                <div class="w72 juc_colum_b" @click="showSort()">
                    <img src="@/assets/image/sort.png" class="w40h40"  alt="">
                </div>
            </div>
            <div class="plate_main">
                <van-list
                v-model="loadding"
                :finished="noContent"
                finished-text="没有更多了"
                @load="loadMore()"
                >
                    <div class="store" v-for="(item,index) in list" :key="index" @click="showDetail()">
                        <div class="store_header jub_jub_center">
                            <div class="flex_align ml30">
                                <img src="@/assets/image/store-line@2x.png" class="w38h38" alt="">
                                <span class="header_text color_33 fw500">{{item.storeName}}</span>
                            </div>
                            <div class="pr30">
                                <template v-if="item.finalStatus==0">
                                    <span class="header_text">未交付</span>
                                </template>
                                <template v-if="item.finalStatus==1">
                                    <div class="flex_align">
                                        <img src="@/assets/image/Bitmap@2x (1).png" class="w38h38" alt="">
                                        <span class="header_text color_33">已交付</span>
                                    </div>
                                </template>
                            </div>
                        </div>
                        <div class="store_bottom">
                            <div class="flex_align mb10">
                                <div class="store_left">
                                    登录账号：
                                </div>
                                <div>{{item.userName}}</div>
                            </div>
                            <div class="flex_align mb10">
                                <div class="store_left">
                                联系人：
                                </div>
                                <div>{{item.userName}}</div>
                            </div>
                            <div class="flex_align mb10">
                                <div class="store_left">
                                联系电话：
                                </div>
                                <div>{{item.linkPhone}}</div>
                            </div>
                            <div class="flex_align mb10">
                                <div class="store_left">
                                创建时间：
                                </div>
                                <div>{{item.createTime}}</div>
                            </div>
                        </div>
                    </div>
    
                </van-list>
            </div>
        </div>
        <div class="bottom none" id="bottom">
            <div class="add" @click="create()">创建商户账号</div>
        </div>
        <!-- 头部 -->
        <div class="w_100 model"  v-if="show_sort" @click="show_sort=false"></div>
        <div class="modelTop" :class="{'top100':!show_sort}">
            <div class="pb60 ">
                    <div class="sort_title">创建时间</div>
                    <div class="flex pl30 ">
                        <template v-if="timeSelect==1">
                            <div class="popItem mr25 "  @click="clicktimes(1)" :style="{backgroundImage:`url(${img})`}">全部</div>
                            <div class="popItem pop" @click="clicktimes(2)">其他时间</div>
                        </template>
                       <template v-if="timeSelect==2">
                            <div class="popItem mr25 pop"  @click="clicktimes(1)">全部</div>
                            <div class="popItem " @click="clicktimes(2)"  :style="{backgroundImage:`url(${img})`}">其他时间</div>
                        </template>
                    </div>
                    <div class="pt50 pb40 juc_colum ft28" v-if="timeSelect==2">
                        <div class="flex_align">
                            <div class="timeSelect" @click="showTimePick(1)"  :class="{'slectBule':startTime!='开始时间'}">
                                <span v-if="startTime!='开始时间'">{{startTime | formatDate}}</span>
                                <span v-if="startTime=='开始时间'">开始时间</span>
                            </div>
                            <div class="pl30 pr30">至</div>
                            <div class="timeSelect"  @click="showTimePick(2)" :class="{'slectBule':endTime!='结束时间'}">
                                <span v-if="endTime!='结束时间'">{{endTime | formatDate}}</span>
                                <span v-if="endTime=='结束时间'">结束时间</span>
                            </div>
                        </div>
                         <!-- <div class="flex_align">
                             <van-datetime-picker :item-height='22' :visible-item-count="3"  v-model="startTime" :min-date="minDate" :max-date="statMax" type="date" :show-toolbar="false" />
                            <div class="pl30 pr30 color_white">至</div>
                            <van-datetime-picker :item-height='22' :visible-item-count="3" v-model="endTime" :min-date="endMin" :max-date="maxDate" type="date" :show-toolbar="false"   />
                        </div> -->
                    </div>
                    <div class="sort_title">状态</div>
                    <div class="flex pl30">
                        <template v-if="finalStatus==0">
                            <div class="popItem mr25 " @click="statusOp(0)" :style="{backgroundImage:`url(${img})`}">全部</div>
                            <div class="popItem pop mr25" @click="statusOp(1)">已交付</div>
                            <div class="popItem pop" @click="statusOp(2)">未交付</div>
                        </template>
                        <template v-if="finalStatus==1">
                            <div class="popItem mr25 pop" @click="statusOp(0)" >全部</div>
                            <div class="popItem  mr25" @click="statusOp(1)" :style="{backgroundImage:`url(${img})`}">已交付</div>
                            <div class="popItem pop" @click="statusOp(2)">未交付</div>
                        </template>
                        <template v-if="finalStatus==2">
                            <div class="popItem mr25 pop" @click="statusOp(0)" >全部</div>
                            <div class="popItem pop mr25" @click="statusOp(1)">已交付</div>
                            <div class="popItem " @click="statusOp(2)" :style="{backgroundImage:`url(${img})`}">未交付</div>
                        </template>
                    </div>
                    <div class="sort_title">所属区域</div>
                    <div class="flex pl30">
                        <template v-if="cityType==0">
                            <div class="popItem mr25 " @click="cityOp(0)" :style="{backgroundImage:`url(${img})`}">全部</div>
                            <div class="popItem pop mr25" @click="cityOp(1)">市区</div>
                            <div class="popItem pop" @click="cityOp(2)">县域</div>
                        </template>
                        <template v-if="cityType==1">
                            <div class="popItem mr25 pop" @click="cityOp(0)" >全部</div>
                            <div class="popItem  mr25" @click="cityOp(1)" :style="{backgroundImage:`url(${img})`}">市区</div>
                            <div class="popItem pop" @click="cityOp(2)">县域</div>
                        </template>
                        <template v-if="cityType==2">
                            <div class="popItem mr25 pop" @click="cityOp(0)" >全部</div>
                            <div class="popItem pop mr25" @click="cityOp(1)" >市区</div>
                            <div class="popItem " @click="cityOp(2)" :style="{backgroundImage:`url(${img})`}">县域</div>
                        </template>
                    </div>
               </div>
               <div class="pop_bottom flex">
                   <div class="pop_item"  @click="plateCancel()">重置</div>
                   <div class="pop_item pop_blue"  @click="indeed()">确定</div>
               </div>
        </div>
        <!-- 底部 -->
        <van-popup v-model="showTime"  position="bottom">
            <template v-if="timeType==1">
                <van-datetime-picker v-model="startTime" :min-date="minDate" :max-date="statMax" type="date" :show-toolbar="false" />
            </template>
           <template v-if="timeType==2">
                <van-datetime-picker v-model="endTime" :min-date="endMin" :max-date="maxDate" type="date" :show-toolbar="false"   />
            </template>

        </van-popup> 
	</div>
</template>

<script>
import { formatDate } from '@/assets/js/date.js'
import bg from '@/assets/image/actPop.png'
import Vue from 'vue'
import { Toast,List,DatetimePicker } from 'vant'
Vue.use(List)
Vue.use(Toast)
Vue.use(DatetimePicker)

export default {
		name: 'mains',
        filters: {
        formatDate(time){
            var date = new Date(time)
            return formatDate(date)
            }
        },
		data () {
			return {
                fullHeight: document.documentElement.clientHeight,
                header_index:1,
                show_sort:false,
                list:[
                ],
                timeSelect:1, //时间选择
                img:bg,
                startTime:'开始时间',
                endTime:'结束时间',
                showTime:false,   //时间选择器的显示与隐藏
                timeType:1,
                minDate: new Date('2000-1-1'),
                maxDate: new Date(),
                statMax:new Date(),
                endMin:new Date('2000-1-1'),
                finalStatus:0,
                cityType:0,
                selectInput:'',
                page:1,
                pageSize:10,
                toast:'',
                total:0,
                loadding:false,
                noContent:false
			}
        },
           
		created(){
		},
		mounted(){
            this.pageGet()
		},
		methods:{
            indeed(){
                this.show_sort = false
                this.search()
            },
            search(){
               this.page=1
                this.pageGet()
            },
            loadMore(){
                this.page+=1
                this.pageGet()
            },
            showSort(){
                this.show_sort=!this.show_sort
            },
			headerOp(id){
                this.noContent = false
                window.scrollTo(0,0)
                if (id==this.header_index) {
                    return false
                }
                this.header_index = id
                this.page = 1
                this.pageGet()
            },
            showDetail(){
                this.$router.push({name:'detail',params:{type:this.header_index}})
            },
            create(){
                this.$router.push({name:'create',params:{type:this.header_index}})
            },
            pageGet(){               
                if (this.page==1) {
                    this.toast = Toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                    duration:0
                })
                }
                 this.loadding = true
                let data = {}
                data.selectInput = this.selectInput?this.selectInput:null
				data.startTime = this.startTime!='开始时间'?formatDate(this.startTime):null
                data.endTime = this.endTime!='结束时间'?formatDate(this.endTime):null
                if (this.finalStatus!=0){
                    data.finalStatus = this.finalStatus==2?0:1
                }
                if (this.cityType!=0) {
                    data.cityType = this.cityType
                }
                data.page = this.page
                data.pageSize = this.pageSize
                data.merchantType = this.header_index
                this.$utill.api.searchList(data).then(res => {
                    if (this.page==1) {
                        this.toast.clear()
                    }
                    this.total = res.data.total
                    
                    if (this.page==1) {
                        this.list = res.data.results
                    } else {
                        for (let i in res.data.results){
                            this.list.push(res.data.results[i])
                        }   
                    }
                    if (this.total<=this.page*this.pageSize) {
                        this.noContent = true
                    }

                    this.loadding = false
                     document.getElementById('bottom').classList.remove('none')
				}).catch(res => {
                     document.getElementById('bottom').classList.remove('none')
                    if (this.page==1) {
                        this.toast.clear()
                     }
                    this.loadding = false
                    this.$utill.common.commonError(res)
				})
            },
            //选择时间
            clicktimes(type){
                if (this.timeSelect!=type) {
                    this.timeSelect = type
                }
                console.log(type)
                // // if (this.timeSelect==2) {
                //     setTimeout(() => {
                //         document.getElementsByClassName('van-datetime-picker')['0'].style.width='3rem'
                //         document.getElementsByClassName('van-datetime-picker')['1'].style.width='3rem'
                //     },100)
                // // }
                    this.startTime = '开始时间'
                    this.endTime = '结束时间'
            },
            //日期选择器的显示
            showTimePick(id){
                this.showTime = !this.showTime
                this.timeType = id
            },
            //状态选择
            statusOp(id){
                if (this.finalStatus!=id) {
                    this.finalStatus = id
                }
            },
            cityOp(id){
                if (this.cityType!=id) {
                    this.cityType = id
                }
            },
            plateCancel(){
                this.finalStatus=0
                this.cityType=0
                this.timeType=1
                this.startTime='开始时间'
                this.endTime='结束时间'
                this.showTime = false
                this.show_sort = false
                this.page=1
                this.pageGet()
            }
		},
		watch:{
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->