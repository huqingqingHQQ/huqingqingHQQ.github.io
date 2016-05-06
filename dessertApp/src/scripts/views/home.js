require('../lib/swiper-3.3.1.min.js');
var tplHome = require('../tpl/home.string');

SPA.defineView('home',{
	html:tplHome,
	plugins: ['delegated', {
    name: 'avalon',
    options: function (vm) {
      vm.discount = [];
      vm.choice=[];
    }
  }],

  bindActions:{
  	'tap.back':function(e,data){
      SPA.open('index');
      this.hide();
    }
  },
  bindEvents:{
  	'beforeShow':function(){
      // 保存view对象
      var self = this;

      // 获得一个vm对象
      self.vm = self.getVM();

      $.ajax({
        url: '/dessertApp/mock/discount.json',
        success: function (res) {
          if (res.ret) {
            self.vm.discount = res.data;
          }
        },
        error: function (data) {
        }
      });
      $.ajax({
        url: '/dessertApp/mock/choice.json',
        success: function (res) {
          if (res.ret) {
            self.vm.choice = res.data;
          }
        },
        error: function (data) {
        }
      });


  	 var mySwiper = new Swiper('.swiper-container',{
    		pagination : '.swiper-pagination',
        loop:true,
        autoplay:2500
    		});

     //上拉

      }
  	}
})