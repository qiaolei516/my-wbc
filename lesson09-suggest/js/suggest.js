!function(window , document , $ , undefined) {
	
	var arr = [
	    
	    {name: '中国新歌声'},								
	    {name: '中国联通'},
	    {name: '中国电信'},
	    {name: '中国银行'},
	    {name: '中国式关系'},
	    {name: '中国移动营业厅'},
	    {name: '中国人事考试网'},
	    {name: '中国建设银行'}
	]
	
	
	var $textWp = $('.text-wp'),
	    $input = $textWp .find('input'),
	    $ul = $textWp.find('ul'),
	    $lis = $textWp.find('ul > li');
	 $input.on('keyup' , function(e){
//	 	console.log(e)
	 	var val = this.value,
	 	     index,
	 	     len,
	 	    keycode = e.keyCode;
	 	  
	 	
	 	if(keycode == 38 || keycode == 40){
	 		index = $ul.find('li.on').index();
	 		len = $ul.find('li').length;
	 		
	 		//	 		console.log(index)
	 		if(index < 0){
	 			
	 			index =0 ;
	 		}else{
	 			keycode == 38;
	 			index++;
	 		}
	 		
	 		if(index >= len){
	 			index =0;
	 		}
	 		
//	 	TODO:上箭头
	 		
	 		
	 		
	 		$ul 
	 		    .find('li').eq(index).addClass('on')
	 		    .siblings('.on')
	 		    .removeClass('on');
	 		
	 		
	 		
	 		return;
	 	}

//        搜索建议为空时隐藏,有值时显示


	 	if(val.length ==0){
	 		$ul.hide();
	 	}else{
	 		$ul.html(suggest(arr ,val));
	 		$ul.show();
	 	}
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 	
	 });
	
	
	
	
	
	
//	$textWp.find('ul').html(suggest(arr));
	
	
	
	function suggest(returnparen ,key) {
		
		var arrow = [];
      $.each(arr, function(index , obj) {
      	
      	if(obj.name.indexOf(key) > -1){
      		console.log(key)
      		arrow.push('<li>' + obj.name + '</li>')
      	}
    	
    	
      }); 
      
       return arrow.join('');
       
   
//    $textWp.find($('ul')).html( arrow.join(''))

		
	}
	
	
	suggest();
	
	
	
}(window , document , jQuery)
