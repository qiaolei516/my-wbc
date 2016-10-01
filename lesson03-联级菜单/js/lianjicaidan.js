!function(window , document , $ , undefined) {
	
	var Datecity;
	var Datearea;
	
		$('#province').on('change' , function(){
		var val = this.value;
		// console.log( val);
		Datecity = getcitychild(val , cityData3);
		// console.log(Datecity);
		incity(Datecity,'city');
		$('#area').html('<option value="0">请选择</option>')
	});

		$('#city').on('change' , function() {
			var val = this.value;
			Datearea = getcitychild(val , Datecity);
			incity( Datearea , 'area');

		});


	function incity(date , render){
		var arr = ['<option value="0">请选择</option>'] ;
		
		$.each(date , function(index, obj){
			//console.log(obj)
		arr.push('<option value="' , obj.value ,'">' , obj.text , '</option>');
			
			
		});
		$('#' + render).html(arr.join(''));
//		console.log(arr)
		
	}

	var getcitychild=function(val , pardate){
	 	var currchild = [];
	 	// console.log(val)
	 	
	 	$.each(pardate, function(i , obj) {
	 		// console.log(val)
	 		// console.log(obj.value)
	 		
	 		if (obj.value == val){
	 			
	 		   currchild = obj.children;
	 		   return false;
	 		   	 		    
	 		}
	 	
	  });

	 	return currchild;

	 };
	

	
	incity(cityData3 , 'province');
}(window , document ,jQuery);
