/**
 * Created by 乔雷 on 2016/9/28.
 */
!function (window , document , $ ,undefined) {
    var cache={};
    var param={
        qurery:''
       };
    var classify = {
           innit:function () {
               classify.clickEven();
               classify.getClassifyList();


           },

        // 绑定所有事件
        clickEven:function () {
            $('#addClassifyBtn').on('click' , this.onAddClassifyBtn);
            $('#classifySaveBtn').on('click' , this.onClassifySaveBtn);
            $('#classifyTanck').find('#title').on('keyup' , this.onkeyupClassify);
            $('#getClassifyList').on('click' ,'tbody input[type=checkbox]' , this.onChecked);
            $('#delClassifyBtn').on('click' , this.onDelClassifyBtn);
            $('#searchBtn').on('click' , this.onSearchBtn);

            $('#updateBtn').on('click' ,this.onUpdateBtn)

        },


        onSearchBtn:function () {
            var txt = $('#searchIpt').val();
            param.qurery=txt;
            classify.getClassifyList();


        },
        
        
        
        
        
        
        
        
        
        
        
        
        
        // 修改按钮
        onUpdateBtn:function () {
            var $tbodyChecked =$('tbody input[type=checkbox]:checked'),
                id = $tbodyChecked[0].id,
                obj = cache[id];

              $('#title').val(obj.name);




            $('#classifyTanck').modal('show');
            $('#addClassifyTitle').text('修改商品类别')


        },








        // 删除按钮和修改按钮状态

        onChecked:function() {

          var $tbodyChecked =$('tbody input[type=checkbox]:checked'),
              len = $tbodyChecked.length;
              if(len > 0){
                  $('#delClassifyBtn').removeAttr('disabled');
                  $('#updateBtn').attr('disabled' , 'disabled');
                  if(len==1){
                      $('#updateBtn').removeAttr('disabled')
                  }
              }else {
                  $('#delClassifyBtn').attr('disabled' ,'disabled');
                  $('#updateBtn').attr('disabled' , 'disabled')
              }
        },


        // 删除按钮
        onDelClassifyBtn:function () {

            var $checkCheckbox =$('tbody input:checked'),

                arrow=[];

               $checkCheckbox.each(function () {


                   arrow.push(this.id);
                   console.log(arrow)
               });



            Unit.ajax({
                url:'../../../api/shopping_classify_del.php',
                data:{ids:arrow.join(',')},
                success:function (response) {
                    if(response.success){
                        layer.msg('商品删除成功!', {offset: 0, shift: 6});
                        classify.getClassifyList();
                        layer.closeAll('');

                    }
                }


            })
        },
        


// 类别名称值

        onkeyupClassify:function () {
           var txt = this.value,
               $inputValue = $(this);
               if(!txt){
                   return;
               }
             Unit.ajax({
                url:'../../../api/shopping_classify_check.php',
                data:{name:txt},
                 success:function(response){
                       if(response.total==0) {
                          $inputValue.parent('div').removeClass('has-error').addClass('has-success')

                      }else{

                          $inputValue.parent('div').removeClass('has-success').addClass('has-error')
                      }

                   }

           })
        },

        // 渲染类别列表
        getClassifyList:function () {
           Unit.ajax({
               url:'../../../api/shopping_classify_list.php',
               data:param,
               success:function (response) {
                   var arr=[];
                   $.each(response.data ,function (index ,obj) {
                       arr.push(
                           '<tr>',
                               '<td><input id="',obj.id,'" type="checkbox"></td>',
                               '<td class="thwidth">' ,index + 1,'</td>',
                               '<td>',obj.name,'</td>',
                            '</tr>'
                       );
                       cache[obj.id] =obj;

                   });
                   $('#getClassifyList tbody').html(arr.join(''));


               }

           })

        },

        // 新增保存按钮//TODO修改时商品增加

        onClassifySaveBtn:function () {

            var url='../../../api/shopping_classify_add.php',

                id=$('#classifyHiddenIpt').val();
                $title = $('#title').parent('div');
                if($title.hasClass('has-error')){
                    return;
                }
              var  data={name:$('#title').val()};
              if(id!=0){
                  url = '../../../api/shopping_classify_update.php';
                  data.id=$('#classifyHiddenIpt').val();
              }


            $.get(url , data , function (response) {
                if(response.success){
                    layer.closeAll();
                    $('#classifyTanck').modal('hide');

                    layer.msg('商品保存成功!', {offset: 0, shift: 6});

                    $('#qingkong').trigger('reset');
                       classify.getClassifyList();
                }else{
                    alert('商品保存失败！')
                }

            } ,'json');






            // 表单验证

            // Unit.ajax({
            //     url:'../../../api/shopping_classify_add.php',
            //     data:{name:name},
            //     success:function (response) {
            //         layer.msg('类别保存成功!', {offset: 0, shift: 6});
            //         $('#classifyTanck').modal('hide');
            //         classify.getClassifyList();
            //         $('#qingkong').trigger('reset');
            //     },
            //
            // });
    },




        // 新增类别按钮
        onAddClassifyBtn:function () {
            $('#qingkong').trigger('reset');
            $('#qingkong >input').val(0);

            $('#classifyTanck').modal('show');
            $('#addClassifyTitle').text('新增商品类别');




        }


    };



    classify.innit();

    // 复选框全选与取消

    function allchecked() {

        $('#all').on('click' , function () {

            if(this.checked){
                $('tbody input:checkbox').prop('checked' , true);
            }else{
                $('tbody input:checkbox').prop('checked' , false);
            }


        });

    }




    allchecked();








}(window , document , jQuery);