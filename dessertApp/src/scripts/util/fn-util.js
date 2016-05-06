var _fnUtil = {

  pullToRefresh: function(opt) {
    var that = this;
    var myScroll = opt.objScroll || {};
    var ptrHeight = opt.ptrHeight || 35;
    var loaderImg = opt.loaderImg || '/dessertApp/images/gif.gif';
    var arrowImg = opt.arrowImg || '/dessertApp/images/jian.jpg';
    var head = opt.head || $('.head img');
    var foot = opt.foot || $('.foot img');
    var view = opt.view || {};
    myScroll.scrollBy(0, -ptrHeight);

    var topImgHasClass = head.hasClass('up');
    var bottomImgHasClass = head.hasClass('down');

    myScroll.on('scroll', function() {
      var y = this.y,
        maxY = this.maxScrollY - y;
      if (y >= 0) {
        !topImgHasClass && head.addClass('up');
        $('.head span').html('放手是一种态度');
        return '';
      }
      if (maxY >= 0) {
        !bottomImgHasClass && foot.addClass('down');
         $('.head span').html('下拉刷新');
        return '';
      }
    });

    myScroll.on('scrollEnd', function() {
      if (this.y >= -ptrHeight && this.y < 0) {
        myScroll.scrollTo(0, -ptrHeight);
        head.removeClass('up');
      } else if (this.y >= 0) {
        head.attr('src', loaderImg);
        $('.head span').html('正在加载');
        //上拉
            setTimeout(function () {
                myScroll.scrollTo(0, -ptrHeight);
                head.removeClass('up');
                head.attr('src', '/dessertApp/images/jian.jpg');
                
            }, 1000);
      }

      

    });
  }
}

module.exports = _fnUtil;
