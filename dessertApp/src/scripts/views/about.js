var tplAbout = require('../tpl/about.string');
SPA.defineView('about',{
	html:tplAbout,
	plugins:['delegated'],

  bindActions:{
  	'tap.back':function(e,data){
      SPA.open('index');
      this.hide();
    }
  }

})