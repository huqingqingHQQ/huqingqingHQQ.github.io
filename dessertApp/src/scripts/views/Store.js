var tplStore = require('../tpl/Store.string');
SPA.defineView('Store',{
	html:tplStore,
	plugins:['delegated'],

  bindActions:{
  	'tap.back':function(e,data){
      SPA.open('index');
      this.hide();
    }
  }

})