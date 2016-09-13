!function(window , document , $ , unsefined) {
	
	var arr =[
	       {name : '中国新歌声'} ,
	       
	       {name : '中秋节放假安排2016'} ,
	
	       {name : '中国移动'} ,
	
	       {name : '中国联通'} ,
	       
	       {name : '中国人民银行'} 
	
	];
	
	var $wp= $('.wp'),
	    $ul = $wp.find('ul'),
	    $input = $wp.find('input'),
		$lis = $wp.find('ul li');
		
		
	$input.on('keyup' , function(e) {
		var val = this.value,
		    kcode = e.keyCode;
		    lem = $ul.find('li').length;
		    index = $ul.find('li.on').index();
		   if(kcode ==38 || kcode ==40){
		   	
		   	if(index < 0){
		   	   index = 0 ;
		   		
		   	}else{
		   		index++ ;
		   	}
		   	
		   	if(index >= lem){
		   		index =0 ;
		   	}
		   	
//		   	if(kcode ==38){
//		   	  if(index < 0){
//		   	    index = lem-1 ;
//		   		
//		     }else{
//		   		index-- ;
//		   	 }
//		     if(index < 0){
//		   		index =lem-1;
//		   	}
//		   	
//		   	} TODO 问题
		   	
		   	
		   	$ul.find('li').eq(index).addClass('on')
		   	   .siblings('.on')
		   	   .removeClass('on');
		   	  
		   	    return;
		   }

		if(val =="") {
			$ul.hide();
		}else {
			$ul.html(suggest(arr , val));
			
			$ul.show();
		}
	})
		
	
	function suggest(arrow , key) {
		 var li = [],
		     name,
		     len = arrow.length;
		  
		for(var i = 0 ; i<len; i++){
			
			 Name = arrow[i].name ;
//			console.log(Name)                            name= 中国新歌声   中秋节放假安排2016   中国移动        中国人民银行                        
			if(Name.indexOf(key) > -1) {
				 console.log(key)                          
				li.push('<li>' + Name  + '</li>');
			}
		}
		
		return li.join('');
	}
	
	suggest(arr);
	
}(window , document , jQuery);
