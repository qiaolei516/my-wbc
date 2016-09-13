$(document).ready(function() {
	
	var $title = $('.title'),
	    $lis = $title.find('ul li'),
	    $ps = $title.find('p');
	    
	$title.on('click' , function() {
		
		var $this = $(this) ;
			    
		 $this.find('p').addClass('on')
		      .end()
		      .find('ul').slideToggle() ;
		 $this.siblings().find('p').removeClass('on')
		      .end()
		      .find('ul').slideUp();
		     
	})
	
});
