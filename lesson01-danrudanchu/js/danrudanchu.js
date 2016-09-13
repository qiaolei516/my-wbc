!function(window , document , $ , undefined) {
	
	var $total = $('.total'),
	    $ul = $total.find('ul.picture'),
	    $piclis =$total.find('.picture li'),
	    $contlis = $total.find('.content li') ,
	    $spans =  $total.find('span');
	
	$piclis.each(function(i) {
		$(this).attr('index' ,i);
	});
	
	$contlis.on('click' ,function() {
		var $this = $(this),
		    $newpiclis = $this.index(),
		    $oldpiclis = $this.siblings('.on').index();
//		    console.log($newpiclis)
            $this.addClass('on').siblings('.on').removeClass('on');
            
            $piclis.eq($oldpiclis).before($piclis.eq($newpiclis));
            
            $total.find('.picture > li').each(function(i) {
                $(this).css('z-index' , $piclis.length - i -1);
            });
            
            $piclis.eq($oldpiclis).show().fadeOut();
            
           $total.find('.picture').find('li[index = ' + $newpiclis +']').hide().fadeIn();
		
		
	})
	
	
	$spans.on('click' , function() {
		var $this = $(this) ,
		    width = $piclis.width(),
		    len = $piclis.length;
		    $ul.width(width*len);
		
		if($this.hasClass('next')) {
		
	        $ul.animate({left:-width} ,500 ,function() {
	      	$ul.append($ul.find('li:first'));
	      	$ul.css('left', 0);   
	      	
	      })/*else {
	      	
	      }*/
	      
			
			
		}
		
	})
	
	
	
	
	
	
}(window , document , jQuery)
