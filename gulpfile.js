var imagemin = require('gulp-imagemin');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();



gulp.task('default', function() {
    //do stuff here
    console.log("Hellllo");
 });


 gulp.task('browserSync', function() {
    browserSync.init({
       server: {
          baseDir: 'build'
       },
    });

    // watch for CSS changes
    gulp.watch('src/styles/*.css', function() {
        console.log("helllo");
    });

 });
 
 

 