var tplMytwo = require('../tpl/mytwo.string');
SPA.defineView('mytwo',{
	html:tplMytwo,
	plugins:['delegated'],

  bindActions:{
  	'tap.back':function(e,data){
         SPA.open('index');

  	},
  	'tap.data':function(e,data){
  		SPA.show('data');
  	}
  }

})