var tplData=require('../tpl/data.string');
SPA.defineView('data',{
	html:tplData,
	plugins:['delegated'],
	bindActions:{
		'tap.back':function(e,data){
			this.hide();
		}
	}
})