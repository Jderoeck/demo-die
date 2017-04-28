const gulp = require('gulp'); //ES6: var = const
const sass = require('gulp-sass');

//taak voert sass uit met 'gulp sass
gulp.task('sass', function () {
  return gulp.src('./src/sass/app.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) //{outputStyle: 'compressed'} minimaliseert css
    .pipe(gulp.dest('./public/stylesheets'));
});

//taak zoekt naar vernadering in .scss files en voert sass Uit
//nieuw commando is 'gulp watch'
gulp.task('watch', function(){
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

//voert verschillende taken uit met enkel het commando 'gulp'
gulp.task('default', ['watch']);