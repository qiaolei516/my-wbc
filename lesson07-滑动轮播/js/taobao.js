$(document).ready(function() {
    var $picture = $('.picture'),
        $ul = $picture.find('ul'),
        $ol = $picture.find('ol'),
        $spans = $picture.find('span'),
        $ullis = $picture.find('ul li'),
        $ollis = $picture.find('ol li');
        width = $ullis.width();
        len = $ullis.length;
     	$ul.width(width * len);
      
     $ollis.on('click' , function() {
     	var $this = $(this),
     	    
     	    index = $this.index();
     	    
     	$this.addClass('on').siblings('.on').removeClass('on');
     	$ul.animate({'margin-left' : -width * index + 'px'}) , 500 , function(){
     		
     	}
     	
     })
     
     $spans.on('click' , function() {
     	var $this = $(this);
     	if($this.hasClass('next')) {
     		$ul.stop().animate({'margin-left' : -width +'px'} ,500 , function() {
     		$ul.append($ul.find('li').eq(0))
     		   .css('margin-left' , 0);
     		   
     			
     		})
     	} else { $ul.css('margin-left' , -width + 'px')
  		            .prepend($ul.find('li:last'));
   		         $ul.stop().animate({'margin-left' : 0} , 500) ;
   		
  	 }
   	
     	
     })
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
})
