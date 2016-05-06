var tplMenu=require('../tpl/menu.string');
SPA.defineView('menu',{
	html:tplMenu,
	plugins:['delegated'],
	bindActions:{
	  'switch.li':function(e,data){
	  	// console.log(1);
	  	var $el = $(e.el);
      $el.addClass('active').siblings().removeClass('active');
	  }
	  
	},
	bindEvents:{
		'beforeShow':function(){
			var self=this;
			var root=this.root;
			// console.log(root);
			var zIndex=$(root).css('z-index');
			var $mask=$('body .mask');
			$mask.css('z-index',zIndex-1);
			$mask.on('tap', function () {
		        self.hide();
		        $(this).remove();
		        // console.log(this);
	      });

		}
	}
})