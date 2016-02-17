var gulp       = require('gulp'),
    bower      = require('bower'),
    concat     = require('gulp-concat'),
    sass       = require('gulp-sass'),
    minifyCss  = require('gulp-cssnano'),
    imagemin   = require('gulp-imagemin'),
    rename     = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    babel      = require('gulp-babel'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify     = require('gulp-uglify');

var paths = {
    js: ['www/js/*.js', 'www/js/**/*.js']
};

gulp.task('default', ['sass', 'images', 'scripts']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./www/assets/css/'))
    .on('end', done);
});

gulp.task('images', function () {
  gulp.src(['./images/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('./www/assets/img/'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(ngAnnotate())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('./www/assets/script/'));
});

gulp.task('watch', function() {
  gulp.watch(['./scss/**/*.scss'], ['sass']);
  gulp.watch(['images/*'], ['images']);
  gulp.watch(paths.js, ['scripts']);
});
