var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('scss', function () {
  gulp.src('src/scss/tinycarousel.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./css/'));
});

var jsArrayDev  = ['src/js/tinycarousel.js'];
gulp.task('js', function () {
  return gulp.src(jsArrayDev)
     .pipe(gulp.dest('js'))
        .pipe(uglify())
.pipe(gulp.dest('js'));
});
