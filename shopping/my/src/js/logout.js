!function (window , document , $ , undefined) {
    var $lis = $('#navbar').find('ul li');
    var innit = function () {
       onEvent();
        goodLists(getCartNumber);


    };

    // 绑事件
    var onEvent = function () {
        $('#tuichu').on('click' , onTuichuBtn);
        $('#gList').on('click' , '.cart-btn' , onCartBtn);
        $('#onList').on('click',onTableShowClick);
        $lis.on('click' , onLisActive);
        $('#randerTableList').on('click' , '#goodsCart', onGoodsCart);

    };

    var onGoodsCart = function () {
       location.href='goodcart.html';

    };


  var onDelCart= function () {
      alert(33)

  };








    var onLisActive = function () {
        $(this).addClass('on').siblings().removeClass('on');
    };

    var onTableShowClick = function () {

        $('#onShowBtn').toggle();
    };


    // var onMyCartBtn=function (data) {
    //     var trs=[];
    //
    //     $.each(data,function (i,obj) {
    //         // console.log(obj.gid)
    //         trs.push(
    //             '<tr>',
    //                 '<td>',i+1,'</td>',
    //                 '<td>',obj.gid,'</td>',
    //                 '<td>',obj.title,'</td>',
    //                 '<td>个数</td>',
    //                  '<td id="',del,'">删除</td>',
    //             '</tr>'
    //
    //         );
    //
    //
    //     });
    //
    //
    //          $('#randerTableList').html(trs.join(''));
    //
    // };

    // 购物车数量增加
    var getCartNumber = function () {

        var url="../../../api/shopping_cart_list.php";
        $.get(url , function (response) {
            if(response.success){
             $('.badge').html(response.total);
                onMyCartBtn(response);

            }
        }, 'json');
    };



    var onMyCartBtn=function (response) {

        var source , template , html;
        source = $('#cartHandlebars').html();
        template = Handlebars.compile(source);
        html =  template(response);
        $('.cart-wp').html(html);



    }















// 选中商品，加入购物车
    var onCartBtn=function () {
        var gid = $(this).attr('gid'),
            url = '../../../api/shopping_cart_add.php',
            data = {
               gid:gid
            };

            setTimeout(function () {
                layer.msg('加载中',  { time :0 ,icon: 16 ,  shade: [0.3,'#000']});
            } , 0);

         $.get(url , data , function (response) {
             if(response.success){
                 layer.closeAll('');
                 getCartNumber();
             }

         }, 'json')

    };

// 账号退出
    var onTuichuBtn = function () {
        var url = '../../../api/shopping_user_logout.php';
        $.get(url , function (response) {
          if(response.success){
              location.href = "index.php"
          }


        }, 'json')
    };

    // 得到商品列表
    var goodLists = function (callback) {
        var url = '../../../api/shopping_goods_list.php';
         $.get(url , {size:4 , classify:1} , function (response) {
             if(response.success) {
                 var source, template, html;
                      source = $('#gListTpl').html();
                      template = Handlebars.compile(source);
                      html = template(response);
                    $('#gList').html(html);
                 callback && callback();

             }else{

             }

     }, 'json');
};


    $(document).ready(innit());



}(window , document , jQuery);