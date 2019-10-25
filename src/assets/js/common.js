
import routes from '../../router/index'
function cloneJson(obj) {
	return JSON.parse(JSON.stringify(obj))
}

function commonError (res){
	console.log(res)
	if(res.code=='30000'){
		router.replace('/')
		Lockr.set('token','')
		console.log(bus)
		bus.$Dialog.alert({
			title: '温馨提示',
			message: '请重新登录'
		  }).then(() => {
			// on close
		  });
	}
}

export default {
	cloneJson,
	commonError
}