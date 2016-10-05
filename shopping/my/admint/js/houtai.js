/**
 * Created by 乔雷 on 2016/9/22.
 */
!function (window, document, $ ,undefined) {
    var onSearchBtn,
        clscache;

    var cache = {},
                                                 /*参数s*/
        params = {
            query:'',
            size:5,
            page:0
        };

    var init = function () {
        inintEvent();
        getList();

        // onDeleteGoodBtn();
    };


    // 绑定所有事件
    var inintEvent = function () {
        $('#addGoodBtn').on('click' , onAddGoodBtn);
        $('#saveBtn').on('click' , onSaveBtn);
        $('#updateBtn').on('click' , onUpDateBtn);
        $('#deleteGoodBtn').on('click' ,onDeleteGoodBtn);
        $('#searchBtn').on('click' , onSearchBtn);
        $('#fenye').on('click' ,'li', onFenyeLi); /*为未来事件绑点击*/
        $('#classifyBtn').on('click' , onClassifyBtn);
         // $('#deleteTableList).on('click' ,' tbody input[type = checkbox]' , onChecked);


    };

    var onFenyeLi = function () {
       var $this = $(this),
           page =$this.attr('pageValue');

        if($this.hasClass('next')){
            page = ++params.page;
            page = page > (params.totalpage-1) ?(params.totalpage-1) : page;
        }else if($this.hasClass('prev')){
            page = -- params.page;
            page = page< 0 ? 0 :page;
        }
           params.page = page;
           getList();

    };

// 搜索按钮

    onSearchBtn = function () {
        var $searchIptVal = $('#searchIpt').val();
        params.query = $searchIptVal;


// 回车搜索事件                                       TODO
        $(document).keypress(function (e) {
            if (e.which == 13) {
                $('#searchBtn').click();
            }

        });
        getList();

        if ($searchIptVal.length == 0) {

            $('#searchBtn').prop('disabled', false);

        }


    };




    var onUpDateBtn = function () {


       var $checkCheckbox = $('#deleteTableList tbody input[type=checkbox]:checked'),
            id = $checkCheckbox[0].id;
                                              // console.log($checkCheckbox[0]) dom对象<input id="100" type="checkbox">
                                              //   console.log($checkCheckbox[0].id)   100,
            weiyiId = cache[id];
                                            // console.log(cache[id])cache一个空对象，cache.id相当于=cache[id],id为变量
                                            //       cache[id]1个对象id=100， title:杯子，picture：5........
           getClassify();

            $('#title').val(weiyiId.title);
            $('#price').val(weiyiId.price);
            $('#details').val(weiyiId.details);
            $('#amount').val(weiyiId.amount);
            $('#classify').val(weiyiId.classify);
            $('#hiddenIpt').val(id);


           $('#tanck').find('input[name=status][value="'+weiyiId.status+'"]').trigger('click');
           $('#addGoodTitle').text('修改商品').end().modal('show');


             $('#tanck').modal('show');



    };


// 修改商品



    var onDeleteGoodBtn = function () {
        var $checkCheckbox = $('tbody input:checked');
        var arrow = [];
        var url = '../../../api/shopping_goods_del.php';

        //询问框
        layer.confirm('确认要删除吗？', {
            btn: ['取消','确定'], //按钮
            closeBtn:0

        }, function(){
            layer.closeAll('');

        }, function(){

/*            setTimeout(function () {
                layer.msg('加载中',  { time :0 ,icon: 16 ,  shade: [0.3,'#000']});
            } , 0);*/

            $checkCheckbox.each(function () {
                 var $this=$(this);
                console.log($this)
                arrow.push($this.attr('id'));
                // arrow.push(this.id)

            });
            $.get(url,{ids:arrow.join(",")},function (response) {

                if(response.success) {
                    layer.msg('商品删除成功!', {offset: 0, shift: 6});
                    getList();
                    $('#deleteGoodBtn').attr('disable','disable');
                     layer.closeAll()
                }

            },'json')
        })

    };




    var onChecked = function () {

        var $checkCheckbox = $('#deleteTableList tbody input[type=checkbox]:checked'),
            $inputCheckbox =$('#deleteTableList tbody input[type=checkbox]'),
            $upDateBtn =$('#updateBtn'),
            len = $checkCheckbox.length;
        if(len > 0){
            $('#deleteGoodBtn').removeAttr('disabled');
            $upDateBtn.attr('disabled','disabled');
            if(len ==1){
                $upDateBtn.removeAttr('disabled');
            }

        }else {
            $('#deleteGoodBtn').attr('disabled' , 'disabled');
            $upDateBtn.attr('disabled' , 'disabled')
        }
        // alert(999);


        // 复选框有一个不被选中就false

        if(len == $inputCheckbox.length ){
            $('#all').prop('checked' , true);
        }else{
            $('#all').removeProp('checked' , false);
        }


    };



    var  getList = function () {

    var getListUrl = '../../../api/shopping_goods_list.php',
        getStatusUrl = '../../../api/shopping_goods_update_status.php',
        getClassUrl = "../../../api/shopping_classify_list.php",
        $checkCheckbox = $('tbody input:checked'),
        arrow2 = [];



        setTimeout(function () {
                     layer.msg('加载中',  { time :0 ,icon: 16 ,  shade: [0.3,'#000']});
                 } , 0);
         $.when($.getJSON(getListUrl , params) , $.getJSON(getClassUrl)).done(function (realist , reaclassify) {
             if(realist[0].success && reaclassify[0].success){
                 // console.log(realist)
                 // console.log(realist[0])

                 layer.closeAll('');
            }


             clscache = reaclassify[0];
             pushlist(realist[0] ,reaclassify[0]);
             getpage(realist[0]);




        });
        $checkCheckbox.each(function () {
            var $this=$(this);
            arrow2.push($this.attr('id'));

        });
        param={
            ids:arrow2.join(','),
            status : $('input[name=status]:checked').val()
        };
        $.get( getStatusUrl , param , function (response) {
            if(response.success){

            }
        })

    };



    // var  getList = function () {
    //     var url = '../../../api/shopping_goods_list.php';
    //     setTimeout(function () {
    //         layer.msg('加载中',  { time :0 ,icon: 16 ,  shade: [0.3,'#000']});
    //     } , 0);
    //     $.get(url , params, function (response) {
    //         if(response.success){
    //             pushlist(response);
    //             getpage(response);
    //         }else{
    //             layer.msg('搜索不到!', {offset: 0, shift: 6});
    //         }
    //
    //
    //         layer.closeAll('');
    //
    //     } , 'json')
    //
    //
    // };

    // 分页

    var getpage = function (response) {

        var total = response.total,

            totalpage  = Math.ceil(total / params.size),

            Arrow =['<li class="prev"><a href="#">&laquo;</a></li>'];
            params.totalpage = totalpage ;

        for(var i = 0 ; i < totalpage ; i++ ) {
            if (params.page == i) {
                Arrow.push('<li pageValue = "', i ,'"  class="active"><a href="#">', i + 1, '</a></li>');


            } else {
                Arrow.push('<li pageValue = "', i ,'"><a href="#">', i + 1, '</a></li>');
            }

        }

          Arrow.push('<li  class="next" ><a href="#">&raquo;</a></li>');

        $('#fenye').html(Arrow.join(''));


    };


    var pushlist = function (realist, reaclassify) {
        var data = realist.data,
            arr = [];

        $.each(data , function (index , obj) {
            var title = obj.title;

            if(params.query !=''){
                title = title.replace(params.query , '<span class="red">' ,params.query, '</span>');
            }


            arr.push(
                '<tr>',
                '<td><input id="',obj.id,'" type="checkbox"></td>',
                '<td>', index + 1,'</td>',
                '<td title="',obj.title,'"><span class="text-ellipsis">',obj.title,'</span></td>',
                '<td>￥',obj.price,'</td>',
                '<td><span class="text-ellipsis">',obj.details,'</span></td>',
                '<td>',obj.amount,'</td>',
                '<td>',getNameById(obj.classify ,reaclassify.data ),'</td>',
                '<td>',obj.status? '下架' : '上架','</td>',
                '</tr>'



            );

            cache[obj.id]= obj;



            $('#deleteTableList tbody').html(arr.join(''));



            $('#deleteTableList tbody input[type = checkbox]').on('click' , onChecked);

        });




    };


  var getNameById = function (id, arr) {
      var name;
      $.each(arr , function (index , obj) {

          if(obj.id ==id){
              // console.log(id)
              name = obj.name;
              return false;
          }


      });
          return name;


  };


// 点击保存按钮时

    var onSaveBtn = function () {

        var url = '../../../api/shopping_goods_add.php',
            id = $('#hiddenIpt').val();


            param = {
                   // id :  $('#hiddenIpt').val(),
                title : $('#title').val(),
                price : $('#price').val(),
                details : $('#details').val(),
                amount : $('#amount').val(),
                classify : $('#classify').val(),
                status : $('input[name=status]:checked').val()

            };
           if(id !=0){
               url = "../../../api/shopping_goods_update.php";
                param.id =$('#hiddenIpt').val();
           }


        // 表单验证
        if($.trim(param.title).length ==0){
            alert('商品名称不能为空');

            return false;
        }
        if($.trim(param.price).length ==0){
            alert('商品价格不能为空');

            return false;
        }

        if($.trim(param.details).length ==0){
            alert('商品介绍不能为空');

            return false;
        }
        if($.trim(param.amount).length ==0){
            alert('库存不能为空');

            return false;
        }
        if($('#classify').val() ==0){
            alert('类别不能为空');

            return false;
        }

        setTimeout(function () {
            layer.msg('加载中',  { time :0 ,icon: 16 ,  shade: [0.3,'#000']});
        } , 0);


        $.get(url , param , function (response) {
              if(response.success){
                  layer.closeAll();
                  $('#tanck').modal('hide');

                  layer.msg('商品保存成功!', {offset: 0, shift: 6});

                  // onSaveBtn();
                  // alert('商品保存成功！');
                   $('#qingkong').trigger('reset');
                  getList();
              }else{
                alert('商品保存失败！')
            }

        } ,'json');

        // 修改按钮修改过后不能用
        var $checkCheckbox = $('#updateBtn tbody tr input[type=checkbox]:checked');

        if($checkCheckbox.length > 0){
            $('#updateBtn').prop('disabled' ,false);



        }else {
            $('#updateBtn').prop('disabled' , true);
        }



    };


    // 弹出框事件
    var  onAddGoodBtn = function () {
        getClassify();

            $('#tanck').modal('show');
            $('#addGoodTitle').text('新增商品');

            $('#hiddenIpt').val(0).end();
            $('#qingkong').trigger('reset');


    };

    // 类别

    var getClassify = function () {

        var arr2 =['<option value="0">请选择</option>'];


            $.each(clscache.data, function(index , obj) {

               arr2.push('<option value="',obj.id,'">',obj.name,'</option>');
              });

            $('#classify').html(arr2.join(''));

        };
         // var url = "../../../api/shopping_classify_list.php";
         //     layer.msg('加载中',  { time :0 ,icon: 16 ,  shade: [0.3,'#000']});
         //  $.get(url , function (response) {
         //      // console.log(response)
         //      var arr2 =['<option value="0">请选择</option>'];
         //
         //    if(response.success){
         //
         //        $.each(response.data, function(index , obj) {
         //
         //             // console.log(response)             /*对象*/
         //            // console.log(response.data);    /*数组*/
         //            arr2.push('<option value="',obj.id,'">',obj.name,'</option>');
         //        });
         //        $('#classify').html(arr2.join(''));
         //        returnfn();
         //        layer.closeAll();
         //   }
         //
         //
         //  } , 'json');






// 类别管理

   var onClassifyBtn = function () {
        window.location.href="../classify/classify.html";
       // window.open("../classify/classify.html");


   };


    init();

    // 复选按钮全选取消

   var allChecked = function () {
       // var $tds = $('#deleteTableList tbody input[type=checkbox]');


       $('#all').on('click' ,function () {

         if(this.checked){


             $('tbody input:checkbox').prop('checked' , true);


         }else{
             $('tbody input:checkbox').prop('checked' , false);

          }



       });
       //
       // $tds.on('click' ,function () {
       //
       //
       //
       //     if($tds.length ==$checkCheckbox){
       //         $('#all').prop('checked' , 'checked');
       //     }else{
       //         $('#all').removeProp('checked');
       //     }
       //
       //
       // })



   };


    allChecked();






}(window , document , jQuery);