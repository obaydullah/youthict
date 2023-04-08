const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const terser = require("gulp-terser");

gulp.task("sass", function () {
  return gulp
    .src("./assets/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(rename("style.min.css"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("responsive", function () {
  return gulp
    .src("./assets/css/responsive.css")
    .pipe(rename("responsive.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("newsticker", function () {
  return gulp
    .src("./assets/css/bwlJqueryNewsTicker.css")
    .pipe(rename("bwlJqueryNewsTicker.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("feather", function () {
  return gulp
    .src("./assets/css/feather.css")
    .pipe(rename("feather.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("slick", function () {
  return gulp
    .src("./assets/css/slick.css")
    .pipe(rename("slick.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("mainjs", function () {
  return gulp
    .src("./assets/js/main.js")
    .pipe(rename("main.min.js"))
    .pipe(terser())
    .pipe(gulp.dest("./assets/js/"));
});

// Watch Task
gulp.task("watch", function () {
  gulp.watch("./assets/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("./assets/css/responsive.css", gulp.series("responsive"));
  gulp.watch("./assets/css/feather.css", gulp.series("feather"));
  gulp.watch("./assets/css/slick.css", gulp.series("slick"));
  gulp.watch("./assets/js/main.js", gulp.series("mainjs"));
});
