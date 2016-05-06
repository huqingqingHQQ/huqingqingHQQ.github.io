var tplLogin=require('../tpl/login.string');
var _=SPA.util;
SPA.defineView('login',{
	html:tplLogin,
	plugins:['delegated'],
	bindActions:{
		'tap.hide':function(){	
			SPA.show('my');
		},
		'tap.regist':function(){
			SPA.show('register');
		},
		'tap.storage':function(){
			_.storage('isLogin',true);
			SPA.show('mytwo');
		}
	}

})