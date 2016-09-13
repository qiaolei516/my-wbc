//$(document).ready(function() {
//	
//	$('.wp').on('click' , function () {
//		
//		$('.wp').load('ajax-yinyong/ajax-yinyong.html');
//		
//		
//	});
//	
//});


$(document).ready(function() {
	
	$('.wp').on('click' , function () {
		var username = {
			name:"lisi" ,
			age:20,
			gender:'男'
		};
		
		$.get('ajax-yinyong/ajax-yinyong.html' , username ,function(a) {
			$('.wp').html(a);
		})
		
		
	});
	
});
