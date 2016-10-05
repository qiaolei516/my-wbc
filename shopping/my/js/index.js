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


    // 注册表单

  var  onZhuceSaveBtn =function () {





       var url = '../..	/api/shopping_user_add.php';
           data ={
               username:$('#username').val(),
               password:$('#password').val(),
               email:$('#email').val(),
               mobile:$('#mobile').val()
           };

      //表单验证
      if($.trim(data.username).length==0){
          alert('用户名不能为空！！');
          return;
      }

      if($.trim(data.password).length==0){
          alert('密码不能为空！！');
          return;
      }
      if($.trim(data.email).length==0){
          alert('email不能为空！！');
          return;
      }
      if($.trim(data.mobile).length==0){
          alert('手机号不能为空！！');
          return;
      }

      setTimeout(function () {
          layer.msg('加载中',  { time :0 ,icon: 16 ,  shade: [0.3,'#000']});
      } , 0);


       $.get(url , data , function (response) {
           if(response.success){
               layer.closeAll();
               $('#biaodan').modal('hide');
               layer.msg('注册成功!', {offset: 0, shift: 6});
           }else{
               layer.msg('注册失败!', {offset: 0, shift: 6});
           }




       } , 'json')

  };


// 注册表单显示

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