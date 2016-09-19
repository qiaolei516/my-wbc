!function(window , document , $ , undefined) {
	
	var Datecity , Datearea;
	
	$('#province').on('change' , function(){
		var val = this.value;
		Datecity = getcitychild(val , cityData3);
		
		incity(Datecity , 'city');
		$('#area').html('<option value="0">请选择</option>')
	});


	function incity(date , render){
		var arr = ['<option value="0">请选择</option>'] ;
		
		$.each(date , function(index, obj){
			
		arr.push('<option value=" ' + obj.value +' ">' + obj.text + '</option>');
			
			
		});
		$('#' + render).html(arr.join(''));
//		console.log(arr)
		
	}

	var getcitychild=function(val , pardate){

	 	var currchild = [];

	 	$.each(pardate , function(index , obj) {

	 		if(obj.value == val){
	 		   currchild = obj.children;

	 		    return false;
	 		}
	  });

	 	return currchild;

	 };

	
	incity(cityData3 , 'province');
}(window , document ,jQuery);
