const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return gulp.src('../blocks/sass/**/*.sass') // Путь к SASS файлам
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../blocks/main/')); // Путь, куда сохранять CSS
};

exports.compileSass = compileSass;

exports.default = function() {
    gulp.watch('../blocks/sass/**/*.sass', compileSass);
};
