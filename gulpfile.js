var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    del = require('del'),
    browserSync = require('browser-sync');

// Move any HTML from src to dist folder.
gulp.task('html', function () {
    gulp.src('./src/**/**/*.html')
        .pipe(gulp.dest('dist/'))
});

//
gulp.task('styles', function () {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass({
            // This is how you include SCSS paths from node_modules. See src/scss/main.scss for @import.
            includePaths: [
                './node_modules/normalize-scss/sass'
            ],
            style: 'uncompressed',
            quiet: true
        }).on('error', sass.logError))
        .pipe(prefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('minify-css', function() {
    return gulp.src('dist/css/*.css')
        .pipe(cleanCSS())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('clean', function () {
    return del([
        'dist/**/*'
    ]);
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: "./dist/",
            injectChanges: true,
            browser: "Google Chrome"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['styles', browserSync.reload]);
    gulp.watch('src/**/*.html', ['html', browserSync.reload]);
});

gulp.task('default', function () {
    gulp.start(['clean'], 'html', 'styles', 'watch', 'browser-sync');
});
