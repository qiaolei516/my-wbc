var user = angular.module('userApp' ,[]);
    user.controller('userController' , function ($scope ,$http) {
         $scope.userhuisz = function () {

         };

        $http({
            url:'../../../api/shopping_user_list.php',
            params:{

        }



        });








    });

