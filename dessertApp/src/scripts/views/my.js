var tplMy = require('../tpl/my.string');
SPA.defineView('my',{
	html:tplMy,
	plugins:['delegated'],

  bindActions:{
  	'tap.back':function(e,data){  
      SPA.open('index');
      this.hide();
      
    },
    'tap.login':function(e,data){
    	SPA.show('login');
      
    }
  }

})