var tplIndex = require('../tpl/index.string');
var _=SPA.util;
SPA.defineView('index',{
	html:tplIndex,
	plugins:['delegated'],

  bindActions:{
  	'tap.home':function(e,data){
      SPA.show('home')
  	},
    'tap.goods':function(e,data){
      SPA.show('goods')
    },
    'tap.city':function(e,data){
      var el=document.body;
      SPA.show('position',{
        ani:{
          name:'popup',
          width:$(el).width(),
          height:$(el).height(),
          duration:200,
          autoDirection:false,
          direction:'right'
        }
      },el);
    },
    'tap.my':function(e,data){
      if(_.storage('isLogin')){
        SPA.show('mytwo');
         this.hide();
      }else{
        SPA.show('my');
         this.hide();
      }
      
    },
    'tap.Store':function(e,data){
       SPA.show('Store')
    },
    'tap.seller':function(e,data){
      SPA.show('seller')
    },
    'tap.member':function(e,data){
      SPA.show('member')
    },
    'tap.order':function(e,data){
      SPA.show('order')
    },
    'tap.opinion':function(e,data){
      SPA.show('opinion')
    },
    'tap.about':function(e,data){
      SPA.show('about')
    }

  }

})