var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    bower      = require('bower'),
    concat     = require('gulp-concat'),
    sass       = require('gulp-sass'),
    minifyCss  = require('gulp-minify-css'),
    imagemin   = require('gulp-imagemin'),
    rename     = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    babel      = require('gulp-babel'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify     = require('gulp-uglify'),
    sh         = require('shelljs');


gulp.task('default', ['sass', 'images', 'scripts']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('images', function () {
  gulp.src(['./images/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('./www/img/'));
});

gulp.task('scripts', function() {
  return gulp.src(['www/js/*.js', 'www/js/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(ngAnnotate())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('./www/script/'));
});

gulp.task('watch', function() {
  gulp.watch(['./scss/**/*.scss'], ['sass']);
  gulp.watch(['images/*'], ['images']);
  gulp.watch(['www/js/*.js', 'www/js/**/*.js'], ['scripts']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
