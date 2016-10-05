var  userApp = angular.module('userApp' ,[]);
     userApp.controller('userController' , function ($scope ,$http) {
         // $scope.userhuisz = function () {
         //         alert(99)
         // };

         $scope.allPage={
             size:5,
             page:0,
             baseNumber:0
         };

         
       function renderFenYe() {
           setTimeout(function () {
               layer.msg('加载中',  { time :0 ,icon: 16 ,  shade: [0.3,'#000']});
           } , 0);

           $http({
               url:'../../../api/shopping_user_list.php',
               method:'get',
               params:{
                   size:$scope.allPage.size,
                   page:$scope.allPage.page,
                   query:$scope.query

               }

           }).success(function(response) {

               if(response.success){
                   layer.closeAll('');
                   $scope.userList =response.data;
                   $scope.totalpage = getFenYe(response.total);
                   $scope.allPage.baseNumber = $scope.allPage.size*$scope.allPage.page
               }else {
                   // alert('失败')
               }

           });
       }

         renderFenYe();


        var getFenYe =function (Total) {
             var arr=[],
                 len = Math.ceil(Total/$scope.allPage.size),
                 i;

                for(i =0 ; i<len; i++){
                    arr.push(i)
                }
                   return arr;
               };





         $scope.onFenYeLis=function () {
             // console.log(this)
             $scope.allPage.page=this.page ;
             renderFenYe();
             
         };

         // 第一页

         $scope.prev =function () {
             $scope.allPage.page=0;
             renderFenYe();

         };

         // 最后一页
         $scope.next =function () {
             $scope.allPage.page = ($scope.totalpage.length)-1;
             renderFenYe();

         };

// 搜索
       $scope.searchBtn =function () {

           renderFenYe();
       }



    });





















