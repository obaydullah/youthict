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
    .pipe(gulp.dest("./assets/css/"));
});

// Task to rename and minify your CSS file
gulp.task("minify-css", function () {
  return gulp
    .src("./assets/css/style.css")
    .pipe(rename("style.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./assets/css"));
});

gulp.task("responsive", function () {
  return gulp
    .src("./assets/css/responsive.css")
    .pipe(rename("responsive.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("minify-js", function () {
  return gulp
    .src("./assets/js/main.js")
    .pipe(terser())
    .pipe(rename("main.min.js"))
    .pipe(gulp.dest("./assets/js/"));
});

//build task
gulp.task(
  "build",
  gulp.parallel("sass", "minify-css", "responsive", "minify-js")
);

// Watch Task
gulp.task("watch", function () {
  gulp.watch("./assets/scss/**/*.scss", gulp.series("sass"));
  gulp.watch(
    "./assets/css/style.css",
    { debounceDelay: 500 },
    gulp.series("minify-css")
  );
  gulp.watch(
    "./assets/css/responsive.css",
    { debounceDelay: 500 },
    gulp.series("responsive")
  );
  gulp.watch(
    "./assets/js/main.js",
    { debounceDelay: 500 },
    gulp.series("minify-js")
  );
});
