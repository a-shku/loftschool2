'use strict';

var gulp = require('gulp'),
    merge = require('merge-stream'),
    del = require('del'),
    file = require('gulp-file'),
    gfi = require("gulp-file-insert"),
    plugins = require("gulp-load-plugins")({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });
    
var resources = {},
    paths = {};

paths.bowerComponents = './bower_components/';    


resources.bowerJs = [
    paths.bowerComponents + "jquery/dist/jquery.js",
    paths.bowerComponents + 'jquery.nicescroll/jquery.nicescroll.min.js',
    paths.bowerComponents + 'owl.carousel/dist/owl.carousel.min.js',
    paths.bowerComponents + 'inputmask/dist/min/jquery.inputmask.bundle.min.js',
    paths.bowerComponents + 'onepage-scroll/jquery.onepage-scroll.min.js',
    //paths.bowerComponents + 'fancybox/dist/jquery.fancybox.js',
    paths.bowerComponents + 'fancybox/source/jquery.fancybox.js',
    paths.bowerComponents + 'parsleyjs/dist/parsley.min.js'
];

gulp.task('clean:js:assets', function () {
    return del.sync(['dist/assets/js/assets.min.js']);
});

gulp.task('js:assets', ['clean:js:assets'], function () {
    
    return  gulp.src(resources.bowerJs)
            .pipe(plugins.concat('source/vendor/js/**/*.js'))
            
        .pipe(plugins.concat('assets.js'))
        .pipe(plugins.size({
            showFiles: true
        }))
        .pipe(gulp.dest('dist/assets/js/'));
        
});

gulp.task('clean:js:app', function () {
    return del.sync(['dist/assets/js/main-app.js']);
});

gulp.task('js:app', ['clean:js:app'], function() {
    return gulp.src('source/custom/js/**/*js')
        .pipe(plugins.concat('main-app.js'))
        .pipe(plugins.size({
            showFiles: true
        }))
        .pipe(gulp.dest('dist/assets/js/'));
});

// gulp.task('modules', function() {
//     gulp.src('source/custom/js/*.js')
//         .pipe(plugins.debug({title: 'src'}))
//         .pipe(plugins.concat('document.ready.js'))
//         .pipe(plugins.debug({title: 'concat'}))
//         .pipe(gulp.dest('source/custom'))
//         .pipe(plugins.debug({title: 'dest'}));

//     gulp.src('source/custom/modules.js')
//         .pipe(plugins.debug({title: 'srcEND'}))
//         .pipe(gfi({
//             "/* file 1 */": "source/custom/document.ready.js"
//         }))
//         .pipe(plugins.debug({title: 'insert'}))
//         .pipe(gulp.dest('source/custom/1/js'))
//         .pipe(plugins.debug({title: 'destEND'}))
// }); //работает с двух запусков

gulp.task('modules', function() {
    gulp.src('source/custom/js/*.js')
        .pipe(plugins.debug({title: 'src'}))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('document.ready.js'))
        .pipe(plugins.debug({title: 'concat'}))
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('source/custom'))
        .pipe(plugins.debug({title: 'dest'}));

        gulp.src('source/custom/modules.js')
        //.pipe(plugins.sourcemaps.init())
        .pipe(plugins.debug({title: 'srcEND'}))
        .pipe(gfi({
            "/* file 1 */": "source/custom/document.ready.js"
        }))
        .pipe(plugins.debug({title: 'insert'}))
        //.pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('source/custom/1/js'))
        .pipe(plugins.debug({title: 'destEND'}))
});

