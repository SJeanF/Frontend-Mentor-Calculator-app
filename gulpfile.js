const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');

gulp.task('htmlmin', function () {
    return gulp.src('./src/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/main.scss')
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(sourceMaps.write('.'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('jsmin', function () {
    return gulp.src('./src/scripts/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('imagetransport', function () {
    return gulp.src('src/images/*')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('build', function (done) {
    gulp.parallel('sass', 'jsmin', 'htmlmin', 'imagetransport')();
    done();
})