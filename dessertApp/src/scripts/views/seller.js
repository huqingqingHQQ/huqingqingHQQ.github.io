var tplSeller = require('../tpl/seller.string');
SPA.defineView('seller',{
	html:tplSeller,
	plugins:['delegated'],

  bindActions:{
  	'tap.back':function(e,data){
      SPA.open('index');
      this.hide();
    }
  },
  bindEvents: {
    'beforeShow': function() {
      var mySwiper = new Swiper('#seller-swiper', {
      	pagination : '.swiper-pagination',
        loop:true,
        autoplay:2500
      });
    }
  }

})