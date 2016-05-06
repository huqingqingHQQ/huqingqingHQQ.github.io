var tplOrder = require('../tpl/order.string');
SPA.defineView('order',{
	html:tplOrder,
	plugins:['delegated'],

  bindActions:{
  	'tap.back':function(e,data){
      SPA.open('index');
      this.hide();
    }
  }

})