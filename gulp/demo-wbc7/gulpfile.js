var gulp = require('gulp'),
    cssmin = require('gulp-minify-css'),
    cssver = require('gulp-make-css-url-version');

gulp.task('wbcCssMin' , function(){
    gulp.src('src/css/index.css')
        .pipe(cssver())
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});