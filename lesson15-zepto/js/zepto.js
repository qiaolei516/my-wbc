!function(window , document , undefined){

  $('section li').on('swipeLeft' , function(){
    var $this = $(this);

        if($this.find('.del').length==0){
            $this.append('<div class="del">删除</div>');
        }
          
       $this.find('.del').show();
        $this.siblings().find('.del').hide('.del');

  }).on('tap' , function(){
     $(this).remove();

  })


// 'tap'手指点击屏幕事件 'swipeLeft'向左滑动

// 删除整行

  // $('.del').on('tap' ,function(){

  //   $(this).parent('li').remove();

  // })  因为del是一个未来元素，不是一直存在。所以找父元素。冒泡














}(window , document)