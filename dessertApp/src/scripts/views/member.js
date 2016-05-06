var tplMember=require('../tpl/member.string');
SPA.defineView('member',{
	html:tplMember,
	plugins:['delegated'],
	bindActions:{
		'tap.back':function(){
			SPA.open('index');
			this.hide();
		}
	}
})