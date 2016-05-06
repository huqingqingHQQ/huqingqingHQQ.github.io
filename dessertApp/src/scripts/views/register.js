var tplRegister=require('../tpl/register.string');
SPA.defineView('register',{
	html:tplRegister,
	plugins:['delegated'],
	bindActions:{
		'tap.hide':function(){	
			SPA.show('my');
			// this.hide();

		},
		'tap.login':function(){
			this.hide();
			SPA.show('login');
			
		}
	},
	bindEvents:{
		'beforeShow':function(){
			// $('.checked').on('tap',{

			// })

		}
	}
})