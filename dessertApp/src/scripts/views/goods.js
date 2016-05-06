var tplGoods = require('../tpl/goods.string');
var fnUtil = require('../util/fn-util.js');
SPA.defineView('goods',{
	html:tplGoods,
	plugins: ['delegated', {
    name: 'avalon',
    options: function (vm) {
      vm.choice=[];
      vm.hot=[];
      vm.fine=[];
      goodsSwiper:null;
    }
  }],

  bindActions:{
  	'tap.back':function(e,data){
      SPA.open('index');
      this.hide();
    },
    'switch.list': function(e, data) {
      var $el = $(e.el);
      this.goodsSwiper.slideTo($(e.el).index());
      $el.addClass('active').siblings().removeClass('active');
    },
    'tap.menu':function(e,data){
     var el=document.body;
     var mask = $('<div class="mask"></div>');
     $(el).append(mask);
     SPA.show('menu',{
      ani:{
        name:'popup',
        width:$(el).width(),
        height:90,
        duration:200,
        autoDirection:false,
        direction:'top'
      }
     },el)
    }
  },
  bindEvents:{
  	'beforeShow':function(){
      // 保存view对象
      var self = this;
      // 获得一个vm对象
      self.vm = self.getVM();
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
      $.ajax({
        url: '/dessertApp/mock/hot.json',
        success: function (res) {
          if (res.ret) {
            self.vm.hot = res.data;
          }
        },
        error: function (data) {
        }
      });
      $.ajax({
        url: '/dessertApp/mock/fine.json',
        success: function (res) {
          if (res.ret) {
            self.vm.fine = res.data;
          }
        },
        error: function (data) {
        }
      });

      // swiper
      self.goodsSwiper = new Swiper('#goods-swiper', {
        loop: false,
        onSlideChangeStart: function() {
          $('#listUl li').eq(self.goodsSwiper.activeIndex)
            .addClass('active').siblings().removeClass('active');
        }
      });
     
      // 上拉
      var liveScroll = new IScroll('.goodscroll', {
        probeType: 3,
        mouseWheel: true
      });
      fnUtil.pullToRefresh({
        objScroll: liveScroll,
        ptrHeight: 35,
        loaderImg: '/dessertApp/images/gif.gif',
        arrowImg: '/dessertApp/images/jian.jpg',
        head: $('.head img'),
        foot: $('.foot img'),
        view: self
      });
      // 上拉
      var liveScroll = new IScroll('.goodscroll2', {
        probeType: 3,
        mouseWheel: true
      });
      fnUtil.pullToRefresh({
        objScroll: liveScroll,
        ptrHeight: 35,
        loaderImg: '/dessertApp/images/gif.gif',
        arrowImg: '/dessertApp/images/jian.jpg',
        head: $('.head img'),
        foot: $('.foot img'),
        view: self
      });
      // // 上拉
      var liveScroll = new IScroll('.goodscroll3', {
        probeType: 3,
        mouseWheel: true
      });
      fnUtil.pullToRefresh({
        objScroll: liveScroll,
        ptrHeight: 35,
        loaderImg: '/dessertApp/images/gif.gif',
        arrowImg: '/dessertApp/images/jian.jpg',
        head: $('.head img'),
        foot: $('.foot img'),
        view: self
      });
     } 
  }    

})