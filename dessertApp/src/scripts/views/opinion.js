var tplOpinion = require('../tpl/opinion.string');
SPA.defineView('opinion',{
	html:tplOpinion,
	plugins:['delegated',{
    name:'avalon',
    options:function(vm){
      vm.datalist = '200',
      vm.checkLen =  function(obj){
        var maxChars = 200;//最多字符数 
        var curr;
        if (obj.value.length > maxChars){
          curr = 0;
        } else{
          curr = maxChars - obj.value.length;
          vm.datalist = curr;
        }
       
      }
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
      // 获得一个vm对象
      this.vm = this.getVM();		
  	}	
  }

})