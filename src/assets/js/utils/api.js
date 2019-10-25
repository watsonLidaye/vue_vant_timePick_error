//  接口服务
// var store = require('@/vuex/store').default.state
// var config = require('../config').default
import config from '../config'
import store from '@/vuex/store'
import common from '../common'
import axios from 'axios'


//  域名
var https = 'debug'
var url = (function() {
	let urls =''
	if (location.href.indexOf('test')!=-1||location.href.indexOf('localhost')!=-1||location.href.indexOf('127.0.0.1')!=-1) {
		urls = 'http://test.agent.txlinker.com/'
	} else {
		urls = 'http://agent.txlinker.com/'
	}
	return urls
})()

var api = {
	//登录
	'pwd':'app/h5/login/pwd',
	//商户列表
	'searchList':'app/h5/merchant/searchList',
	//行业列表
	'industryList':'app/h5/merchant/industryList',
	//区县、街道名称
	'areaList':'app/h5/merchant/areaList',
	//支行列表
	'bankList':'app/h5/merchant/bankList'
}



function pwd(data){
	let programPath = url+api.pwd
	return new Promise((resolve, reject) => {
		axios.post(programPath,data).then(function (response) {
			if (response.data.code!=0){
				reject(response.data)
				return false
			} 
			resolve(response.data)
		  }).catch(function (res) {
			reject(res.data)
		  })
		})
}
function searchList(data){
	axios.defaults.headers.token = Lockr.get('token')
	let programPath = url+api.searchList
	return new Promise((resolve, reject) => {
		axios.post(programPath,data).then(function (response) {
			if (response.data.code!=0){
				reject(response.data)
				return false
			} 
			resolve(response.data)
		  }).catch(function (res) {
			reject(res.data)
		  })
		})
}
function bankList(data){
	axios.defaults.headers.token = Lockr.get('token')
	let programPath = url+api.bankList
	return new Promise((resolve, reject) => {
		axios.get(programPath,{
			params:	data
		  }).then(function (response) {
			if (response.data.code!=0){
				reject(response.data)
				return false
			}
			resolve(response.data)
		  }).catch(function (res) {
			reject(res.data)
		  })
		})
}
function areaList(data){
	axios.defaults.headers.token = Lockr.get('token')
	let programPath = url+api.areaList
	return new Promise((resolve, reject) => {
		axios.get(programPath,{
			params:	data
		  }).then(function (response) {
			if (response.data.code!=0){
				reject(response.data)
				return false
			}
			resolve(response.data)
		  }).catch(function (res) {
			reject(res.data)
		  })
		})
}
function industryList(data){
	axios.defaults.headers.token = Lockr.get('token')
	let programPath = url+api.industryList
	return new Promise((resolve, reject) => {
		axios.get(programPath,{
			params:	data
		  }).then(function (response) {
			if (response.data.code!=0){
				reject(response.data)
				return false
			}
			resolve(response.data)
		  }).catch(function (res) {
			reject(res.data)
		  })
		})
}

export default {
	url,
	api,
	pwd,
	searchList,
	bankList,
	areaList,
	industryList
}