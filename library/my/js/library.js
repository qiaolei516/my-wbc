/**
 * Created by 乔雷 on 2016/9/21.
 */
!function (window , document , $ , undefined) {


    var innit = function () {
        onclickEvent()

    };


    var onclickEvent = function () {
        $('#addLibraryBtn').on('click' , onAddLibrary);
        $('#requestBtn').on('click' , onRequestBtn);
    };








    var onAddLibrary = function () {
        var   $addLibraryBtn = $('#addLibraryBtn');
        $addLibraryBtn.on('click' , function () {

          $('#tanck').modal();

        });

    };




    var onRequestBtn = function () {
           var url = "../../api/books_add.php",
               param = {
                   name : $('#name').val(),
                   author : $('#author').val()
               };

            $.get(url , param , function (date) {


            } , 'json');

        };













    innit();



}(window , document , jQuery);