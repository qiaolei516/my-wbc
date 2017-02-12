$(document).ready(function() {
	
	var $roll = $('.roll') ,
	    $ul = $roll.find('ul'),
	    $lis = $roll.find('ul li') ;
	    $ul.append($ul.find('li').clone()) ;
	var time,
	    width = $lis.width();
	    len = $lis.length;
	    $ul.width(width * len + len * 10 );
	    
	    
	  function gundong() {
	  	  time = setInterval(function() {
		
		    $ul.animate({marginLeft : -width*len} , 500 , function() {
			    $ul.append($ul.find('li:first'))
                   .css('margin-left' , 0) ;
                   
			       
			
		    })
		
	     } , 1000);
	  	
	  } ;
	     gundong() ;
	    
    $roll.on('mouseover' , function() {
    	
    	clearInterval(time);
    	
    })
         .on('mouseout' , function() {
         	 gundong();
         	
         }) ;
    
    
    
    
});
