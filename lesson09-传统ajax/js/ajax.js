$(document).ready(function () {

    var mybtn = document.getElementById('mybtn');
    mybtn.onclick = function () {
        getdate();
    };



   function getdate() {

       var xhr = new XMLHttpRequest ;
           xhr.open('get' , '../date/date.json' , true);
            xhr.send();

       xhr.onreadystatechange = function () {
           var response;
           if(xhr.readyState = 4 && xhr.status ==200){
               response = JSON.parse(xhr.responseText);

           }
       }




   };



});