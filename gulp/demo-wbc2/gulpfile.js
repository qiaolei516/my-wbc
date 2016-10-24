var gulp = require('gulp'),

    cssmin = require('gulp-minify-css'),
    cssver = require('gulp-make-css-url-version'),


    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),


     notify = require('gulp-notify'),
     plumber = require('gulp-plumber'),

     htmlreplace = require('gulp-html-replace'),


     rev = require('gulp-rev-append');

// var browserSync = require('browser-sync').create();




gulp.task('autoBuild', function(){

    gulp.watch('src/**/*.css' ,['wbcBuildCss']);
    gulp.watch('src/**/*.js' ,['wbcBuildJs']);
    gulp.watch('src/index.html',['wbcBuildHtml']);


})

/*给页面src/helf添加版本号*/

gulp.task('wbcRev',function(){
   gulp.src('src/index.html')
       .pipe(rev())
       .pipe(gulp.dest('dist/'));

})






/*替换html页面中js/css路径*/

// gulp.task('wbcBuildHtml' , function(){
//     gulp.src('src/index.html')
//         .pipe(htmlreplace({
//             'wbc7css':'css/build.css?rev=@@hash',
//             'wbc7js':'js/build.js?rev=@@hash'
//         }))

//         .pipe(gulp.dest('dist/'))

//    gulp.src('dist/index.html')
//        .pipe(rev())
//        .pipe(gulp.dest('dist/'))


// })
   
gulp.task('wbcReplace', function(){
   var r = new Date().getTime();
   gulp.src('src/index.html')
        .pipe(htmlreplace({
            'wbc7css':'css/build.css?rev='+r,
            'wbc7js':'js/build.js?rev='+r
        }))
        .pipe(rev())
        .pipe(gulp.dest('dist/'))



})





/*压缩合并css
*/

gulp.task('wbcBuildCss',function(){
    
    gulp.src('src/**/*.css')
        .pipe(cssver())
        .pipe(concat('build.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});    


/*压缩合并js*/

gulp.task('wbcBuildJs', function(){

    gulp.src('src/js/*.js')
        .pipe(concat('build.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));


});


/*增加版本号清除缓存*/

gulp.task('rev',function(){
   var r = new Date().getTime();
   gulp.src('src/*.html')
       .pipe(htmlreplace({
           'wbc7css':'css/build.css?rev='+r,
           'wbc7js':'js/build.js?rev='+r
       }))
       .pipe(rev())
       .pipe(gulp.dest('dist/'))

    gulp.src('src/pages/*.html')
       .pipe(htmlreplace({
           'wbc7css':'css/build.css?rev='+r,
           'wbc7js':'js/build.js?rev='+r
       }))
       .pipe(rev())
       .pipe(gulp.dest('dist/pages/'))



})

/*移动不用构建的文件*/

gulp.task('copy',function(){
   gulp.src('src/img/*')
       .pipe(gulp.dest('dist/img/'))

    gulp.src('src/lib/**/*') 
       .pipe(gulp.dest('dist/lib/'))

})


gulp.task('bulid',['wbcBuildCss' , 'wbcBuildJs' , 'rev' , 'copy'] , function(){

})