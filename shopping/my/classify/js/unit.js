/**
 * Created by 乔雷 on 2016/9/28.
 */

// (method(请求方法) , url , data(参数) , success返回值 , error请求失败 ， dataType(json))

!function (window , document , $ ,undefined) {

   function Unit() {   }

    Unit.prototype ={
          ajax:function (param) {
              setTimeout(function () {
                  layer.msg('加载中',  { time :0 ,icon: 16 ,  shade: [0.3,'#000']});
              } , 0);
          $.ajax({
                method:param.method ||'get',
                url:param.url,
                data:param.data || {},
                dataType:param.dataType ||'json',
                success:function(response){
                    layer.closeAll('');
                    param.success(response);
              },
              error:function (response) {
                  layer.closeAll('');
                  param.error && param.error(response);
              }

          });

          }
    };


     window.Unit = new Unit();




}(window , document , jQuery);
