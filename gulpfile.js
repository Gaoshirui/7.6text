var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var mincss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var minhtml = require('gulp-htmlmin')

//打包，压缩css
gulp.task('devSass', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >=4.0']
        }))
        //压缩css
        .pipe(mincss())
        //输出到css
        .pipe(gulp.dest('./src/css'))
})

//打包压缩js
gulp.task('uglify', function() {
    //
    gulp.src(['./src/js/*.js', '!./src/js/*.min.js'])
        //压缩js
        .pipe(uglify())
        //输出到build
        .pipe(gulp.dest('build/js'))

})

//打包压缩html
var options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
};
gulp.task('minhtml', function() {
    gulp.src('./src/**/*.html')
        .pipe(minhtml(options))
        .pipe(gulp.dest('build'))
})