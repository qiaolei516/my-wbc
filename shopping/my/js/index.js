!function (window , document , $ , undefined) {

    var Datecity;
    var Datearea;

    var innit = function () {
        onAllEvent();


    };



    // 绑事件
    var onAllEvent = function(){

        $('#addAddress').on('click' , onAddAddress);
        $('#zhuce').on('click' , onZhucaBtn);
        $('#zhuceSave').on('click' , onZhuceSaveBtn);



    };

  var  onZhuceSaveBtn =function () {
       var url = '../..	/api/shopping_user_add.php';
           data ={
               username:$('#username').val(),
               password:$('#password').val(),
               email:$('#email').val(),
               mobile:$('#mobile').val()
           };
           $.get(url , data , function (response) {





           } , 'json')

  };




    var onZhucaBtn =function () {
        $('#biaodan').modal('show');
    };


    var onAddAddress = function () {


        $('#tanck').modal('show');
        getAddress();

    };

    //收货地址|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||、
    var getAddress = function () {

        var url = '../../api/shopping_address_list.php';

        $.get(url , function () {



        })

    };

    $('#prov').on('change' , function(){
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



    incity(cityData3 , 'prov');
    //收货地址|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||























    innit();




















}(window , document , jQuery);