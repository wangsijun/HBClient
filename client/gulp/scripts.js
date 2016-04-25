var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var config = require('./config');

// minify & concatenate js
gulp.task('scripts', ['clean', 'templates'], function() {
    return gulp.src([
            config.base + 'app/app.module.js', // all module definitions and their dependencies
            config.base + 'app/app.config.js',
            config.base + 'app/components/base/BaseController.js',
            config.base + 'app/components/tasks/base/TaskController.js',
            config.base + 'app/components/tasksPreview/base/TaskPreviewController.js',
            config.base + 'app/**/*.js', '!' + config.base + 'app/modules/**',
            config.dist + 'scripts/templates.js'
	    ])
        .pipe(sourcemaps.init())
        .pipe(concat('hb.min.js'))
        //.pipe(uglify())
        .pipe(sourcemaps.write())

        .pipe(gulp.dest(config.dist + 'scripts'));
});
