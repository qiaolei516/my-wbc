//$(document).ready(function() {
//
//	$('button').on('click' , function () {
//		$('.wp').load('yinyong/yinyong.html');
//
//	});
//
//
//
//});

//
// $(document).ready(function() {
//
// 	$('button').on('click' , function () {
//
// 		var Date = {
// 			user:'zhangsan',
// 			age:20
//
// 		};
//
// 		$.get('yinyong/yinyiong.json' ,Date , function(date){
//
// 			$('.wp').html(render(date));
//
// 		})
//
// 	});
//
//     function render(content){
//     	var arr = [] ,
//     	    len = content.length;
//
//     	   arr.push('<select>');
//
//     	for(var i = 0 ; i<len ; i++){
//
//     		arr.push('<option>'+ content[i].name +'</option>');
//     		console.log(arr)
//     	}
//
//     	arr.push('</select>');
//     	return arr.join('');
//     }
//
// });

// $(document).ready(function() {
//
// 	$('.wp').on('click' , function () {
// 		var username = {
// 			name:"lisi" ,
// 			age:20,
// 			gender:'男'
// 		};
//
// 		$.get('ajax-yinyong/ajax-yinyong.html' , username ,function(a) {
// 			$('.wp').html(a);
// 		})
//
//
// 	});
//
// });

!function (window , document , $ , undefined) {

    $('#my-btn').on('click' , function(){
    	
    	var url = 'http://localhost:63342/wbc/lesson05ajax/yinyong/yinyong2.php?callback=?',
    	    name = $('#uname').val(),
    	    age = $('#uage').val(),
    	    param = {
    	    	username : name,
    	    	age : age
    	    	
    	    	
    	    };
    	$.get(url , param , function(date){
    		
    		$('.infor').html('你的名字:' + date.name + ' 你的年龄:' + date.age);
    		
    		
    	} , 'json');

    })



}(window , document ,jQuery);















