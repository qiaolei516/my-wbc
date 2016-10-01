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

//
// $(document).ready(function() {
//
// 	$('input').on('click' , function () {
// 		var username = {
// 			name:"lisi" ,
// 			age:20,
// 			gender:'男'
// 		};
//
// 		$.get('yinyong/yinyong.php' , username ,function(date) {
// 			$('h1').html(date);
// 		})
//
//
// 	});
//
// });


   $(document).ready(function() {

      $('#my-btn').on('click' , function () {
		  var url = 'yinyong/yinyong2.php',
			  name =$('#uname').val(),
			  age = $('#uage').val(),
			  param = {
				  username: name,
				  age: age
			  };

		  $.get(url ,param , function (date) {

			  $('.infor').html('你的姓名: ' + date.name + ' 你的年龄:' + date.age);

		  	// $('.infor').html('<span style="color:red">' + date + '</span>');

		  } ,'json')



	  })





   });


