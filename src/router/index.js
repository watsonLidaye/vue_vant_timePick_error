
const routes = [
	
	{
	path: '/',
	name: 'index',
	component: (resolve) => require(['@/components/pages/index/index'], resolve),
	meta: {
		title:'登录'
		},
	},
	{
		path: '/error',
		name: 'error',
		component: (resolve) => require(['@/components/pages/index/error'], resolve),
		meta: {
			title:'错误'
			},
	},
	{
		path: '/store',
		name: 'store',
		component: (resolve) => require(['@/components/pages/main/main'], resolve),
		meta: {
			title:'商户列表'
			},
	},
	{
		path: '/detail',
		name: 'detail',
		component: (resolve) => require(['@/components/pages/main/detail'], resolve),
		meta: {
			title:'商户详情'
			},
	},
	{
		path: '/create',
		name: 'create',
		component: (resolve) => require(['@/components/pages/create/create'], resolve),
		meta: {
			title:'创建商户账号'
			},
	},
	{
		path: '/result',
		name: 'result',
		component: (resolve) => require(['@/components/pages/create/result'], resolve),
		meta: {
			title:'',
			},
	}
]

export default routes