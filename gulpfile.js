var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify');

gulp.task('default', ['sass', 'scripts']);

gulp.task('serve:before', ['watch']);

gulp.task('sass', function (done) {
    gulp.src('./scss/ionic.app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({extname: '.min.css'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./www/assets/css/'))
        .on('end', done);
});

gulp.task('scripts', function () {
    return gulp.src(['www/js/*.js', 'www/js/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['es2015']}))
        .pipe(ngAnnotate())
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./www/assets/script/'));
});

gulp.task('watch', ['default'], function () {
    gulp.watch(['./scss/**/*.scss'], ['sass']);
    gulp.watch(['www/js/*.js', 'www/js/**/*.js'], ['scripts']);
});
