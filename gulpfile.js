var path        = require('path'),
    gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')(),
    del         = require('del'),
    concat      = require('gulp-concat'),
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify'),
    ngHtml2Js   = require("gulp-ng-html2js"),
    htmlmin     = require('gulp-htmlmin'),
    css2js      = require("gulp-css2js");

gulp.task('lint', function(done) {
  gulp.src([ './src/**/*.js', './spec/**/*.js' ])
    .pipe(plugins.jshint('.jshintrc'))
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'))
    .on('end', done);
});

gulp.task('html2js', function (done) {
  gulp.src("./src/*.html")
    .pipe(htmlmin())
    .pipe(ngHtml2Js({
      moduleName: "ionic-datepicker.templates"
    }))
    .pipe(concat("templates.js"))
    .pipe(gulp.dest("./dist"))
    .on('end', done);
});

gulp.task('css2js', function (done) {
  gulp.src("src/*.css")
    .pipe(css2js())
    .pipe(gulp.dest("./dist/"))
    .on('end', done);
});

gulp.task('build', [ 'html2js', 'css2js' ], function (done) {
  gulp.src("src/*.js")
    .pipe(concat("ionic-datepicker.js"))
    .pipe(gulp.dest("./dist"))
    .on('end', done);
});

gulp.task('make-bundle', ['build'], function (done) {
  gulp.src([ 'dist/*.js', '!dist/*.min.js' ])
    .pipe(concat('ionic-datepicker.bundle.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('dist/'))
    .on('end', done);
});

gulp.task('clean', function () {
  del([ 'dist/*' ]);
});

gulp.task('watch', function() {
  gulp.watch([ './src/*.js', './src/template.html', './src/*.css' ], [ 'build' ]);
});

gulp.task('default', [ 'clean', 'lint', 'build' ]);

