var tplPosition=require('../tpl/position.string');
SPA.defineView('position',{
	html:tplPosition,
	plugins:['delegated'],
	bindActions:{
		'tap.hide':function(e,data){
			this.hide();
		},
		'tap.back':function(e,data){
			this.hide();
		}
	}
})