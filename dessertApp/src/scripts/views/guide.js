require("../lib/swiper-3.3.1.min.js");
var tplGuide=require("../tpl/guide.string");
SPA.defineView('guide', {
  html: tplGuide,
  plugins: ['delegated'],
  //点击跳到首页
  bindActions: {
    'goto.index': function () {
      SPA.open('index');
      
    }
  },
  //左右滑动
  bindEvents: {
    'beforeShow': function() {
      var mySwiper = new Swiper('#guide-swiper', {
        loop: false
      });
    }
  }
});