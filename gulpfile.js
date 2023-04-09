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

// Watch Task
gulp.task("watch", function () {
  gulp.watch("./assets/scss/**/*.scss", gulp.series("sass"));
  gulp.watch(
    "./assets/css/responsive.css",
    { debounceDelay: 500 },
    gulp.series("responsive")
  );
  gulp.watch(
    "./assets/css/feather.css",
    { debounceDelay: 500 },
    gulp.series("feather")
  );
  gulp.watch(
    "./assets/css/slick.css",
    { debounceDelay: 500 },
    gulp.series("slick")
  );
});
