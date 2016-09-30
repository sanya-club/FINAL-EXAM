'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var spritesmith = require("gulp-spritesmith");
var gulpif = require("gulp-if");
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');

gulp.task('sass', function () { // Создаем таск "sass"
  return gulp.src('src/sass/style.scss') // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('src/css')) // Выгружаем результата в папку app/css
});

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass']); // Наблюдение за sass файлами
  // Наблюдение за другими типами файлов
});

gulp.task('gulp-spritesmith', function () {
  return gulp.src('./src/img/sprite/*.png')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      styleName: 'sprite.css',
      imgPath: '../img/sprite.png'
    }))
    .pipe(gulpif('*.png', gulp.dest('./src/img/')))
    .pipe(gulpif('*.css', gulp.dest('./src/img/sprite')));
});
gulp.task('gulp-autoprefixer', function () {
  gulp.src('src/css/style.css')
    .pipe(autoprefixer({
      browsers: ['last 6 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('src/css'))
});

gulp.task('gulp-imagemin', function () {
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
});

gulp.task('gulp-uglify', function () {

  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});

gulp.task('gulp-cssmin', function () {
  gulp.src('src/css/*.css')
    .pipe(cssmin())

  .pipe(gulp.dest('build/css'));
});

gulp.task('default', ['gulp-autoprefixer', 'gulp-autoprefixer', 'gulp-imagemin', 'gulp-uglify', 'gulp-cssmin', "gulp-spritesmith", 'watch']);