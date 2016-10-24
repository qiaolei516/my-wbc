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












/*浏览器自动同步*/

// gulp.task('bsync',function(){
//      browserSync.init:({
//          server: {
//             baseDir: "/src"
//          }
//      });

//     gulp.watch('src/*.html').on('change' ,browserSync.reload);


// });

/*压缩合并js*/

gulp.task('wbcBuildJs', function(){

    gulp.src('src/js/*.js')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(concat('build.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));


});


/*压缩合并css
*/

gulp.task('wbcBuildCss',function(){
    
    gulp.src('src/**/*.css')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(cssver())
        .pipe(concat('build.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});    








/*压缩js*/

gulp.task('wbcJsMin', function(){

    gulp.src('src/js/*.js')
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('dist/js'));


});


/*合并js*/

gulp.task('wbcJsConcat', function(){

    gulp.src('src/js/*.js')
        .pipe(concat('build.js'))
        .pipe(gulp.dest('dist/js'));


});





/*压缩css*/
gulp.task('wbcCssMin',function(){
    // gulp.src(['src/css/index.css','src/css/base.css'])
    gulp.src('src/**/*.css')
        .pipe(cssver())
        .pipe(cssmin())
        .pipe(gulp.dest('dist/'));
});    


